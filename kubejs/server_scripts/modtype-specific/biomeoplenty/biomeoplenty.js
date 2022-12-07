onEvent('recipes', (event) => {
	
	event.shaped('biomesoplenty:flesh', ['AAA', 'AAA', 'AAA'], {
        A: 'minecraft:rotten_flesh'
    }).id(`kubejs:biomesoplenty/flesh`)

    event.shapeless('9x minecraft:rotten_flesh', 'biomesoplenty:flesh').id(`kubejs:minecraft/rotten_flesh`)
	
})
