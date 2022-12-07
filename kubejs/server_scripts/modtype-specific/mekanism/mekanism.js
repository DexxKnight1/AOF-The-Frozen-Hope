onEvent('recipes', event => {

  removeRecipeByID(event, [
    'mekanism:digital_miner',
    'mekanism:atomic_disassembler',
    'mekanism:robit',
    'mekanism:steel_casing',
    'mekanism:personal_chest',
    'mekanism:personal_barrel'
  ])

  event.shaped('mekanism:steel_casing', ['ABA', 'CDC', 'ABA'], {
    A: 'ftbic:advanced_alloy',
    B: '#forge:ingots/cobalt',
    C: 'immersiveengineering:component_steel',
    D: '#immersiveengineering:scaffoldings/steel'
  }).id(`kubejs:mekanism/steel_casing`)
	
  event.shaped('mekanism:digital_miner', ['AUA', 'LRL', 'TST'], {
    L: 'mekanism:logistical_sorter',
    R: 'mekanism:robit',
    T: 'mekanism:teleportation_core',
    A: '#mekanism:alloys/atomic',
    S: 'mekanism:steel_casing',
    U: '#forge:ingots/manyullyn'
  }).id(`kubejs:mekanism/digital_miner`)
  
  event.shaped('mekanism:atomic_disassembler', ['RER', 'RUR', ' V '], {
    E: 'mekanism:energy_tablet',
    R: '#mekanism:alloys/reinforced',
    U: '#forge:circuits/ultimate',
    V: 'ftbic:iridium_alloy'
  }).id(`kubejs:mekanism/atomic_disassembler`)
  
  event.shaped('mekanism:robit', [' S ', 'ERE', 'OPO'], {
    R: 'mekanism:alloy_atomic',
    S: '#forge:ingots/cobalt',
    E: 'mekanism:energy_tablet',
    O: 'mekanism:ingot_refined_obsidian',
    P: '#mekanism:personal_storage'
  }).id(`kubejs:mekanism/robit`)

  event.shaped('mekanism:personal_chest', ['ABA', 'CDC', 'EEE'], {
    A: '#forge:ingots/steel',
    B: 'thermal:obsidian_glass',
    C: '#forge:chests/wooden',
    D: 'mekanism:elite_control_circuit',
    E: '#forge:ingots/enderium'
  }).id(`kubejs:mekanism/personal_chest`)

  event.shaped('mekanism:personal_barrel', ['ABA', 'CDC', 'EEE'], {
    A: '#forge:ingots/steel',
    B: 'thermal:obsidian_glass',
    C: '#forge:barrels/wooden',
    D: 'mekanism:elite_control_circuit',
    E: '#forge:ingots/enderium'
  }).id(`kubejs:mekanism/personal_barrel`)

  modifyShaped(event, 'mekanism:energy_tablet', 1, ['ABA', 'CDC', 'ABA'], {
    A: '#forge:dusts/redstone',
    B: '#forge:ingots/gold',
    C: 'mekanism:alloy_infused',
    D: 'ftbic:fuse'
  })

  modifyShaped(event, 'mekanism:configurator', 1, [' A ', 'CDC', ' B '], {
    A: 'ftbic:fuse',
    B: '#forge:rods/steel',
    C: 'mekanism:alloy_infused',
    D: 'mekanism:energy_tablet'
  })

  modifyShaped(event, 'mekanism:configuration_card', 1, ['ACA', 'CBC', 'ACA'], {
    A: 'ftbic:fuse',
    B: 'mekanism:basic_control_circuit',
    C: 'mekanism:alloy_infused'
  })

  modifyShaped(event, 'mekanism:geiger_counter', 1, ['ACA', 'CBC', 'ACA'], {
    A: 'ftbic:fuse',
    B: 'mekanism:basic_control_circuit',
    C: '#forge:ingots/lead'
  })

  modifyShaped(event, 'mekanism:dosimeter', 1, ['ACA', 'CBC', 'ACA'], {
    A: 'ftbic:fuse',
    B: '#forge:ingots/redstone',
    C: '#forge:ingots/lead'
  })

  modifyShaped(event, 'mekanism:cardboard_box', 1, ['AAA', 'A A', 'AAA'], {
    A: '#forge:dusts/wood'
  })

})
