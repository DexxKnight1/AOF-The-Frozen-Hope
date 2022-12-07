onEvent('recipes', (event) => {

  removeRecipeByID(event, [
    'immersiveengineering:crafting/stick_aluminum',
    'immersiveengineering:crafting/stick_steel',
  ])
  
  event.remove({output: 'immersiveengineering:cloche'})
  event.remove({output: 'immersiveengineering:rs_engineering'})
  event.remove({output: 'immersiveengineering:light_engineering'})
  event.remove({output: 'immersiveengineering:heavy_engineering'})

  event.shaped('immersiveengineering:cloche', ['GEG', 'GFG', 'TRT'], {
    G: 'glassential:glass_redstone',
    E: 'immersiveengineering:toolupgrade_revolver_electro',
    T: '#forge:treated_wood',
    R: 'immersiveengineering:rs_engineering',
	  F: 'thermal:machine_frame'
  }).id(`kubejs:immersiveengieering/cloche`)

  event.shaped('2x immersiveengineering:rs_engineering', ['ABA', 'DCD', 'ABA'], {
    A: '#forge:sheetmetals/iron',
    B: 'immersiveengineering:wirecoil_redstone',
    C: '#forge:storage_blocks/copper',
    D: 'rftoolsutility:redstone_information'
  }).id(`kubejs:immersiveengieering/rs_engineering`)

  event.shaped('immersiveengineering:light_engineering', ['ABA', 'DCD', 'ABA'], {
    A: '#forge:sheetmetals/electrum',
    B: '#forge:ingots/cobalt',
    C: '#forge:storage_blocks/brass',
    D: 'immersiveengineering:component_iron'
  }).id(`kubejs:immersiveengieering/light_engineering`)

  event.shaped('immersiveengineering:heavy_engineering', ['ABA', 'DCD', 'ABA'], {
    A: '#forge:sheetmetals/steel',
    B: '#forge:ingots/cobalt',
    C: '#forge:storage_blocks/signalum',
    D: 'immersiveengineering:component_steel'
  }).id(`kubejs:immersiveengieering/heavy_engineering`)

})
