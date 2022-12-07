onEvent('recipes', (event) => {

  removeRecipeByID(event, [
    'mna:vinteum_coated_iron',
    'mna:purified_vinteum_coated_iron'
  ])
  
  event.shaped('mna:vinteum_coated_iron', ['AAA', 'ABA', 'AAA'], {
    A: '#forge:ingots/iron',
    B: '#mna:dusts/vinteum'
  }).id(`kubejs:mna/vinteum_coated_iron`)

  event.shaped('mna:purified_vinteum_coated_iron', ['AAA', 'ABA', 'AAA'], {
      A: '#forge:ingots/iron',
      B: '#mna:dusts/purified_vinteum'
  }).id(`kubejs:mna/purified_vinteum_coated_iron`)
  
})
