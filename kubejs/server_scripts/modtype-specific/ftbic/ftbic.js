onEvent('recipes', (event) => {	

    modifyShaped(event, 'ftbic:machine_block', 1, ['ABA', 'BCB', 'ABA'], {
        A: 'ftbic:advanced_alloy',
        B: 'ftbic:industrial_grade_metal',
        C: 'ftbic:fuse'
    })

    modifyShaped(event, 'ftbic:iron_furnace', 1, ['AAA', 'ACA', 'ABA'], {
        A: '#forge:ingots/iron',
        B: 'minecraft:furnace',
        C: 'ftbic:machine_block'
    })

    modifyShaped(event, 'ftbic:powered_furnace', 1, ['ABA', 'BCB', 'DED'], {
        A: '#forge:ingots/iron',
        B: 'ftbic:industrial_grade_metal',
        C: 'ftbic:iron_furnace',
        D: 'ftbic:lv_cable',
        E: 'ftbic:electronic_circuit'
    })

    modifyShaped(event, 'ftbic:macerator', 1, ['AAA', 'BCB', 'DED'], {
        A: '#forge:flint',
        B: 'ftbic:reinforced_stone',
        C: 'ftbic:machine_block',
        D: 'ftbic:industrial_grade_metal',
        E: 'ftbic:electronic_circuit'
    })

    modifyShaped(event, 'ftbic:compressor', 1, ['AFA', 'BCB', 'DED'], {
        A: '#forge:ingots/iron',
        B: 'ftbic:reinforced_stone',
        C: 'ftbic:machine_block',
        D: 'ftbic:industrial_grade_metal',
        E: 'ftbic:electronic_circuit',
        F: 'minecraft:piston'
    })

    modifyShaped(event, 'ftbic:reprocessor', 1, ['AAA', 'ABA', 'DED'], {
        A: 'ftbic:industrial_grade_metal',
        B: 'minecraft:composter',
        D: 'ftbic:electronic_circuit',
        E: 'ftbic:compressor'
    })

    modifyShaped(event, 'ftbic:extruder', 1, ['ABA', 'BCB', 'DED'], {
        A: '#forge:ingots/iron',
        B: '#forge:rods/iron',
        C: 'ftbic:machine_block',
        D: 'ftbic:industrial_grade_metal',
        E: 'ftbic:electronic_circuit'
    })

    modifyShaped(event, 'ftbic:quarry', 1, ['ABA', 'DCD', 'AEA'], {
        A: 'ftbic:advanced_alloy',
        B: 'thermal:flux_drill',
        C: 'ftbic:advanced_machine_block',
        D: 'ftbic:advanced_circuit',
        E: 'immersiveengineering:drillhead_steel'
    })

    modifyShaped(event, 'ftbic:mv_transformer', 1, ['ABA', 'ACA', 'ABA'], {
        A: 'ftbic:industrial_grade_metal',
        B: 'ftbic:mv_cable',
        C: 'ftbic:machine_block'
    })

    modifyShaped(event, 'ftbic:hv_transformer', 1, ['ABA', 'DCE', 'ABA'], {
        A: 'ftbic:industrial_grade_metal',
        B: 'ftbic:hv_cable',
        C: 'ftbic:mv_transformer',
        D: 'ftbic:electronic_circuit',
        E: 'ftbic:energy_crystal'
    })

    modifyShaped(event, 'ftbic:ev_transformer', 1, ['ABA', 'DCE', 'ABA'], {
        A: 'ftbic:industrial_grade_metal',
        B: 'ftbic:ev_cable',
        C: 'ftbic:hv_transformer',
        D: 'ftbic:advanced_circuit',
        E: 'ftbic:advanced_alloy'
    })

    modifyShaped(event, 'ftbic:ejector_upgrade', 1, ['ABA', 'BCB', 'ADA'], {
        A: '#forge:ingots/tin',
        B: 'ftbic:advanced_alloy',
        C: 'minecraft:piston',
        D: 'ftbic:electronic_circuit'
    })

    event.shaped('2x ftbic:fluid_cell', [' A ', 'ABA', ' A '], {
        A: '#forge:ingots/tin',
        B: '#forge:glass'
    }).id(`kubejs:ftbic/fluid_cell_empty`)

    event.recipes.ftbic.rolling('alltheores:iridium_plate', '#forge:ingots/iridium')
    event.recipes.ftbic.rolling('alltheores:diamond_plate', 'minecraft:diamond')
    event.recipes.ftbic.rolling('thermal:rose_gold_plate', '#forge:ingots/rose_gold')
    event.recipes.ftbic.rolling('thermal:netherite_plate', '#forge:ingots/netherite')
    event.recipes.ftbic.rolling('alltheores:iridium_gear', '4x #forge:plates/iridium')
    event.recipes.ftbic.rolling('alltheores:diamond_gear', '4x #forge:plates/diamond')
    event.recipes.ftbic.rolling('alltheores:lumium_gear', '4x #forge:plates/lumium')
    event.recipes.ftbic.rolling('thermal:rose_gold_gear', '4x #forge:plates/rose_gold')
    event.recipes.ftbic.rolling('thermal:netherite_gear', '4x #forge:plates/netherite')
    event.recipes.ftbic.rolling('thermal:lapis_gear', '4x #forge:gems/lapis')
    event.recipes.ftbic.rolling('thermal:emerald_gear', '4x #forge:gems/emerald')
    event.recipes.ftbic.rolling('thermal:quartz_gear', '4x #forge:gems/quartz')

    event.recipes.ftbic.extruding('alltheores:nickel_gear', '4x #forge:plates/nickel')
    event.recipes.ftbic.extruding('alltheores:osmium_gear', '4x #forge:plates/osmium')
    event.recipes.ftbic.extruding('alltheores:platinum_gear', '4x #forge:plates/platinum')
    event.recipes.ftbic.extruding('alltheores:silver_gear', '4x #forge:plates/silver')
    event.recipes.ftbic.extruding('alltheores:zinc_gear', '4x #forge:plates/zinc')
    event.recipes.ftbic.extruding('alltheores:steel_gear', '4x #forge:plates/steel')
    event.recipes.ftbic.extruding('alltheores:electrum_gear', '4x #forge:plates/electrum')
    event.recipes.ftbic.extruding('alltheores:diamond_gear', '4x #forge:plates/diamond')
    event.recipes.ftbic.extruding('alltheores:lumium_gear', '4x #forge:plates/lumium')
    event.recipes.ftbic.extruding('alltheores:signalum_gear', '4x #forge:plates/signalum')
    event.recipes.ftbic.extruding('alltheores:constantan_gear', '4x #forge:plates/constantan')
    event.recipes.ftbic.extruding('allthemodium:allthemodium_gear', '4x #forge:plates/allthemodium')
    event.recipes.ftbic.extruding('allthemodium:vibranium_gear', '4x #forge:plates/vibranium')
    event.recipes.ftbic.extruding('allthemodium:unobtainium_gear', '4x #forge:plates/unobtainium')
    event.recipes.ftbic.extruding('thermal:rose_gold_gear', '4x #forge:plates/rose_gold')
    event.recipes.ftbic.extruding('thermal:netherite_gear', '4x #forge:plates/netherite')
    event.recipes.ftbic.extruding('thermal:lapis_gear', '4x #forge:gems/lapis')
    event.recipes.ftbic.extruding('thermal:emerald_gear', '4x #forge:gems/emerald')
    event.recipes.ftbic.extruding('thermal:quartz_gear', '4x #forge:gems/quartz')
    event.recipes.ftbic.extruding('alltheores:invar_gear', '4x #forge:plates/invar')
    event.recipes.ftbic.extruding('alltheores:brass_gear', '4x #forge:plates/brass')
    event.recipes.ftbic.extruding('alltheores:diamond_rod', '#forge:gems/diamond')
    event.recipes.ftbic.extruding('alltheores:iridium_rod', '#forge:ingots/iridium')
    event.recipes.ftbic.extruding('minecraft:blaze_rod', '2x #forge:dusts/blaze')

    removeRecipeByID(event, [
        'ftbic:compressing/diamond',
        'ftbic:shaped/fluid_cell'
    ])

})
