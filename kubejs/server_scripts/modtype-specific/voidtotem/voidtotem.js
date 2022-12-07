onEvent('recipes', (event) => {	

    event.remove({id: 'voidtotem:totem_of_void_undying'})

    event.shaped('voidtotem:totem_of_void_undying', ['ABA', 'CDC', 'EBE'], {
        A: 'bloodmagic:voidsigil',
        B: 'cyclic:charm_void',
        C: 'botanicalmachinery:mana_emerald',
        D: 'minecraft:totem_of_undying',
        E: 'tombstone:ankh_of_pray'
    }).id(`kubejs:voidtotem/totem_of_void_undying`)

})
