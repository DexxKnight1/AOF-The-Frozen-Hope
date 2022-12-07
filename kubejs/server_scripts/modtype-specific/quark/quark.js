onEvent('recipes', (event) => {

  removeRecipeByID(event, [
    
  ])

  modifyShaped(event, 'quark:deepslate_furnace', 1, ['ABA', 'B B', 'ABA'], {
    A: 'allthecompressed:cobbled_deepslate_block_1x',
    B: 'minecraft:cobbled_deepslate'
  })

  modifyShaped(event, 'quark:blackstone_furnace', 1, ['ABA', 'B B', 'ABA'], {
    A: 'allthecompressed:blackstone_block_1x',
    B: 'minecraft:blackstone'
  })

})
