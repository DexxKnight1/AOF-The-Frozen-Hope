onEvent('recipes', (event) => {

  removeRecipeByID(event, [
    'tiab:time_in_a_bottle'
  ])

  event.shaped('tiab:time_in_a_bottle', ['AFA', 'BCB', 'DED'], {
    A: '#forge:ingots/rose_gold',
    B: 'tombstone:impregnated_diamond',
    C: 'supplementaries:clock_block',
    D: 'thermal:lapis_gear',
	  E: 'naturesaura:bottle_two_the_rebottling',
    F: 'cyclic:charm_speed'
  }).id(`kubejs:tiab/time_in_a_bottle`)

})
