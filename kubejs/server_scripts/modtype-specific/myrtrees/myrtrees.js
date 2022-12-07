onEvent('recipes', (event) => {

    modifyShaped(event, 'myrtrees:tree_tap', 1, ['A A', ' B '], {
        A: '#forge:nuggets/iron',
        B: '#forge:ingots/iron'
    })

    modifyShaped(event, 'myrtrees:wooden_bucket', 1, ['   ', 'A A', 'ABA'], {
        A: '#minecraft:logs',
        B: '#minecraft:wooden_slabs'
    })

})
