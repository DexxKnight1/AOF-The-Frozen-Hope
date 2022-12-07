onEvent('recipes', (event) => {

    modifyShaped(event, 'allthemodium:teleport_pad', 1, [' A ', 'ABA', ' A '], {
        A: '#forge:ingots/allthemodium',
        B: '#forge:storage_blocks/ender_pearl'
    })

})
