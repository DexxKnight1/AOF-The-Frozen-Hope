onEvent('recipes', (event) => {

    //EXPORTER'S
    event.remove({id: 'cabletiers:elite_exporter'})
    event.remove({id: 'cabletiers:ultra_exporter'})
    event.remove({id: 'cabletiers:creative_exporter'})
    
    event.shaped('cabletiers:elite_exporter', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:storage_blocks/enderium',
        B: 'refinedstorage:exporter',
        C: 'rftoolscontrol:cpu_core_1000'
    }).id(`kubejs:cabletiers/elite_exporter`)

    event.shaped('cabletiers:ultra_exporter', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:storage_blocks/netherite',
        B: 'cabletiers:elite_exporter',
        C: 'rftoolscontrol:cpu_core_2000'
    }).id(`kubejs:cabletiers/ultra_exporter`)

    event.shaped('cabletiers:creative_exporter', ['ABD', 'BCB', 'DBA'], {
        A: '#forge:storage_blocks/dark_nether_star',
        B: 'cabletiers:ultra_exporter',
        C: 'rftoolscontrol:processor',
        D: '#forge:storage_blocks/nether_star'
    }).id(`kubejs:cabletiers/creative_exporter`)

    //IMPORTER'S
    event.remove({id: 'cabletiers:elite_importer'})
    event.remove({id: 'cabletiers:ultra_importer'})
    event.remove({id: 'cabletiers:creative_importer'})
    
    event.shaped('cabletiers:elite_importer', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:storage_blocks/enderium',
        B: 'refinedstorage:importer',
        C: 'rftoolscontrol:cpu_core_1000'
    }).id(`kubejs:cabletiers/elite_importer`)

    event.shaped('cabletiers:ultra_importer', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:storage_blocks/netherite',
        B: 'cabletiers:elite_importer',
        C: 'rftoolscontrol:cpu_core_2000'
    }).id(`kubejs:cabletiers/ultra_importer`)

    event.shaped('cabletiers:creative_importer', ['ABD', 'BCB', 'DBA'], {
        A: '#forge:storage_blocks/dark_nether_star',
        B: 'cabletiers:ultra_importer',
        C: 'rftoolscontrol:processor',
        D: '#forge:storage_blocks/nether_star'
    }).id(`kubejs:cabletiers/creative_importer`)

    //CONSTRUCTORS'S
    event.remove({id: 'cabletiers:elite_constructor'})
    event.remove({id: 'cabletiers:ultra_constructor'})
    event.remove({id: 'cabletiers:creative_constructor'})
    
    event.shaped('cabletiers:elite_constructor', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:storage_blocks/enderium',
        B: 'refinedstorage:constructor',
        C: 'rftoolscontrol:cpu_core_1000'
    }).id(`kubejs:cabletiers/elite_constructor`)

    event.shaped('cabletiers:ultra_constructor', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:storage_blocks/netherite',
        B: 'cabletiers:elite_constructor',
        C: 'rftoolscontrol:cpu_core_2000'
    }).id(`kubejs:cabletiers/ultra_constructor`)

    event.shaped('cabletiers:creative_constructor', ['ABD', 'BCB', 'DBA'], {
        A: '#forge:storage_blocks/dark_nether_star',
        B: 'cabletiers:ultra_constructor',
        C: 'rftoolscontrol:processor',
        D: '#forge:storage_blocks/nether_star'
    }).id(`kubejs:cabletiers/creative_constructor`)

    //DESTRUCTORS'S
    event.remove({id: 'cabletiers:elite_destructor'})
    event.remove({id: 'cabletiers:ultra_destructor'})
    event.remove({id: 'cabletiers:creative_destructor'})
    
    event.shaped('cabletiers:elite_destructor', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:storage_blocks/enderium',
        B: 'refinedstorage:destructor',
        C: 'rftoolscontrol:cpu_core_1000'
    }).id(`kubejs:cabletiers/elite_destructor`)

    event.shaped('cabletiers:ultra_destructor', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:storage_blocks/netherite',
        B: 'cabletiers:elite_destructor',
        C: 'rftoolscontrol:cpu_core_2000'
    }).id(`kubejs:cabletiers/ultra_destructor`)

    event.shaped('cabletiers:creative_destructor', ['ABD', 'BCB', 'DBA'], {
        A: '#forge:storage_blocks/dark_nether_star',
        B: 'cabletiers:ultra_destructor',
        C: 'rftoolscontrol:processor',
        D: '#forge:storage_blocks/nether_star'
    }).id(`kubejs:cabletiers/creative_destructor`)

    //REQUESTER'S
    event.remove({id: 'cabletiers:elite_requester'})
    event.remove({id: 'cabletiers:ultra_requester'})
    event.remove({id: 'cabletiers:creative_requester'})
    
    event.shaped('cabletiers:elite_requester', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:storage_blocks/enderium',
        B: 'rsrequestify:requester',
        C: 'rftoolscontrol:cpu_core_1000'
    }).id(`kubejs:cabletiers/elite_requester`)

    event.shaped('cabletiers:ultra_requester', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:storage_blocks/netherite',
        B: 'cabletiers:elite_requester',
        C: 'rftoolscontrol:cpu_core_2000'
    }).id(`kubejs:cabletiers/ultra_requester`)

    event.shaped('cabletiers:creative_requester', ['ABD', 'BCB', 'DBA'], {
        A: '#forge:storage_blocks/dark_nether_star',
        B: 'cabletiers:ultra_requester',
        C: 'rftoolscontrol:processor',
        D: '#forge:storage_blocks/nether_star'
    }).id(`kubejs:cabletiers/creative_requester`)

    //DISK MANIPULATOR'S
    event.remove({id: 'cabletiers:elite_disk_manipulator'})
    event.remove({id: 'cabletiers:ultra_disk_manipulator'})
    event.remove({id: 'cabletiers:creative_disk_manipulator'})
    
    event.shaped('cabletiers:elite_disk_manipulator', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:storage_blocks/enderium',
        B: 'refinedstorage:disk_manipulator',
        C: 'rftoolscontrol:cpu_core_1000'
    }).id(`kubejs:cabletiers/elite_disk_manipulator`)

    event.shaped('cabletiers:ultra_disk_manipulator', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:storage_blocks/netherite',
        B: 'cabletiers:elite_disk_manipulator',
        C: 'rftoolscontrol:cpu_core_2000'
    }).id(`kubejs:cabletiers/ultra_disk_manipulator`)

    event.shaped('cabletiers:creative_disk_manipulator', ['ABD', 'BCB', 'DBA'], {
        A: '#forge:storage_blocks/dark_nether_star',
        B: 'cabletiers:ultra_disk_manipulator',
        C: 'rftoolscontrol:processor',
        D: '#forge:storage_blocks/nether_star'
    }).id(`kubejs:cabletiers/creative_disk_manipulator`)

})
