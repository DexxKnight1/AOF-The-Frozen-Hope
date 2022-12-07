onEvent('recipes', (event) => {
	
  event.remove({id: 'rftoolsbuilder:builder'})
  event.remove({id: 'rftoolsutility:clock_module'})
  event.remove({id: 'rftoolsbase:machine_frame'})
  event.remove({id: 'rftoolscontrol:processor'})
  event.remove({id: 'rftoolscontrol:programmer'})
  
  event.shaped('rftoolsbuilder:builder', ['AEA', 'RMR', 'ARA'], {
    A: '#forge:ingots/manyullyn',
    E: '#forge:ender_pearls',
    R: '#forge:ingots/redstone',
    M: 'rftoolsbase:machine_frame'
  }).id(`kubejs:rftools/builder`)
 
  event.shaped('rftoolsutility:clock_module', [' A ', 'BCB', ' D '], {
	  A: 'minecraft:clock',
    B: '#forge:ingots/redstone',
	  C: '#forge:storage_blocks/iron',
	  D: '#forge:dyes/black'
  }).id(`kubejs:rftoolsutility/clockmodule`)

  event.shaped('rftoolsbase:machine_frame', ['ABA', 'C C', 'ABA'], {
    A: '#forge:ingots/iron',
    B: 'extrautilitiesrebirth:moon_stone',
    C: 'industrialforegoing:plastic'
  }).id(`kubejs:rftoolsutility/clock_module`)

  event.shaped('rftoolscontrol:processor', ['ABA', 'CDC', 'ABA'], {
	  A: '#forge:storage_blocks/redstone',
    B: '#forge:ingots/rose_gold',
	  C: 'rftoolscontrol:cpu_core_2000',
	  D: 'rftoolsbase:machine_frame'
  }).id(`kubejs:rftoolscontrol/processor`)

  event.shaped('rftoolscontrol:programmer', ['ABA', 'CDC', 'ABA'], {
	  A: '#forge:storage_blocks/redstone',
    B: '#forge:ingots/rose_gold',
	  C: 'rftoolscontrol:ram_chip',
	  D: 'rftoolsbase:machine_frame'
  }).id(`kubejs:rftoolscontrol/programmer`)

})
