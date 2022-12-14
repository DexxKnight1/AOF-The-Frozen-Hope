onEvent('recipes', (event) => {

    //Mekanism multiplies this gas amount by 200
    event.recipes.mekanismPurifying(Ingredient.of('powah:uraninite').withCount(3), 'powah:uraninite_ore_poor', {gas:'mekanism:oxygen', amount:1},)
    event.recipes.mekanismPurifying(Ingredient.of('powah:uraninite').withCount(5), 'powah:uraninite_ore', {gas:'mekanism:oxygen', amount:2},)
    event.recipes.mekanismPurifying(Ingredient.of('powah:uraninite').withCount(10), 'powah:uraninite_ore_dense', {gas:'mekanism:oxygen', amount:3},)
    event.recipes.mekanismPurifying(Ingredient.of('powah:uraninite').withCount(3), 'powah:deepslate_uraninite_ore_poor', {gas:'mekanism:oxygen', amount:1},)
    event.recipes.mekanismPurifying(Ingredient.of('powah:uraninite').withCount(5), 'powah:deepslate_uraninite_ore', {gas:'mekanism:oxygen', amount:2},)
    event.recipes.mekanismPurifying(Ingredient.of('powah:uraninite').withCount(10), 'powah:deepslate_uraninite_ore_dense', {gas:'mekanism:oxygen', amount:3},)

})
