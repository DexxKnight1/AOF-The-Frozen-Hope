onEvent('recipes', (event) => {

  event.replaceInput({item: 'thermal:cured_rubber'}, 'ftbic:rubber')
  event.replaceOutput({item: 'thermal:cured_rubber'}, 'ftbic:rubber')

  event.shapeless('thermal:ender_pearl_dust', 'ae2:ender_dust').id(`kubejs:ae2/ender_dust`)
  event.shapeless('thermal:ender_pearl_dust', 'ftbic:ender_dust').id(`kubejs:ftbic/ender_dust`)

  event.shaped('thermal:machine_frame', ['ADA', 'BCB', 'ADA'], {
    A: '#forge:ingots/brass',
    B: 'glassential:glass_redstone',
    C: 'rftoolscontrol:ram_chip',
    D: 'immersiveengineering:light_engineering'
  }).id(`kubejs:thermal/machine_frame`)

  event.shaped('thermal:redstone_servo', [' A ', 'BCB', ' A '], {
    A: 'extendedcrafting:redstone_ingot',
    B: '#forge:dusts/cinnabar',
    C: '#forge:dusts/arcane_crystal'
  }).id(`kubejs:thermal/redstone_servo`)

  event.shaped('thermal:rf_coil', ['C A', ' B ', 'A C'], {
    A: 'extendedcrafting:redstone_ingot',
    B: 'immersiveengineering:component_electronic',
    C: '#forge:ingots/electrum'
  }).id(`kubejs:thermal/rf_coil`)

  modifyShaped(event, 'thermal:energy_cell_frame', 1, ['ABA', 'BCB', 'ABA'], {
    A: 'extendedcrafting:redstone_ingot',
    B: '#forge:glass',
    C: 'immersiveengineering:dynamo'
  })

  modifyShaped(event, 'thermal:fluid_cell_frame', 1, ['ABA', 'BCB', 'ABA'], {
    A: '#forge:ingots/copper',
    B: '#forge:glass',
    C: 'immersiveengineering:fluid_sorter'
  })

  modifyShaped(event, 'thermal:drill_head', 1, [' C ', 'CAC', 'BBB'], {
    A: '#forge:gems/diamond',
    B: '#forge:ingots/iron',
    C: '#forge:ingots/steel'
  })

  modifyShaped(event, 'thermal:saw_blade', 1, ['CB ', 'BAB', ' BC'], {
    A: '#forge:gems/diamond',
    B: '#forge:ingots/iron',
    C: '#forge:ingots/steel'
  })

  removeRecipeByID(event, [
    'thermal:machine_frame',
    'thermal:redstone_servo',
    'thermal:rf_coil',
    'thermal:parts/rose_gold_gear',
    'thermal:parts/netherite_gear',
    'thermal:parts/lapis_gear',
    'thermal:parts/emerald_gear',
    'thermal:parts/quartz_gear',
    'thermal:parts/diamond_gear',
    'thermal:earth_charge/diamond_dust_from_diamond',
    'thermal:earth_charge/apatite_dust_from_apatite',
    'thermal:earth_charge/cinnabar_dust_from_cinnabar',
    'thermal:earth_charge/niter_dust_from_niter',
    'thermal:earth_charge/sulfur_dust_from_sulfur',
    'thermal:earth_charge/ender_pearl_dust_from_ender_pearl',
    'thermal:earth_charge/lapis_dust_from_lapis',
    'thermal:earth_charge/emerald_dust_from_emerald',
    'thermal:earth_charge/quartz_dust_from_quartz',
    'thermal:slag/white_concrete_powder_with_slag',
    'thermal:slag/orange_concrete_powder_with_slag',
    'thermal:slag/magenta_concrete_powder_with_slag',
    'thermal:slag/light_blue_concrete_powder_with_slag',
    'thermal:slag/yellow_concrete_powder_with_slag',
    'thermal:slag/lime_concrete_powder_with_slag',
    'thermal:slag/pink_concrete_powder_with_slag',
    'thermal:slag/gray_concrete_powder_with_slag',
    'thermal:slag/light_gray_concrete_powder_with_slag',
    'thermal:slag/cyan_concrete_powder_with_slag',
    'thermal:slag/purple_concrete_powder_with_slag',
    'thermal:slag/blue_concrete_powder_with_slag',
    'thermal:slag/brown_concrete_powder_with_slag',
    'thermal:slag/green_concrete_powder_with_slag',
    'thermal:slag/red_concrete_powder_with_slag',
    'thermal:slag/black_concrete_powder_with_slag',
  ])

})
