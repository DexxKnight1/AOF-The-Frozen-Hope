onEvent('recipes', (event) => {	

    event.shaped('enigmaticlegacy:cursed_ring', ['AEB', 'EDE', 'CEC'], {
        A: 'enigmaticlegacy:unholy_grail',
        B: 'enigmaticlegacy:forbidden_fruit',
        C: 'enigmaticlegacy:etherium_ingot',
        D: 'enigmaticlegacy:ender_ring',
        E: 'minecraft:netherite_ingot'
    }).id(`kubejs:enigmaticlegacy/cursed_ring`)

    event.shaped('enigmaticlegacy:architect_eye', ['ABA', 'BCB', 'ABA'], {
        A: 'extrautilitiesrebirth:unstable_ingot',
        B: '#forge:ingots/netherite',
        C: 'enigmaticlegacy:oblivion_stone'
    }).id(`kubejs:enigmaticlegacy/architect_eye`)

})
