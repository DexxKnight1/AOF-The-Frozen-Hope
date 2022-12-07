onEvent('recipes', (event) => {

    removeRecipeByID(event, [
        'glassential:glass_redstone',
        'glassential:glass_light',
        'glassential:glass_dark_ethereal',
        'glassential:glass_dark_ethereal_reverse',
        'glassential:glass_ethereal',
        'glassential:glass_ethereal_reverse',
        'glassential:glass_ghostly'
    ])
 
    event.shaped('4x glassential:glass_redstone', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: 'allthecompressed:redstone_block_1x'
    }).id(`kubejs:glassential/glass_redstone`)
  
    event.shaped('4x glassential:glass_light', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: 'allthecompressed:glowstone_block_1x'
    }).id(`kubejs:glassential/glass_light`)

    event.shaped('4x glassential:glass_dark_ethereal', ['AAA', 'ABA', 'AAA'], {
        A: 'extrautilitiesrebirth:dark_glass',
        B: 'cyclic:ender_eye_reuse'
    }).id(`kubejs:glassential/glass_dark_ethereal`)

    event.shaped('4x glassential:glass_dark_ethereal_reverse', ['AAA', 'ABA', 'AAA'], {
        A: 'glassential:glass_ethereal_reverse',
        B: 'allthecompressed:coal_block_1x'
    }).id(`kubejs:glassential/glass_dark_ethereal_reverse`)

    event.shaped('4x glassential:glass_ethereal', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: 'cyclic:ender_eye_reuse'
    }).id(`kubejs:glassential/glass_ethereal`)

    event.shaped('4x glassential:glass_ethereal_reverse', ['AAA', 'ABA', 'AAA'], {
        A: 'glassential:glass_ethereal',
        B: 'allthecompressed:coal_block_1x'
    }).id(`kubejs:glassential/glass_ethereal_reverse`)

    event.shaped('4x glassential:glass_ghostly', ['AAA', 'ABA', 'AAA'], {
        A: '#forge:glass',
        B: 'allthecompressed:ender_pearl_block_1x'
    }).id(`kubejs:glassential/glass_ghostly`)
     
})
