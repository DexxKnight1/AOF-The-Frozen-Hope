onEvent('jei.hide.items', (event) => {

  console.log('JEI Hide item event fired')

  //Constants
  let refined = ['controller', 'creative_controller', 'grid', 'crafting_grid', 'pattern_grid', 'fluid_grid', 'network_receiver', 'network_transmitter', 'relay', 'detector', 'security_manager', 'wireless_transmitter', 'disk_manipulator', 'crafter', 'crafter_manager', 'crafting_monitor']
  let typeFirst = ['mekanism', 'immersiveengineering']

  //Functions
  function hideMetal(mod, name, types) {
    types.forEach(type => {
      let id = typeFirst.includes(mod) ? `${mod}:${type}_${name}` : `${mod}:${name}_${type}`
      if (!Ingredient.of(id).stacks.empty) event.hide(id)
    })
  }

  function hideStuff(mod, type, names) {
    names.forEach(name => {
      let id = typeFirst.includes(mod) ? `${mod}:${type}_${name}` : `${mod}:${name}_${type}`
      if (!Ingredient.of(id).stacks.empty) event.hide(id)
    })
  }

  colors.forEach(color => {
    refined.forEach(machine => event.hide([`refinedstorage:${color}_${machine}`]))
  })

  const hide = [
    /extrastorage:disk_.+/,
    /extrastorage:block_.+/,
    /extrastorage:storagepart_.+/,
    'immersiveengineering:stick_iron',
    'immersiveengineering:stick_steel',    
    'immersiveengineering:stick_aluminum',
    'industrialforegoing:iron_gear',
    'industrialforegoing:gold_gear',
    'industrialforegoing:diamond_gear',
    'thermal:raw_tin',
    'thermal:raw_lead',
    'thermal:raw_silver',
    'thermal:raw_nickel',
    'extendedcrafting:handheld_table',
    'twilightforest:uncrafting_table',
    'refinedstorage:silicon',
    'ae2:silicon',
    'kubejs:explorershat',
	  'kubejs:trading_permission',
    'mysticalagradditions:awakened_draconium_crux',
    'mysticalagriculture:mithril_seeds',
    'mysticalagriculture:mithril_essence',
    'mysticalagriculture:titanium_seeds',
    'mysticalagriculture:titanium_essence',
    'mysticalagriculture:chrome_seeds',
    'mysticalagriculture:chrome_essence',
    'mysticalagriculture:yellorium_seeds',
    'mysticalagriculture:yellorium_essence',
    'mysticalagriculture:tungsten_seeds',
    'mysticalagriculture:tungsten_essence',
    'allthecompressed:atm_star_block_1x',
    'allthecompressed:atm_star_block_2x',
    'allthecompressed:atm_star_block_3x',
    'allthecompressed:atm_star_block_4x',
    'allthecompressed:atm_star_block_5x',
    'allthecompressed:atm_star_block_6x',
    'allthecompressed:atm_star_block_7x',
    'allthecompressed:atm_star_block_8x',
    'allthecompressed:atm_star_block_9x',
    'allthecompressed:wax_block_1x',
    'allthecompressed:wax_block_2x',
    'allthecompressed:wax_block_3x',
    'allthecompressed:wax_block_4x',
    'allthecompressed:wax_block_5x',
    'allthecompressed:wax_block_6x',
    'allthecompressed:wax_block_7x',
    'allthecompressed:wax_block_8x',
    'allthecompressed:wax_block_9x',
    Item.of('ae2:facade', '{item:"allthecompressed:atm_star_block_1x"}'),
    Item.of('ae2:facade', '{item:"allthecompressed:atm_star_block_2x"}'),
    Item.of('ae2:facade', '{item:"allthecompressed:atm_star_block_3x"}'),
    Item.of('ae2:facade', '{item:"allthecompressed:atm_star_block_4x"}'),
    Item.of('ae2:facade', '{item:"allthecompressed:atm_star_block_5x"}'),
    Item.of('ae2:facade', '{item:"allthecompressed:atm_star_block_6x"}'),
    Item.of('ae2:facade', '{item:"allthecompressed:atm_star_block_7x"}'),
    Item.of('ae2:facade', '{item:"allthecompressed:atm_star_block_8x"}'),
    Item.of('ae2:facade', '{item:"allthecompressed:atm_star_block_9x"}'),
    Item.of('ae2:facade', '{item:"allthecompressed:nether_star_block_1x"}'),
    Item.of('ae2:facade', '{item:"allthecompressed:nether_star_block_2x"}'),
    Item.of('ae2:facade', '{item:"allthecompressed:nether_star_block_3x"}'),
    Item.of('ae2:facade', '{item:"allthecompressed:nether_star_block_4x"}'),
    Item.of('ae2:facade', '{item:"allthecompressed:nether_star_block_5x"}'),
    Item.of('ae2:facade', '{item:"allthecompressed:nether_star_block_6x"}'),
    Item.of('ae2:facade', '{item:"allthecompressed:nether_star_block_7x"}'),
    Item.of('ae2:facade', '{item:"allthecompressed:nether_star_block_8x"}'),
    Item.of('ae2:facade', '{item:"allthecompressed:nether_star_block_9x"}'),
    Item.of('ae2:facade', '{item:"stalwart_dungeons:tungsten_ore"}'),
    Item.of('ae2:facade', '{item:"stalwart_dungeons:chorundum_ore"}'),
    Item.of('ae2:facade', '{item:"stalwart_dungeons:awful_ghast_altar"}'),
    Item.of('ae2:facade', '{item:"stalwart_dungeons:nether_keeper_altar"}')
  ]

  hide.forEach((id) => {
    event.hide(id)
  })

  //const darkTank = Item.of('evilcraft:dark_tank').ignoreNBT()
	//const aefacade = Item.of('ae2:facade').ignoreNBT()
	//const ftbcell = Item.of('ftbic:fluid_cell').ignoreNBT()
	//const hidenbtitems = [darkTank, aefacade, ftbcell]

	//hidenbtitems.forEach((id) => {
		//event.hide(id)
	//})

  ftbicMetals.forEach(metal => {
    hideMetal('ftbic', metal, ['ore', 'ingot', 'dust', 'nugget', 'block', 'gear', 'plate', 'rod'])
    event.hide(`ftbic:deepslate_${metal}_ore`);
    event.hide(`ftbic:${metal}_chunk`);
  });

  ftbicAlloys.forEach(metal => hideMetal('ftbic', metal, ['ingot', 'dust', 'nugget', 'block', 'gear', 'plate', 'rod']));
  vanillaMetals.forEach(metal => hideMetal('ftbic', metal, ['dust', 'gear', 'plate', 'rod']));
  hideMetal('ftbic', 'copper', ['nugget']);

  //hideMetal
  hideMetal('immersiveengineering', 'copper', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'silver', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'aluminum', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'uranium', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'lead', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'nickel', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'steel', ['ingot', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'electrum', ['ingot', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('immersiveengineering', 'constantan', ['ingot', 'dust', 'nugget', 'storage', 'slab_storage'])
  hideMetal('mekanism', 'copper', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'tin', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'uranium', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'lead', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'osmium', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('mekanism', 'bronze', ['ingot', 'dust', 'nugget', 'block'])
  hideMetal('thermal', 'copper', ['dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'tin', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'lead', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'silver', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'nickel', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'signalum', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'enderium', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'electrum', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'constantan', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'bronze', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'lumium', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])
  hideMetal('thermal', 'invar', ['ingot', 'ore', 'dust', 'nugget', 'block', 'plate', 'gear'])

  //hideStuff
  hideStuff('thermal', 'dust', ['iron', 'gold'])
  hideStuff('thermal', 'gear', ['iron', 'gold'])
  hideStuff('thermal', 'plate', ['iron', 'gold'])
  hideStuff('immersiveengineering', 'dust', ['iron', 'gold', 'sulfur', 'wood'])
  hideStuff('immersiveengineering', 'plate', ['iron', 'gold', 'copper', 'lead', 'silver', 'nickel', 'constantan', 'electrum', 'steel', 'uranium', 'aluminum'])
  hideStuff('mekanism', 'dust', ['lapis_lazuli', 'emerald', 'diamond', 'quartz', 'iron', 'gold'])
  hideStuff('alltheores', 'crystal', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideStuff('alltheores', 'shard', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideStuff('alltheores', 'dirty_dust', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideStuff('alltheores', 'clump', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
  hideStuff('appliedenergistics2', 'dust', ['nether_quartz', 'ender', 'iron', 'gold'])
  hideStuff('quark', 'crate', ['apple', 'carrot', 'beetroot', 'potato'])
  hideStuff('quark', 'block', ['bamboo', 'charcoal', 'sugar_cane'])

  const disabledItems = [
  ]

  disabledItems.forEach((disabledItem) => {
    if (!Item.of(disabledItem).isEmpty()) {
        event.hide(disabledItem);
    }
  })

})
