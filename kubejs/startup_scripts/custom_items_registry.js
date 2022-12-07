//Priority: 1
onEvent('item.registry', event => {
	//Register new items here
  event.create('explorershat').displayName('Explorers Hat')
  event.create('trading_permission').displayName('Trading Permission')
	event.create('cobalt_dust').displayName('Cobalt Dust')

})

onEvent('block.registry', event => {
	//Register new blocks here
	event.create('magical_soil').displayName('§dMagical Soil').material('grass').hardness(0.6)

})
