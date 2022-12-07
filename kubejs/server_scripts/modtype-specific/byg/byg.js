onEvent('recipes', (event) => {

  removeRecipeByID(event, [
    'byg:ametrine_horse_armor',
    'byg:pendorite_horse_armor',
    'byg:black_smooth_sandstone',
    'byg:white_smooth_sandstone',
    'byg:blue_smooth_sandstone',
    'byg:purple_smooth_sandstone',
    'byg:pink_smooth_sandstone'
  ])

  event.smelting('byg:black_smooth_sandstone', 'byg:black_sandstone')
  event.smelting('byg:white_smooth_sandstone', 'byg:white_sandstone')
  event.smelting('byg:blue_smooth_sandstone', 'byg:blue_sandstone')
  event.smelting('byg:purple_smooth_sandstone', 'byg:purple_sandstone')
  event.smelting('byg:pink_smooth_sandstone', 'byg:pink_sandstone')

  event.shaped('byg:black_ice', ['AAA', 'ABA', 'AAA'], {
    A: 'minecraft:ice',
    B: '#forge:dyes/black'
  }).id(`kubejs:byg_black_ice`)

  event.shaped('byg:ametrine_horse_armor', ['  A', 'ABA', 'ACA'], {
    A: 'byg:ametrine_gems',
    B: 'minecraft:saddle',
    C: 'druidcraftrg:rope'
  }).id(`kubejs:byg/ametrine_horse_armor`)

  event.shaped('byg:pendorite_horse_armor', ['  A', 'ABA', 'ACA'], {
    A: 'byg:pendorite_ingot',
    B: 'minecraft:saddle',
    C: 'druidcraftrg:rope'
  }).id(`kubejs:byg/pendorite_horse_armor`)

  modifyShaped(event, 'byg:chain_plating', 2, ['ABA', 'B B', 'ABA'], {
    A: '#forge:nuggets/iron',
    B: '#forge:ingots/iron'
  })

})
