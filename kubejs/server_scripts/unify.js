//priority: 999
onEvent('recipes', (event) => {

  let oreOverride = {
    iron: 'minecraft',
    gold: 'minecraft',
    copper: 'minecraft',
    allthemodium: 'allthemodium',
    vibranium: 'allthemodium',
    unobtainium: 'allthemodium',
    cobalt: 'tconstruct'
  }

  let craftOverride = {
    allthemodium: 'allthemodium',
    vibranium: 'allthemodium',
    unobtainium: 'allthemodium',
    cobalt: 'kubejs'
  }
  function mekUnifyOres(metal, type) {
    let input = '';
    let inputCount = 1;
    let output = '';
    let outputCount = 1;

    if (type === 'ingot') {
      input = `#forge:ingots/${metal}`;
      output = `${craftOverride[metal] ?? 'alltheores'}:${metal}_dust`;
      event.remove({ id: `mekanism:processing/${metal}/dust/from_ingot` })

      event.custom({
        "type": "mekanism:crushing",
        "input": {
          "ingredient": Ingredient.of(input)
        },
        "output": Ingredient.of(output)
      }).id(`kubejs:mekanism/crushing/${type}_${metal}`)
      return;
    }

    if (type === 'ore') {
      input = `#forge:ores/${metal}`;
      output = `${craftOverride[metal] ?? 'alltheores'}:${metal}_dust`;
      outputCount = 1;

      event.remove({ id: `mekanism:processing/${metal}/dust/from_ore` })
    }

    if (type === 'raw_ore') {
      input = `#forge:raw_ores/${metal}`;
      inputCount = 3;
      output = `${craftOverride[metal] ?? 'alltheores'}:${metal}_dust`;
      outputCount = 4;

      event.remove({ id: `mekanism:processing/${metal}/dust/from_raw_ore` })
    }

    if (type === 'dirty_dust') {
      input = `#mekanism:dirty_dusts/${metal}`;
      output = `${craftOverride[metal] ?? 'alltheores'}:${metal}_dust`;

      event.remove({ id: `mekanism:processing/${metal}/dust/from_dirty_dust` })
    }

    event.custom({
      "type": "mekanism:enriching",
      "input": {
        "amount": inputCount,
        "ingredient": Ingredient.of(input)
      },
      "output": {
        "item": output,
        "count": outputCount,
      }
    }).id(`kubejs:mekanism/enriching/${metal}/dust/from_${type}`)
  }

  function ieUnifyOres(input, type) {
    let furnaceTime = 100;
    let furnaceEnergy = 51200;
    let furnaceSecondaries = [];
    let crusherEnergy = 3000;
    let crusherSecondaries = [];
    let inputIngredient = '';
    let crusherOutput = '';
    let furnaceOutput = ''
    let outputCount = 1;

    if (type === 'ore') {
      furnaceTime = 200;
      furnaceEnergy = 102400;
      crusherEnergy = 6000;
      inputIngredient = `#forge:ores/${input}`;
      crusherOutput = `${oreOverride[input] ?? 'alltheores'}:raw_${input}`;
      crusherSecondaries.push({
        chance: 0.33,
        output: Ingredient.of(crusherOutput)
      })
      furnaceOutput = crusherOutput;
      furnaceSecondaries.push({
        chance: 0.50,
        output: Ingredient.of(furnaceOutput)
      })
      event.remove({ id: `immersiveengineering:crafting/hammercrushing_${input}` });
      event.shapeless(crusherOutput, [inputIngredient, '#alltheores:ore_hammers']).id(`kubejs:hammercrushing/${input}_ore`)
    }

    if (type === 'raw_block') {
      furnaceTime = 900;
      furnaceEnergy = 230400;
      crusherEnergy = 54000;
      inputIngredient = `#forge:storage_blocks/raw_${input}`;
      crusherOutput = `${craftOverride[input] ?? 'alltheores'}:${input}_dust`;
      furnaceOutput = `${oreOverride[input] ?? 'alltheores'}:${input}_ingot`;
      outputCount = 18;
    }

    if (type === 'raw_ore') {
      furnaceEnergy = 25600;
      crusherEnergy = 6000;
      inputIngredient = `#forge:raw_ores/${input}`;
      crusherOutput = `${craftOverride[input] ?? 'alltheores'}:${input}_dust`;
      furnaceOutput = `${oreOverride[input] ?? 'alltheores'}:${input}_ingot`;
      outputCount = 2;
    }

    if (type === 'ingot') {
      inputIngredient = `#forge:ingots/${input}`;
      crusherOutput = `${craftOverride[input] ?? 'alltheores'}:${input}_dust`;
    }

    if (type === 'dust') {
      inputIngredient = `#forge:dusts/${input}`;
      furnaceOutput = `${oreOverride[input] ?? 'alltheores'}:${input}_ingot`;
    }

    if (crusherOutput !== '') {
      event.remove({ id: `immersiveengineering:crusher/${type}_${input}` })
      event.custom({
        "type": "immersiveengineering:crusher",
        "secondaries": crusherSecondaries,
        "result": {
          "count": outputCount,
          "base_ingredient": Ingredient.of(crusherOutput)
        },
        "input": Ingredient.of(inputIngredient),
        "energy": crusherEnergy
      }).id(`kubejs:crusher/${type}_${input}`);
    }

    if (furnaceOutput !== '') {
      event.remove({ id: `immersiveengineering:arcfurnace/${type}_${input}` })
      event.custom({
        "type": "immersiveengineering:arc_furnace",
        "additives": [],
        "secondaries": furnaceSecondaries,
        "results": [{
          "count": outputCount,
          "base_ingredient": Ingredient.of(furnaceOutput)
        }],
        "input": Ingredient.of(inputIngredient),
        "time": furnaceTime,
        "energy": furnaceEnergy
      }).id(`kubejs:arcfurnace/${type}_${input}`);
    }
  }

  function ieUnifyPress(input, type) {
    let output = `${craftOverride[input] ?? 'alltheores'}:${input}_${type}`
    let inputCount = 1;

    if (type === 'gear') {
      inputCount = 4;
    }

    if (type === 'plate') {
      event.remove({ id: `immersiveengineering:crafting/plate_${input}_hammering` });
      event.shapeless(output, [`2x #forge:ingots/${input}`, '#misctags:immersive_engineering_hammer']).id(`kubejs:crafting/plate_${input}_hammering`);
    }

    //event.remove({ id: `immersiveengineering:metalpress/${type}_${input}` })
    //event.custom({
      //"type": "immersiveengineering:metalpress",
      //"mold": `immersiveengineering:mold_${type}`,
      //"result": Ingredient.of(output),
      //"input": {
        //"count": inputCount,
        //"base_ingredient": {
          //"tag": `forge:ingots/${input}`
        //}
      //},
      //"energy": 2400
    //}).id(`kubejs:metalpress/${type}_${input}`)
  }

  //Unify ores for FTB Industrial Contraptions
  //Supported types: ore, raw_ore, ingot
  function ftbicUnifyOres(metal, type) {
    let outputCount = 2;
    let inputTag = `#forge:${type}s/${metal}`;

    if (type === 'ingot') {
      outputCount = 1;
    }

    event.custom({
      "type": "ftbic:macerating",
      "inputItems": [
        {
          "ingredient": Ingredient.of(inputTag),
          "count": 1
        }
      ],
      "outputItems": [
        {
          "item": `${craftOverride[metal] ?? 'alltheores'}:${metal}_dust`,
          "count": outputCount,
        }
      ]
    }).id(`kubejs:ftbic/macerating/${type}/${metal}_to_dust`)
  }

  //Unify pressing for FTB Industrial Contraptions
  //Supported types: plates, rods, gears
  function ftbicUnifyPress(metal, type) {
    let recipeType = 'rolling';
    let inputTag = `#forge:ingots/${metal}`;
    let inputCount = 1;
    let output = `${craftOverride[metal] ?? 'alltheores'}:${metal}_${type}`

    if (type === 'rod') {
      recipeType = 'extruding';
    }

    if (type === 'gear') {
      inputCount = 4;
      inputTag = `#forge:plates/${metal}`
    }

    event.custom({
      "type": `ftbic:${recipeType}`,
      "inputItems": [
        {
          "ingredient": Ingredient.of(inputTag),
          "count": inputCount
        }
      ],
      "outputItems": [
        {
          "item": output,
          "count": 1
        }
      ]
    }).id(`kubejs:ftbic/${recipeType}/${metal}_to_${metal}_${type}`)
  }

  let thermalSecondaries = {
    zinc: "copper",
    tin: "thermal:apatite",
    silver: "lead",
    iron: "nickel",
    platinum: "tin",
    copper: "gold",
    lead: "silver",
    nickel: "copper",
    gold: "thermal:cinnabar",
  }

  let thermalSmelterRawSecondaryChanceOverrides = {
    tin: 0.2
  }

  let thermalSmelterOreSecondaryChanceOverrides = {
    tin: 0.8,
    gold: 0.1
  }

  function thermalUnifySmelterDustRecipe(metal) {
    if (vanillaMetals.includes(metal)) {
      return;
    }

    if (thermalMetals.includes(metal) || thermalAlloys.includes(metal)) {
      event.remove({type: "thermal:smelter", id: `/smelter_${metal}_dust/`});
    }

    let id = `kubejs:thermal/smelter/${metal}_dust`;
    let ingredient = Ingredient.of(`#forge:dusts/${metal}`);
    let outputs = [];

    let mainResult = {"item": `${oreOverride[metal] ?? 'alltheores'}:${metal}_ingot`, "count": 1};
    outputs.push(mainResult)

    event.custom({
      "type": "thermal:smelter",
      "ingredient": ingredient,
      "result": outputs,
      "energy_mod": 0.5
    }).id(id);
  }

  function thermalUnifySmelterRawRecipe(metal) {
    if (vanillaMetals.includes(metal) || thermalMetals.includes(metal)) {
      event.remove({type: "thermal:smelter", id: `/raw_${metal}/`});
    }

    let id = `kubejs:thermal/smelter/raw_${metal}`;
    let ingredient = Ingredient.of(`#forge:raw_materials/${metal}`)
    let outputs = [];

    let mainResult = {"item": `${oreOverride[metal] ?? 'alltheores'}:${metal}_ingot`, "chance": 1.5, "locked": true};
    outputs.push(mainResult);

    if (metal in thermalSecondaries) {
      let extraItemName = thermalSecondaries[metal]
      let extraItem;
      let chance = 1;

      if (metal in thermalSmelterRawSecondaryChanceOverrides) {
        chance = thermalSmelterRawSecondaryChanceOverrides[metal];
      }

      if (extraItemName.includes('thermal')) {
        extraItem = Item.of(extraItemName)
      } else if (extraItemName === 'iron' || extraItemName === 'gold') {
        extraItem = Item.of(`minecraft:${extraItemName}_nugget`)
      } else {
        extraItem = Item.of(`${craftOverride[extraItemName] ?? 'alltheores'}:${extraItemName}_nugget`)
      }

      outputs.push(extraItem.withChance(chance))
    }

    event.custom({
      "type": "thermal:smelter",
      "ingredient": ingredient,
      "result": outputs,
      "experience": 0.1
    }).id(id);
  }

  function thermalUnifySmelterOreRecipe(metal) {
    if (vanillaMetals.includes(metal) || thermalMetals.includes(metal)) {
      event.remove({type: "thermal:smelter", id: `/${metal}_ore/`});
    }

    let id = `kubejs:thermal/smelter/${metal}_ore`;
    let ingredient = Ingredient.of(`#forge:ores/${metal}`);
    let outputs = [];

    let mainResult = {"item": `${oreOverride[metal] ?? 'alltheores'}:${metal}_ingot`, "chance": 1.0};
    outputs.push(mainResult);

    if (metal in thermalSecondaries) {
      let extraItemName = thermalSecondaries[metal];
      let chance = 0.2;

      if (metal in thermalSmelterOreSecondaryChanceOverrides) {
        chance = thermalSmelterRawSecondaryChanceOverrides[metal];
      }

      if (extraItemName.includes('thermal')) {
        outputs.push({"item": extraItemName, "chance": chance})
      } else {
        outputs.push({"item": `${oreOverride[extraItemName] ?? 'alltheores'}:${extraItemName}_ingot`, "chance": chance})
      }
    }

    outputs.push(Item.of("thermal:rich_slag").withChance(0.2));

    event.custom({
      "type": "thermal:smelter",
      "ingredient": ingredient,
      "result": outputs,
      "experience": 0.2
    }).id(id);
  }

  function thermalUnifySmelterAlloyRecipe(metal) {
    if (thermalAlloys.includes(metal)) {
      event.remove({type: "thermal:smelter", id: `/alloy_${metal}/`})
    }
  }

  function thermalUnifySmelterMetalAll(metal) {
    thermalUnifySmelterDustRecipe(metal);
    thermalUnifySmelterRawRecipe(metal);
    thermalUnifySmelterOreRecipe(metal);
  }

  function thermalUnifySmelterAlloyAll(metal) {
    thermalUnifySmelterDustRecipe(metal);
    thermalUnifySmelterAlloyRecipe(metal);
  }

  function thermalUnifyPulverizer(metal, type) {
    let outputs = []
    let input = Ingredient.of(`#forge:${type}s/${metal}`)
    let id = `kubejs:thermal/pulverizer/${metal}_dust_from_${type}`
    let experience = 0
    let energy_mod = 1

    if (type === 'ingot') {
      event.remove({ type: 'thermal:pulverizer', id: `/${metal}_ingot_to_dust/` })
      outputs.push(Item.of(`${craftOverride[metal] ?? 'alltheores'}:${metal}_dust`))
      energy_mod = 0.5
    } else if (type === 'ore') {
      event.remove({ type: 'thermal:pulverizer', id: `/${metal}_ore/` })
      outputs.push(Item.of(`${craftOverride[metal] ?? 'alltheores'}:${metal}_dust`).withChance(2.0))
      if (metal in thermalSecondaries) {
        let extraItem = thermalSecondaries[metal]
        if (extraItem.includes('thermal')) {
          outputs.push(Item.of(extraItem).withChance(0.1))
        } else {
          outputs.push(Item.of(`${craftOverride[extraItem] ?? 'alltheores'}:${extraItem}_dust`).withChance(0.1))
        }
      }
      outputs.push(Item.of('minecraft:gravel').withChance(0.2))
      experience = 0.2
    } else if (type === 'raw_ore') {
      event.remove({ type: 'thermal:pulverizer', id: `/raw_${metal}/` })
      outputs.push(Item.of(`${craftOverride[metal] ?? 'alltheores'}:${metal}_dust`).withChance(1.25))
      if (metal in thermalSecondaries) {
        let extraItem = thermalSecondaries[metal]
        if (extraItem.includes('thermal')) {
          outputs.push(Item.of(extraItem).withChance(0.05))
        } else {
          outputs.push(Item.of(`${craftOverride[extraItem] ?? 'alltheores'}:${extraItem}_dust`).withChance(0.05))
        }
      }
      experience = 0.1
    } else { return; }

    event.custom({
      "type": "thermal:pulverizer",
      "ingredient": input,
      "result": outputs,
      "experience": experience,
      "energy_mod": energy_mod
    }).id(id)
  }

  function thermalUnifyPress(metal, type) {
    let outputs = []
    let inputs = []
    let id = ''

    if (type === 'plate') {
      event.remove({ type: `thermal:press`, id: `/press_${metal}_ingot_to_${type}/` })
      inputs = [{ tag: `forge:ingots/${metal}` }]
      outputs = [Item.of(`${craftOverride[metal] ?? 'alltheores'}:${metal}_${type}`)]
      id = `kubejs:thermal/press/press_${metal}_ingot_to_${type}`
    } else if (type === 'gear') {
      event.remove({ type: `thermal:press`, id: `/press_${metal}_ingot_to_${type}/` })
      inputs = [{
        tag: `forge:ingots/${metal}`,
        count: 4
      }, {
        item: 'thermal:press_gear_die'
      }]
      outputs = [Item.of(`${craftOverride[metal] ?? 'alltheores'}:${metal}_${type}`)]
      id = `kubejs:thermal/press/press_${metal}_ingot_to_${type}`
    } else if (type === 'unpacking') {
      event.remove({ type: `thermal:press`, id: `/press_${metal}_${type}/` })
      inputs = [{
        tag: `forge:storage_blocks/${metal}`
      }, {
        item: 'thermal:press_unpacking_die'
      }]
      outputs = [Item.of(`${oreOverride[metal] ?? 'alltheores'}:${metal}_ingot`, 9)]
      id = `kubejs:thermal/press/press_${metal}_${type}`
    } else if (type === 'nugget_unpacking') {
      event.remove({ type: `thermal:press`, id: `/press_${metal}_${type}/` })
      inputs = [{
        tag: `forge:ingots/${metal}`
      }, {
        item: 'thermal:press_unpacking_die'
      }]
      if (metal == 'copper') {
        outputs = [Item.of(`alltheores:${metal}_nugget`, 9)]
      } else {
        outputs = [Item.of(`${oreOverride[metal] ?? 'alltheores'}:${metal}_nugget`, 9)]
      }
      id = `kubejs:thermal/press/press_${metal}_${type}`
    } else if (type === 'raw_unpacking') {
      event.remove({ type: `thermal:press`, id: `/press_raw_${metal}_unpacking/` })
      inputs = [{
        tag: `forge:storage_blocks/raw_${metal}`
      }, {
        item: 'thermal:press_unpacking_die'
      }]
      outputs = [Item.of(`${oreOverride[metal] ?? 'alltheores'}:raw_${metal}`, 9)]
      id = `kubejs:thermal/press/press_${metal}_${type}`
    } else if (type === 'packing') {
      event.remove({ type: `thermal:press`, id: `/press_${metal}_${type}/` })
      inputs = [{
        tag: `forge:ingots/${metal}`,
        count: 9
      }, {
        item: 'thermal:press_packing_3x3_die'
      }]
      outputs = [Item.of(`${oreOverride[metal] ?? 'alltheores'}:${metal}_block`)]
      id = `kubejs:thermal/press/press_${metal}_${type}`
    } else if (type === 'nugget_packing') {
      event.remove({ type: `thermal:press`, id: `/press_${metal}_${type}/` })
      inputs = [{
        tag: `forge:nuggets/${metal}`,
        count: 9
      }, {
        item: 'thermal:press_packing_3x3_die'
      }]
      outputs = [Item.of(`${oreOverride[metal] ?? 'alltheores'}:${metal}_ingot`)]
      id = `kubejs:thermal/press/press_${metal}_${type}`
    } else if (type === 'raw_packing') {
      event.remove({ type: `thermal:press`, id: `/press_raw_${metal}_packing/` })
      inputs = [{
        tag: `forge:raw_materials/${metal}`,
        count: 9
      }, {
        item: 'thermal:press_packing_3x3_die'
      }]
      outputs = [Item.of(`${oreOverride[metal] ?? 'alltheores'}:raw_${metal}_block`)]
      id = `kubejs:thermal/press/press_${metal}_${type}`
    } else { return; }

    event.custom({
      "type": "thermal:press",
      "ingredients": inputs,
      "result": outputs
    }).id(id)
  }

  function blastingUnifyOres(ore) {
    //Find all dust to ingot recipes, remove, and replace with a single one
    event.remove({ type: "minecraft:blasting", output: `#forge:ingots/${ore}`, input:`#forge:dusts/${ore}`})
    event.blasting(`${oreOverride[ore] ?? 'alltheores'}:${ore}_ingot`, `#forge:dusts/${ore}`).xp(0.2).id(`kubejs:blasting/${ore}_ingot_from_dust`)
    event.remove({ type: "minecraft:smelting", output: `#forge:ingots/${ore}`, input:`#forge:dusts/${ore}`})
    event.smelting(`${oreOverride[ore] ?? 'alltheores'}:${ore}_ingot`, `#forge:dusts/${ore}`).xp(0.2).id(`kubejs:smelting/${ore}_ingot_from_dust`)
    //Find all ore to ingot recipes, remove, and replace with a single one
    event.remove({ type: "minecraft:blasting", output: `#forge:ingots/${ore}`, input:`#forge:ores/${ore}`})
    event.blasting(`${oreOverride[ore] ?? 'alltheores'}:${ore}_ingot`, `#forge:ores/${ore}`).xp(1.0).id(`kubejs:blasting/${ore}_ingot_from_ore`)
    event.remove({ type: "minecraft:smelting", output: `#forge:ingots/${ore}`, input:`#forge:ores/${ore}`})
    event.smelting(`${oreOverride[ore] ?? 'alltheores'}:${ore}_ingot`, `#forge:ores/${ore}`).xp(1.0).id(`kubejs:smelting/${ore}_ingot_from_ore`)
    //Find all raw ore to ingot recipes, remove, and replace with a single one
    event.remove({ type: "minecraft:blasting", output: `#forge:ingots/${ore}`, input:`#forge:raw_materials/${ore}`})
    event.blasting(`${oreOverride[ore] ?? 'alltheores'}:${ore}_ingot`, `#forge:raw_materials/${ore}`).xp(0.7).id(`kubejs:blasting/${ore}_ingot_from_raw`)
    event.remove({ type: "minecraft:smelting", output: `#forge:ingots/${ore}`, input:`#forge:raw_materials/${ore}`})
    event.smelting(`${oreOverride[ore] ?? 'alltheores'}:${ore}_ingot`, `#forge:raw_materials/${ore}`).xp(0.7).id(`kubejs:smelting/${ore}_ingot_from_raw`)
  }

  vanillaMetals.forEach(metal => {
    removeRecipeByID(event, [
      `bloodmagic:smelting/ingot_${metal}`,
      `bloodmagic:smelting/blasting_ingot_${metal}`,
      `ftbic:blasting/dusts/${metal}_to_${metal}_ingot`,
      `ftbic:smelting/dusts/${metal}_to_${metal}_ingot`,
    ])
  })

  atoMetals.concat(vanillaMetals, atmMetals).forEach(ore => {
    ['ore', 'raw_ore', 'raw_block', 'ingot', 'dust'].forEach(type => ieUnifyOres(ore, type));
    ['ore', 'raw_ore', 'ingot'].forEach(type => ftbicUnifyOres(ore, type));
    ['ore', 'raw_ore', 'ingot'].forEach(type => thermalUnifyPulverizer(ore, type));
    ['plate', 'gear', 'rod'].forEach(type => ieUnifyPress(ore, type));
    ['plate', 'gear', 'rod'].forEach(type => ftbicUnifyPress(ore, type));
    ['plate', 'gear', 'unpacking', 'packing', 'raw_unpacking', 'raw_packing', 'nugget_unpacking', 'nugget_packing'].forEach(type => thermalUnifyPress(ore, type));
    blastingUnifyOres(ore);
    thermalUnifySmelterMetalAll(ore);
    event.remove({ id: `thermal:parts/${ore}_gear` });
    //Remove combiner recipes
    event.remove({ type: "mekanism:combining", id: `/${ore}\/ore/` });
  });

  atoAlloys.forEach(alloy => {
    ['plate', 'gear', 'rod'].forEach(type => ieUnifyPress(alloy, type));
    ['plate', 'gear', 'rod'].forEach(type => ftbicUnifyPress(alloy, type));
    ['plate', 'gear', 'unpacking', 'packing', 'nugget_unpacking', 'nugget_packing'].forEach(type => thermalUnifyPress(alloy, type));
    ftbicUnifyOres(alloy, 'ingot');
    thermalUnifyPulverizer(alloy, 'ingot');
    thermalUnifySmelterAlloyAll(alloy);
    mekUnifyOres(alloy, 'ingot');
    event.remove({ id: `thermal:parts/${alloy}_gear` });
  });

  vanillaMetals.concat(mekanismMetals).forEach(ore => {
    ['ore', 'raw_ore', 'ingot', 'dirty_dust'].forEach(type => mekUnifyOres(ore, type));
  });

  mekanismMetals.forEach(metal => {
    removeRecipeByID(event, [
      `mekanism:processing/${metal}/raw_storage_blocks/from_raw`,
      `mekanism:processing/${metal}/raw/from_raw_block`,
      `mekanism:processing/${metal}/storage_blocks/from_ingots`,
      `mekanism:processing/${metal}/ingot/from_block`,
      `mekanism:processing/${metal}/nugget/from_ingot`,
    ])
    event.remove({ output: `mekanism:ingot_${metal}` })
  });

  //Mekanism alloys overlapping with ATO
  ['steel', 'bronze'].forEach(metal => {
    removeRecipeByID(event, [
      `mekanism:nuggets/${metal}`,
      `mekanism:storage_blocks/${metal}`,
      `mekanism:processing/${metal}/ingot/from_nuggets`,
      `mekanism:processing/${metal}/ingot/from_block`,
      `mekanism:processing/${metal}/ingot/from_dust_smelting`,
      `mekanism:processing/${metal}/ingot/from_dust_blasting`,
      `mekanismtools:${metal}/nugget_from_smelting`,
      `mekanismtools:${metal}/nugget_from_blasting`,
    ])
  });

  immersiveMetals.forEach(metal => {
    event.remove({ id: `immersiveengineering:crafting/raw_${metal}_to_raw_block_${metal}` })
    event.remove({ id: `immersiveengineering:crafting/raw_block_${metal}_to_raw_${metal}` })
  });

  immersiveMetals.concat(immersiveAlloys).forEach(metal => {
    event.remove({ id: `immersiveengineering:crafting/ingot_${metal}_to_storage_${metal}` })
    event.remove({ id: `immersiveengineering:crafting/storage_${metal}_to_ingot_${metal}` })
    event.remove({ id: `immersiveengineering:crafting/ingot_${metal}_to_nugget_${metal}` })
    event.remove({ output: `immersiveengineering:ingot_${metal}` })
  });

  immersiveAlloys.forEach(metal => {
    event.remove({id: `immersiveengineering:crafting/${metal}_mix`})
  })

  ftbicMetals.concat(ftbicAlloys, vanillaMetals).forEach(metal => {
    event.remove({ id: `ftbic:macerating/ingots/${metal}_to_dust` })
    event.remove({ id: `ftbic:blasting/dusts/${metal}_to_ingot` })
    event.remove({ id: `ftbic:smelting/dusts/${metal}_to_ingot` })
    event.remove({ id: `ftbic:blasting/raw_materials/${metal}_to_ingot` })
    event.remove({ id: `ftbic:smelting/raw_materials/${metal}_to_ingot` })
    event.remove({ id: `ftbic:shaped/ingots/${metal}_to_${metal}_rod` })
    event.remove({ id: `ftbic:shaped/ingots/${metal}_to_${metal}_gear` })
    event.remove({ id: `ftbic:extruding/ingots/${metal}_to_${metal}_rod` })
    event.remove({ id: `ftbic:rolling/ingots/${metal}_to_${metal}_plate` })
    event.remove({ id: `ftbic:rolling/plates/${metal}_to_${metal}_gear` })
    event.remove({ id: `ftbic:shapeless/${metal}_block_to_${metal}_ingot` })
    event.remove({ id: `ftbic:shaped/${metal}_ingot_to_${metal}_block` })
    event.remove({ id: `ftbic:shapeless/${metal}_ingot_to_${metal}_nugget` })
    event.remove({ id: `ftbic:shaped/nuggets/${metal}_to_${metal}_ingot` })
  });

  ftbicMetals.concat(vanillaMetals).forEach(metal => {
    event.remove({ id: `ftbic:blasting/ores/${metal}_to_ingot` })
    event.remove({ id: `ftbic:smelting/ores/${metal}_to_ingot` })
    event.remove({ id: `ftbic:macerating/ores/${metal}_to_dust` })
    event.remove({ id: `ftbic:macerating/raw_materials/${metal}_to_dust` })
  });

  thermalMetals.forEach(metal => {
    removeRecipeByID(event, [
      `thermal:storage/raw_${metal}_block`,
      `thermal:storage/raw_${metal}_from_block`,
      `thermal:smelting/${metal}_ingot_from_raw_blasting`,
      `thermal:smelting/${metal}_ingot_from_raw_smelting`,
      `thermal:smelting/${metal}_ingot_from_ore_blasting`,
      `thermal:smelting/${metal}_ingot_from_ore_smelting`,
      `thermal:smelting/${metal}_ingot_from_deepslate_ore_blasting`,
      `thermal:smelting/${metal}_ingot_from_deepslate_ore_smelting`,
      `thermal:smelting/${metal}_ingot_from_dust_blasting`,
      `thermal:smelting/${metal}_ingot_from_dust_smelting`,
      `create:smelting/${metal}_ingot_compat_thermal`,
      `create:blasting/${metal}_ingot_compat_thermal`,
      `create:splashing/thermal/crushed_${metal}_ore`,
    ])
  });

  thermalMetals.concat(thermalAlloys).forEach(metal => {
    removeRecipeByID(event, [
      `thermal:storage/${metal}_block`,
      `thermal:storage/${metal}_ingot_from_block`,
      `thermal:storage/${metal}_ingot_from_nuggets`,
      `thermal:storage/${metal}_nugget_from_ingot`,
      `thermal:smelting/${metal}_ingot_from_dust_blasting`,
      `thermal:smelting/${metal}_ingot_from_dust_smelting`,
    ])
  });

  removeRecipeByID(event, [
    'thermal:electrum_dust_2',
    'thermal:fire_charge/electrum_ingot_2',
    'thermal:constantan_dust_2',
    'thermal:fire_charge/constantan_ingot_2',
    'thermal:enderium_dust_2',
    'thermal:fire_charge/enderium_ingot_2',
    'thermal:lumium_dust_4',
    'thermal:fire_charge/lumium_ingot_4',
    'thermal:signalum_dust_4',
    'thermal:fire_charge/signalum_ingot_4',
    'thermal:invar_dust_3',
    'thermal:fire_charge/invar_ingot_3',
    'thermal:bronze_dust_4',
  ]);

  ['iridium', 'cobalt'].forEach(ore => {
    ['ore', 'raw_ore', 'ingot', 'dust'].forEach(type => ieUnifyOres(ore, type));
    ['ore', 'raw_ore', 'ingot'].forEach(type => mekUnifyOres(ore, type));
    ['ore', 'raw_ore', 'ingot'].forEach(type => ftbicUnifyOres(ore, type));
    blastingUnifyOres(ore);
  });

  ['cobalt'].forEach(ore => {
    ieUnifyOres(ore, 'raw_block');
  });

  event.custom({
    "type": "immersiveengineering:crusher",
    "secondaries": [],
    "result": {
      "count": 3,
      "base_ingredient": Ingredient.of('ae2:certus_quartz_dust')
    },
    "input": Ingredient.of('#forge:ores/certus_quartz'),
    "energy": 6000
  }).id(`kubejs:crusher/ore_certus_quartz`);

  event.custom({
    "type": "immersiveengineering:crusher",
    "secondaries": [],
    "result": {
      "count": 3,
      "base_ingredient": Ingredient.of('forbidden_arcanus:arcane_crystal')
    },
    "input": Ingredient.of('#forbidden_arcanus:arcane_crystal_ores'),
    "energy": 6000
  }).id(`kubejs:crusher/ore_arcane_crystal`);

  event.custom({
    "type": "immersiveengineering:crusher",
    "secondaries": [],
    "result": {
      "count": 1,
      "base_ingredient": Ingredient.of('forbidden_arcanus:xpetrified_orb')
    },
    "input": Ingredient.of('#forge:ores/xpetrified_ore'),
    "energy": 6000
  }).id(`kubejs:crusher/ore_xpetrified`);

  ieUnifyPress('compressed_iron', 'gear');

  //Temporary for missing recipes
  event.shapeless('kubejs:cobalt_dust',['#forge:raw_ores/cobalt','#alltheores:ore_hammers'])

  removeRecipeByID(event, [
    'immersiveengineering:crusher/nether_gold',
    'immersiveengineering:crafting/nugget_steel_to_ingot_steel',
    'immersiveengineering:crafting/ingot_steel_to_storage_steel',
    'immersiveengineering:crafting/nugget_copper_to_copper_ingot',
    'immersiveengineering:crafting/copper_ingot_to_nugget_copper',
    'thermal:smelting/netherite_ingot_from_dust_smelting',
    'thermal:smelting/netherite_ingot_from_dust_blasting',
    'industrialforegoing:iron_gear',
    'industrialforegoing:gold_gear',
    'industrialforegoing:diamond_gear',
    'bigreactors:crafting/uranium_block',
    'bigreactors:crafting/uranium_ingot',
    'bigreactors:smelting/uranium_ingot',
    `mekanism:processing/steel/ingot_to_dust`,
    'allthemodium:mek_processing/allthemodium/ingot/from_dust_smelting',
    'allthemodium:mek_processing/vibranium/ingot/from_dust_smelting',
    'allthemodium:mek_processing/unobtainium/ingot/from_dust_smelting',
    'mekanism:compat/byg/combining/brimstone_gold_ore_from_raw',
    'mekanism:compat/byg/combining/blue_gold_ore_from_raw',
    'ftbic:shaped/bronze_dust',
    'ftbic:shaped/enderium_dust',
    'ftbic:shaped/enderium_dust_2',
    'ftbic:shaped/enderium_ingot',
    //'ftbic:separating/silicon_from_quartz',
    'ftbic:separating/silicon_from_sand',
    'twilightforest:uncrafting_table'
  ]);

  removeRecipeByOutput(event, [
    'immersiveengineering:stick_iron',
    'immersiveengineering:stick_steel',
    'immersiveengineering:stick_aluminum',
  ]);

})
