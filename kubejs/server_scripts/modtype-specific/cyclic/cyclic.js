onEvent('recipes', (event) => {

    event.remove({id: 'cyclic:crafter'})

    event.shaped('cyclic:crafter', ['ABA', 'CDC', 'ABA'], {
        A: 'allthecompressed:lapis_block_1x',
        B: 'cyclic:crafting_bag',
        C: 'extrautilitiesrebirth:mechanical_user',
        D: 'cyclic:gem_amber'
    }).id(`kubejs:cyclic/crafter`)

    modifyShaped(event, 'cyclic:apple_sprout_diamond', 2, ['ACA', 'CBC', 'ACA'], {
        A: '#forge:storage_blocks/diamond',
        B: 'cyclic:apple_chocolate',
        C: '#forge:gems/diamond'
    })

    modifyShaped(event, 'cyclic:apple_sprout_emerald', 2, ['ACA', 'CBC', 'ACA'], {
        A: '#forge:storage_blocks/emerald',
        B: 'cyclic:apple_chocolate',
        C: '#forge:gems/emerald'
    })

})
