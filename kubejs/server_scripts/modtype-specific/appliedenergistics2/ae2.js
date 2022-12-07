onEvent('recipes', (event) => {

  event.shaped('ae2:controller', ['ABA', 'CDC', 'ABA'], {
    A: 'ae2:smooth_sky_stone_block',
    B: 'ae2:fluix_crystal',
    C: 'industrialforegoing:plastic',
    D: 'ae2:engineering_processor'
  }).id(`kubejs:ae2/controller`)
  
  event.shaped('4x ae2:sky_stone_block', ['BSB', 'SBS', 'BSB'], {
    S: 'minecraft:stone',
    B: 'minecraft:blackstone'
  }).id(`kubejs:ae2/sky_stone_block`)

  event.shaped('ae2:calculation_processor_press', ['CFC', 'FVF', 'PFP'], {
    C: 'ae2:certus_quartz_crystal',
    F: '#forge:ingots/fluix_steel',
    V: '#forge:storage_blocks/iron',
    P: 'ae2:fluix_pearl'
  }).id(`kubejs:ae2/calculation_press`)

  event.shaped('ae2:logic_processor_press', ['BFB', 'FVF', 'CFC'], {
    B: 'naturesaura:tainted_gold',
    F: '#forge:ingots/fluix_steel',
    V: '#forge:storage_blocks/iron',
    C: '#forge:ingots/rose_gold'
  }).id(`kubejs:ae2/logic_press`)

  event.shaped('ae2:engineering_processor_press', ['DFD', 'FVF', 'DFD'], {
    D: '#forge:gems/mana_diamond',
    F: '#forge:ingots/fluix_steel',
    V: '#forge:storage_blocks/iron'
  }).id(`kubejs:ae2/engineering_press`)

  event.shaped('ae2:silicon_press', ['WFW', 'FVF', 'WFW'], {
    W: 'ftbic:silicon',
    F: '#forge:ingots/fluix_steel',
    V: '#forge:storage_blocks/iron'
  }).id(`kubejs:ae2/silicon_press`)
  
  event.remove({id: 'ae2:network/blocks/controller'})
  event.remove({id: 'ae2:network/parts/cable_anchor'})
  
  event.shapeless('ae2:ender_dust', 'thermal:ender_pearl_dust').id(`kubejs:thermal/ender_pearl_dust`)
  
  event.remove({output: 'ae2:printed_silicon'})
  event.remove({output: 'ae2:silicon'})

  event.recipes.ae2.inscriber({
    mode: 'inscribe',
    result: { item: 'ae2:printed_silicon' },
    ingredients: {
      top: { item: 'ae2:silicon_press' },
      middle: { item: 'ftbic:silicon' }
    }
  }).id(`kubejs:ae2/inscriber/printed_silicon`)
  
  event.replaceInput({item: 'ae2:silicon'}, 'ftbic:silicon')

  modifyShaped(event, 'ae2:quartz_glass', 4, ['GDG', 'DGD', 'GDG'], {
    G: '#ae2:all_quartz_dust',
    D: '#forge:glass'
  })

  modifyShaped(event, 'ae2:quartz_fiber', 3, ['DDD', 'GGG', 'DDD'], {
    G: '#ae2:all_quartz_dust',
    D: '#forge:glass'
  })

  modifyShaped(event, 'ae2:chest', 1, ['GTG', 'C C', 'IFI'], {
    G: '#forge:glass',
    T: 'ae2:terminal',
    C: 'ae2:fluix_glass_cable',
    I: '#forge:ingots/iron',
    F: '#ae2:all_fluix'
  })

  modifyShaped(event, 'ae2:condenser', 1, ['IGI', 'GDG', 'IGI'], {
    G: '#forge:glass',
    I: '#forge:ingots/iron',
    D: '#ae2:dusts/fluix',
  })

  modifyShaped(event, 'ae2:spatial_io_port', 1, ['GGG', 'CPC', 'IEI'], {
    G: '#forge:glass',
    C: 'ae2:fluix_glass_cable',
    P: 'ae2:io_port',
    I: '#forge:ingots/iron',
    E: 'ae2:engineering_processor'
  })

  modifyShaped(event, 'ae2:io_port', 1, ['GGG', 'DCD', 'IPI'], {
    G: '#forge:glass',
    C: 'ae2:fluix_glass_cable',
    P: 'ae2:logic_processor',
    I: '#forge:ingots/iron',
    D: 'ae2:drive'
  })

  modifyShaped(event, 'ae2:interface', 1, ['IGI', 'A F', 'IGI'], {
    G: '#forge:glass',
    A: 'ae2:annihilation_core',
    F: 'ae2:formation_core',
    I: '#forge:ingots/iron'
  })

  modifyShaped(event, 'ae2:molecular_assembler', 1, ['IGI', 'ACF', 'IGI'], {
    G: 'ae2:quartz_glass',
    A: 'ae2:annihilation_core',
    F: 'ae2:formation_core',
    I: '#forge:ingots/iron',
    C: '#forge:workbench'
  })
  
  modifyShaped(event, 'ae2:cell_workbench', 1, ['WEW', 'ICI', 'III'], {
    W: '#minecraft:wool',
    E: 'ae2:calculation_processor',
    I: '#forge:ingots/iron',
    C: '#forge:chests/wooden'
  })

  modifyShapeless(event, 'ae2:cable_anchor', 3, ['#forge:ingots/iron', '#ae2:knife'])
  modifyShapeless(event, 'ae2:fluix_covered_cable', 1, ['#minecraft:wool', 'ae2:fluix_glass_cable'])
  modifyShapeless(event, 'ae2:crafting_card', 1, ['#forge:workbench', 'ae2:basic_card'])
  modifyShapeless(event, 'ae2:fuzzy_card', 1, ['#minecraft:wool', 'ae2:advanced_card'])
  modifyShapeless(event, 'ae2:crafting_terminal', 1, ['ae2:terminal', '#forge:workbench', 'ae2:calculation_processor'])

})
