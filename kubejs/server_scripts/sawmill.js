//TAG fixes
onEvent('tags.items', (event) => {

    if (Platform.isLoaded('allthemodium')) {
        event.add('allthemodium:ancient_logs', ['allthemodium:ancient_log_0', 'allthemodium:ancient_log_1', 'allthemodium:ancient_log_2', 'allthemodium:stripped_ancient_log'])
        event.add('allthemodium:demonic_logs', ['allthemodium:demonic_log', 'allthemodium:stripped_demonic_log'])
        event.add('allthemodium:soul_logs', ['allthemodium:soul_log', 'allthemodium:soul_log_0', 'allthemodium:soul_log_1', 'allthemodium:soul_log_2', 'allthemodium:stripped_soul_log'])
    }
    if (Platform.isLoaded('hexerei')) {
        event.add('hexerei:mahogany_logs', ['hexerei:mahogany_log', 'hexerei:mahogany_wood', 'hexerei:stripped_mahogany_log', 'hexerei:stripped_mahogany_wood'])
        event.add('hexerei:willow_logs', ['hexerei:willow_log', 'hexerei:willow_wood', 'hexerei:stripped_willow_log', 'hexerei:stripped_willow_wood'])
    }
    if (Platform.isLoaded('naturesaura')) {
        event.add('naturesaura:ancient_logs', ['naturesaura:ancient_log', 'naturesaura:ancient_bark'])
    }
})

onEvent('recipes', (event) => {
    let CorailWoodcutterLoaded = Platform.isLoaded('corail_woodcutter')
    let ImmersiveEngineeringLoaded = Platform.isLoaded('immersiveengineering')
    let IE_KubeJS = Platform.isLoaded('kubejs_immersive_engineering')
    let MekanismLoaded = Platform.isLoaded('mekanism')
    let Mek_KubeJS = Platform.isLoaded('kubejs_mekanism')
    let ThermalExpansionLoaded = Platform.isLoaded('thermal_expansion')
    let Thermal_KubeJS = Platform.isLoaded('kubejs_thermal')

    function processInfo(input) {
        let inTag = input.tag.toString().split(":")
        let inMod = inTag[0]
        if (inMod == 'forge') {
            let inLogs = Ingredient.of(input).stacks
            inMod = inLogs[0].mod
        }
        let inLog = inTag[1].split('_')
        let prefix = "null"
        if (inLog.length == 2) {
            prefix = inLog[0]
        } else if (inLog.length > 2) {
            prefix = inLog.slice(0, -1).join('_')
        } else if (inLog[0].contains('logs/')) {
            prefix = inLog[0].split("/")[1]
        }
        return [inMod, prefix];
    }

    function addRecipeCorailWoodCutting(input, output, count, id) {
        event.custom({
            type: "corail_woodcutter:woodcutting",
            ingredient: input,
            result: output,
            count: count
        }).id(id)
        return;
    }

    function addCorailWoodcutter(input, output) {
        let corail = {
            boat: { planks: 0, logs: 1 },
            button: { planks: 1, logs: 4 },
            door: { planks: 1, logs: 4 },
            fence: { planks: 1, logs: 4 },
            fence_gate: { planks: 0, logs: 1 },
            planks: { planks: 0, logs: 4 },
            pressure_plate: { planks: 1, logs: 4 },
            slab: { planks: 2, logs: 8 },
            stairs: { planks: 1, logs: 4 },
            trapdoor: { planks: 1, logs: 4 }
        };
        if (event.countRecipes({ type: "corail_woodcutter:woodcutting", input: input }) > 3) {
            return;
        }
        let parsed = processInfo(input)
        let outMod = output.mod
        let outPrefix = output.item.toString().slice(0, -7);
        ['boat', 'button', 'door', 'fence', 'fence_gate', 'planks', 'pressure_plate', 'slab', 'stairs', 'trapdoor'].forEach(item => {
            let outItem = `${outMod}:${outPrefix}_${item}`
            if (Item.of(outItem).isEmpty()) {
                if (outMod == 'allthemodium') {
                    if (item == 'slab') {
                        outItem = `${outMod}:${outPrefix}_wooden_${item}s`
                    } else if (item == 'trapdoor') {
                        outItem = `${outMod}:${outPrefix}_trap_door`
                    } else {
                        outItem = `${outMod}:${outPrefix}_wooden_${item}`
                    }
                    if (Item.of(outItem).isEmpty()) { return; }
                } else {
                    return;
                }
            }
            let outCount = corail[item].logs * (output.count / 4)
            if (outCount < 1) { return; }
            addRecipeCorailWoodCutting(input, outItem, outCount, `kubejs:woodcutting/${parsed[0]}/${outPrefix}_${item}_from_${parsed[1]}_log`)
            outCount = corail[item].planks * (output.count / 4)
            if (outCount < 1 || parsed[0] != outMod) { return; }
            addRecipeCorailWoodCutting(output, outItem, outCount, `kubejs:woodcutting/${parsed[0]}/${outPrefix}_${item}_from_${parsed[1]}_planks`)
        })
        return;
    }

    function addMekanismSawing(input, output) {
        let mekoutput = output.copy()
        mekoutput.count = 1.5 * mekoutput.count
        let parsed = processInfo(input)
        let id = `kubejs:sawing/${parsed[0]}/log/${parsed[1]}`
        if (Mek_KubeJS) {
            if (event.countRecipes({ type: 'mekanism:sawing', input: input }) > 0) {
                return;
            }
            event.recipes.mekanismSawing(mekoutput, input, Item.of('mekanism:sawdust').withChance(1.5 / mekoutput.count)).id(id)
        } else {
            if (parsed[0] == 'minecraft') {
                if (event.countRecipes({ type: 'mekanism:sawing', id: `/log\/${parsed[1]}/` }) > 0) {
                    return;
                }
            } else {
                if (event.countRecipes({ type: 'mekanism:sawing', id: `/${parsed[0]}\/sawing\/log\/${parsed[1]}/` }) > 0) {
                    return;
                }
            }
            event.custom({
                "type": "mekanism:sawing",
                "input": { "ingredient": input },
                "mainOutput": mekoutput,
                "secondaryOutput": {
                    "tag": "forge:dusts/wood"
                },
                "secondaryChance": 1.5 / mekoutput.count
            }).id(id)
        }
    }

    function addRecipeImmersiveEngineeringSawmill(input, output, secondary, stripped, energy, id) {
        event.custom({
            "type": "immersiveengineering:sawmill",
            "secondaries": secondary,
            "result": output,
            "energy": energy,
            "input": input,
            "stripped": stripped
        }).id(id)
    }

    function addRecipeImmersiveEngineeringSawmillStripped(input, output, secondary, energy, id) {
        event.custom({
            "type": "immersiveengineering:sawmill",
            "secondaries": secondary,
            "result": output,
            "input": input,
            "energy": energy
        }).id(id)
    }

    function addImmersiveEngineeringSawing(input, output) {
        let ieoutput = output.copy()
        ieoutput.count = 1.5 * ieoutput.count
        let parsed = processInfo(input)
        if (IE_KubeJS) {
            if (event.countRecipes({ type: 'immersiveengineering:sawmill', input: input }) > 0) { return; }
        } else {
            if (event.countRecipes({ type: 'immersiveengineering:sawmill', id: `/sawmill\/${parsed[1]}_log/` }) > 0) { return; }
        }
        let id1 = `kubejs:sawmill/${parsed[0]}/${parsed[1]}_log`
        let id2 = `kubejs:sawmill/${parsed[0]}/stripped_${parsed[1]}_log`
        let secondary1 = [
            { "output": { "tag": "forge:dusts/wood" }, "stripping": false },
            { "output": { "tag": "forge:dusts/wood" }, "stripping": true }
        ]
        let secondary2 = [{ "output": { "tag": "forge:dusts/wood" }, "stripping": false }]
        let tag = Ingredient.of(input).stacks
        let logs = []
        let stripped = []
        tag.forEach(wood => {
            if (wood.toString().contains('stripped')) {
                stripped.push(wood)
            } else {
                logs.push(wood)
            }
        })
        if (stripped.length == 0) {
            if (IE_KubeJS) {
                event.recipes.immersiveengineeringSawmill(ieoutput, logs, secondary2).energy(800).id(id2)
            } else {
                addRecipeImmersiveEngineeringSawmillStripped(logs, ieoutput, secondary2, 800, id2)
            }
        } else if (parsed[0] == 'ars_nouveau') {
            ['red', 'blue', 'purple', 'green'].forEach(color => {
                let logs2 = []
                logs.forEach(log => {
                    if (log.toString().contains(color)) { logs2.push(log) }
                })
                let stripped2 = []
                stripped.forEach(log => {
                    if (log.toString().contains(color)) { stripped2.push(log) }
                })
                let id1 = `kubejs:sawmill/${parsed[0]}/${color}_${parsed[1]}_log`
                let id2 = `kubejs:sawmill/${parsed[0]}/stripped_${color}_${parsed[1]}_log`
                if (IE_KubeJS) {
                    event.recipes.immersiveengineeringSawmill(ieoutput, logs2, secondary1, stripped2[0]).energy(1600).id(id1)
                    event.recipes.immersiveengineeringSawmill(ieoutput, stripped2, secondary2).energy(800).id(id2)
                } else {
                    addRecipeImmersiveEngineeringSawmill(logs2, ieoutput, secondary1, stripped2[0], 1600, id1)
                    addRecipeImmersiveEngineeringSawmillStripped(stripped2, ieoutput, secondary2, 800, id2)
                }
            })
        } else {
            if (IE_KubeJS) {
                event.recipes.immersiveengineeringSawmill(ieoutput, logs, secondary1, stripped[0]).energy(1600).id(id1)
                event.recipes.immersiveengineeringSawmill(ieoutput, stripped, secondary2).energy(800).id(id2)
            } else {
                addRecipeImmersiveEngineeringSawmill(logs, ieoutput, secondary1, stripped[0], 1600, id1)
                addRecipeImmersiveEngineeringSawmillStripped(stripped, ieoutput, secondary2, 800, id2)
            }
        }
    }

    function addThermalSawing(input, output) {
        let thermalOutput = output.copy()
        thermalOutput.count = 1.5 * thermalOutput.count
        let parsed = processInfo(input)
        let id = `kubejs:thermal/sawmill/${parsed[0]}/${parsed[1]}_log`
        if (Thermal_KubeJS) {
            if (event.countRecipes({ type: 'thermal:sawmill', input: input }) > 0) { return; }
            event.recipes.thermal.sawmill([thermalOutput, Item.of(`#forge:dusts/wood`).withChance(1.25)], input).energy(1000).id(id)
        } else {
            let found = false
            event.forEachRecipe({type: 'thermal:sawmill'}, recipe => {
                recipeId = recipe.getId()
                regex = new RegExp(`${parsed[1]}_[log|stem]`)
                if (regex.test(recipeId)) {
                    if (parsed[0] == 'minecraft') {
                        found = true
                        return;
                    }
                    regex2 = new RegExp(parsed[0])
                    if (regex2.test(recipeId)) {
                        found = true
                    }
                }
            })
            if (found) {return;}
            event.custom({
                "type": "thermal:sawmill",
                "ingredient": input,
                "result": [
                    thermalOutput,
                    Item.of(`#forge:dusts/wood`).withChance(1.25)
                    ],
                "energy": 1000,
            }).id(id)
        }
    }

    let planks = Ingredient.of('#minecraft:planks').stacks
    planks.forEach(plank => {
        if (plank.getMod() === 'chipped') {
            return;
        }
        event.forEachRecipe({ type: 'minecraft:crafting_shapeless', output: plank }, recipe => {
            let inputIngredient = recipe.inputItems[0]
            if (inputIngredient.tag === undefined) {
                return;
            }
            let outputItem = recipe.outputItems[0]
            if (CorailWoodcutterLoaded) {
                addCorailWoodcutter(inputIngredient, outputItem)
            }
            if (MekanismLoaded) {
                addMekanismSawing(inputIngredient, outputItem)
            }
            if (ImmersiveEngineeringLoaded) {
                addImmersiveEngineeringSawing(inputIngredient, outputItem)
            }
            if(ThermalExpansionLoaded) {
                addThermalSawing(inputIngredient, outputItem)
            }
        });
    });

    let customOut = {
        "naturesaura:ancient": 2
    };
    //Fix plank recipes
    let customWoods = []
    if (Platform.isLoaded('allthemodium')) {
        customWoods = customWoods.concat(['allthemodium:ancient', 'allthemodium:demonic', 'allthemodium:soul'])
    }
    if (Platform.isLoaded('hexerei')) {
        customWoods = customWoods.concat(['hexerei:mahogany', 'hexerei:willow'])
    }
    if (Platform.isLoaded('naturesaura')) {
        customWoods = customWoods.concat(['naturesaura:ancient'])
    }
    customWoods.forEach(wood => {
        event.remove({ type: 'minecraft:crafting_shapeless', output: `${wood}_planks` })
        event.shapeless(`${customOut[wood] ?? '4'}x ${wood}_planks`, [`#${wood}_logs`])
        if (CorailWoodcutterLoaded) {
            addCorailWoodcutter(Ingredient.of(`#${wood}_logs`), Ingredient.of(`${wood}_planks`).withCount(`${customOut[wood] ?? '4'}`))
        }
        if (MekanismLoaded) {
            addMekanismSawing(Ingredient.of(`#${wood}_logs`), Ingredient.of(`${wood}_planks`).withCount(`${customOut[wood] ?? '4'}`))
        }
        if (ImmersiveEngineeringLoaded) {
            addImmersiveEngineeringSawing(Ingredient.of(`#${wood}_logs`), Ingredient.of(`${wood}_planks`).withCount(`${customOut[wood] ?? '4'}`))
        }
        if (ThermalExpansionLoaded) {
            addThermalSawing(Ingredient.of(`#${wood}_logs`), Ingredient.of(`${wood}_planks`).withCount(`${customOut[wood] ?? '4'}`))
        }
    })

})
