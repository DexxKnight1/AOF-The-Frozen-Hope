onEvent('recipes', event => {

  modifyShaped(event,'industrialforegoing:machine_frame_pity', 1, ['ABA', 'BCB', 'ABA'], {
    A: '#forge:treated_wood',
    B: '#forge:ingots/cobalt',
    C: 'allthecompressed:redstone_block_1x'
  })

  modifyShaped(event,'industrialforegoing:fluid_extractor', 1, ['ADA', 'BCB', 'ADA'], {
    A: '#forge:ingots/iron',
    B: '#forge:cobblestone',
    C: '#industrialforegoing:machine_frame/pity',
    D: 'minecraft:piston'
  })

  modifyShaped(event,'industrialforegoing:plant_fertilizer', 1, ['ADA', 'BCF', 'EGE'], {
    A: '#forge:plastic',
    B: 'industrialforegoing:fertilizer',
    C: '#industrialforegoing:machine_frame/simple',
    D: 'immersiveengineering:fertilizer',
    E: '#forge:gears/iron',
    F: 'botania:fertilizer',
    G: 'mysticalagriculture:mystical_fertilizer'
  })

  modifyShaped(event,'industrialforegoing:sewer', 1, ['ADA', 'BCB', 'BDB'], {
    A: '#forge:plastic',
    B: '#forge:ingots/aluminum',
    C: '#industrialforegoing:machine_frame/pity',
    D: 'quark:grate'
  })

  modifyShaped(event,'industrialforegoing:mob_duplicator', 1, ['ADA', 'BCB', 'EFE'], {
    A: '#forge:plastic',
    B: '#forge:gears/allthemodium',
    C: '#industrialforegoing:machine_frame/advanced',
    D: 'minecraft:nether_star',
    E: '#forge:storage_blocks/emerald',
    F: '#forge:storage_blocks/redstone'
  })

  modifyShaped(event,'industrialforegoing:marine_fisher', 1, ['ADA', 'BCB', 'EFE'], {
    A: '#forge:plastic',
    B: 'cyclic:fisher',
    C: '#industrialforegoing:machine_frame/simple',
    D: 'aquaculture:diamond_fishing_rod',
    E: '#forge:gears/iron',
    F: 'apotheosis:fishing_tome'
  })

  modifyShaped(event,'industrialforegoing:laser_drill', 1, ['ADA', 'BCB', 'EFE'], {
    A: '#forge:plastic',
    B: 'thermal:flux_drill',
    C: '#industrialforegoing:machine_frame/advanced',
    D: 'immersiveengineering:drillhead_steel',
    E: '#forge:gears/diamond',
    F: '#forge:storage_blocks/redstone'
  })

})
