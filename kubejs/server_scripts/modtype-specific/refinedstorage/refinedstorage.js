onEvent('recipes', (event) => {

  removeRecipeByID(event, [
    'refinedstorage:raw_basic_processor',
    'refinedstorage:raw_improved_processor',
    'refinedstorage:raw_advanced_processor',
    'extradisks:raw_withering_processor',
    'extrastorage:raw_neural_processor',
    'extradisks:disk/shaped/infinite_storage_disk',
    //'extradisks:advanced_storage_housing',
    'refinedstorage:silicon',
    'refinedstorage:machine_casing',
    'extradisks:advanced_machine_casing',
    'creativecrafter:creative_crafter',
    'creativewirelesstransmitter:creative_wireless_transmitter'
  ])
  
  event.shapeless('refinedstorage:raw_basic_processor', [
    'refinedstorage:processor_binding',
    'mysticalagriculture:prosperity_ingot',
    'ftbic:silicon',
    'minecraft:redstone'
  ]).id(`kubejs:refinedstorage/raw_basic_processor`)

  event.shapeless('refinedstorage:raw_improved_processor', [
    'refinedstorage:processor_binding',
    'tconstruct:rose_gold_ingot',
    'ftbic:silicon',
    'minecraft:redstone'
  ]).id(`kubejs:refinedstorage/raw_improved_processor`)

  event.shapeless('refinedstorage:raw_advanced_processor', [
    'refinedstorage:processor_binding',
    'rftoolsbase:infused_diamond',
    'ftbic:silicon',
    'minecraft:redstone'
  ]).id(`kubejs:refinedstorage/raw_advanced_processor`)

  event.shapeless('extradisks:raw_withering_processor', [
    'refinedstorage:processor_binding',
    'extendedcrafting:ender_star',
    'ftbic:silicon',
    'minecraft:redstone'
  ]).id(`kubejs:extradisks/raw_withering_processor`)

  event.shaped('extrastorage:raw_neural_processor', ['ABC', 'BDB', 'EFE'], {
    A: 'extradisks:raw_withering_processor',
    B: '#ae2:all_quartz',
    C: 'rebornstorage:raw_super_advanced_processor',
    D: 'ftbic:silicon',
    E: '#forge:ingots/obsidian',
    F: 'refinedstorage:processor_binding'
  }).id(`kubejs:extrastorage/raw_neural_processor`)
  
  event.shaped('refinedstorage:machine_casing', ['ABA', 'CDC', 'ABA'], {
    A: 'refinedstorage:quartz_enriched_iron',
    B: 'ftbic:silicon',
    C: 'industrialforegoing:plastic',
    D: 'thermal:enderium_glass'
  }).id(`kubejs:refinedstorage/machine_casing`)

  event.shaped('extradisks:infinite_storage_disk', ['DED', 'EHE', 'FGF'], {
    D: 'thermal:enderium_glass',
    E: 'refinedstorage:quartz_enriched_iron',
    F: 'extradisks:withering_processor',
		H: 'extradisks:infinite_storage_part',
		G: 'extrastorage:neural_processor'
  }).id(`kubejs:extradisks/infinite_storage_disk`)
	
	event.shaped('extradisks:advanced_storage_housing', ['DED', 'E E', 'FGF'], {
    D: 'thermal:enderium_glass',
    E: 'refinedstorage:quartz_enriched_iron',
    F: 'extradisks:withering_processor',
		G: 'extrastorage:neural_processor'
  }).id(`kubejs:extradisks/advanced_storage_housing`)

  event.shaped('extradisks:advanced_machine_casing', ['ABA', 'CDC', 'AEA'], {
    A: 'extradisks:withering_processor',
    B: 'refinedstorage:construction_core',
    C: 'extrastorage:neural_processor',
		D: 'refinedstorage:machine_casing',
    E: 'refinedstorage:destruction_core'
  }).id(`kubejs:extradisks/advanced_storage_housing`)
  
  event.replaceInput({item: 'refinedstorage:silicon'}, 'ftbic:silicon')
  
})
