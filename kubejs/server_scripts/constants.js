//priority: 1000
let colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']
let maDisabledSeeds = ['chrome','titanium', 'tungsten', 'mithril']
let vanillaMetals = ['iron', 'gold', 'copper']
let atoMetals = ['aluminum', 'osmium', 'platinum', 'zinc', 'uranium', 'tin', 'lead', 'silver', 'nickel']
let atoAlloys = ['steel', 'invar', 'electrum', 'bronze', 'enderium', 'lumium', 'signalum', 'constantan', 'brass']
let atmMetals = ['allthemodium', 'vibranium', 'unobtainium']
let immersiveMetals = ['aluminum', 'lead', 'nickel', 'silver', 'uranium']
let immersiveAlloys = ['steel', 'electrum', 'constantan']
let mekanismMetals = ['osmium', 'lead', 'tin', 'uranium']
let mekanismAlloys = ['steel', 'refined_obsidian', 'refined_glowstone', 'bronze']
let ftbicMetals = ['tin', 'lead', 'uranium', 'iridium', 'aluminum']
let ftbicAlloys = ['enderium', 'bronze']
let thermalMetals = ['tin', 'lead', 'silver', 'nickel']
let thermalAlloys = ['bronze', 'electrum', 'invar', 'constantan', 'signalum', 'lumium', 'enderium']

let modifyShaped = (event, result, count, pattern, ingredients) => {
  event.remove({ output: result, type: 'minecraft:crafting_shaped' })
  event.shaped(Item.of(result, count), pattern, ingredients).id(`kubejs:shaped/${result.replace(':', '/')}`)
}
let modifyShapeless = (event, result, count, ingredients) => {
  event.remove({ output: result, type: 'minecraft:crafting_shapeless' })
  event.shapeless(Item.of(result, count), ingredients).id(`kubejs:shapeless/${result.replace(':', '/')}`)
}
let modifySmelt = (event, result, ingredients) => {
  event.remove({ output: result, type: 'minecraft:smelting' })
  event.smelting(result, ingredients).id(`kubejs:smelting/${result.replace(':', '/')}`)
}
let removeRecipeByID = (event, recipes) => {
  recipes.forEach(recipe => {
    event.remove({ id: recipe })
  })
}
let removeRecipeByOutput = (event, recipes) => {
  recipes.forEach(recipe => {
    if (Array.isArray(recipe)) {
      event.remove({ type: recipe[1], output: recipe[0] })
    } else {
      event.remove({ output: recipe })
    }
  })
}
let woodcutting = (event, entries) => {
  entries.forEach(([input, output, count]) => {
    event.custom({
      type: "corail_woodcutter:woodcutting",
      ingredient: { item: input },
      result: output,
      count: count
    }).id(`kubejs:woodcutting/${output.replace(':', '/')}`)
  })
}

let maInfusion = (event, output, middle, item1, item2, item3, item4, item5, item6, item7, item8) => {
  event.recipes.mysticalagriculture.infusion({
    input: { item: middle },
    ingredients: [
      { item: item1 },
      { item: item2 },
      { item: item3 },
      { item: item4 },
      { item: item5 },
      { item: item6 },
      { item: item7 },
      { item: item8 }
    ],
    result: { item: output }
  }).id(`kubejs:mainfusion/${output.replace(':', '/')}`)
}

let energize = (event, ingredient, result, power, count) => {
  event.recipes.powah.energizing({
    ingredients: ingredient.map(i => Ingredient.of(i).toJson()),
    energy: power,
    result: Item.of(result, count ? count : 1).toResultJson()
  }).id(`kubejs:energizing/${result.replace(':', '/')}`)
  
}
