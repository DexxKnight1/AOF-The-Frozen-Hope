onEvent('recipes', (event) => {

  event.shaped('reliquary:fertile_lily_pad', ['ABA', 'DCD', 'AEA'], {
    A: 'reliquary:fertile_essence',
    B: 'bloodmagic:reagentgrowth',
    C: 'minecraft:lily_pad',
    D: 'mysticalagriculture:mystical_fertilizer',
    E: 'mysticalagriculture:inferium_growth_accelerator'
  }).id(`kubejs:xreliquary/fertile_lily_pad`)

  removeRecipeByID(event, [
    'reliquary:fertile_lily_pad'
  ])
})
