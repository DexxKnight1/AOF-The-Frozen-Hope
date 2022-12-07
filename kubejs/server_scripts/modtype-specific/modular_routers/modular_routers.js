onEvent('recipes', (event) => {

    event.remove({id: 'modularrouters:modular_router'})
    
    event.shaped('2x modularrouters:modular_router', ['ABA', 'BCB', 'ABA'], {
        A: '#forge:ingots/iron',
        B: 'immersiveengineering:sheetmetal_aluminum',
        C: 'rftoolscontrol:ram_chip'
    }).id(`kubejs:modularrouters/modular_router`)

})
