onEvent('recipes', (event) => {

  maDisabledSeeds.forEach(name => {
    ['seeds', 'essence'].forEach(type => {
      event.remove({ output: `mysticalagriculture:${name}_${type}` , id: '/mysticalagriculture/'})
      event.remove({ input: `mysticalagriculture:${name}_${type}` , id: '/mysticalagriculture/'})
    })
  })
	
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

  maInfusion(event, 'kubejs:magical_soil', 'botania:overgrowth_seed', 'mysticalagradditions:insanium_farmland', 'mysticalagradditions:insanium_block', 'mysticalagradditions:insanium_farmland', 'mysticalagradditions:insanium_block', 'mysticalagradditions:insanium_farmland', 'mysticalagradditions:insanium_block', 'mysticalagradditions:insanium_farmland', 'mysticalagradditions:insanium_block')

  function essenceCircle(result, essenceType) {
    event.shaped(result, ['AAA', 'A A', 'AAA'], { A: `mysticalagriculture:${essenceType}_essence` }).id(`kubejs:mysticalagriculture/${essenceType}_essence_crafting`)
  }

  essenceCircle('allthemodium:allthemodium_nugget', 'allthemodium')
  essenceCircle('allthemodium:vibranium_nugget', 'vibranium')
  essenceCircle('allthemodium:unobtainium_nugget', 'unobtainium')
  essenceCircle('4x industrialforegoing:plastic', 'plastic')
  essenceCircle('2x botania:elementium_ingot', 'elementium')
  essenceCircle('mythicbotany:alfsteel_ingot', 'alfsteel')
  essenceCircle('4x botania:livingwood', 'livingwood')
  essenceCircle('4x botania:livingrock', 'livingrock')
  essenceCircle('2x botania:manasteel_ingot', 'manasteel')
  essenceCircle('botania:terrasteel_ingot', 'terrasteel')
  essenceCircle('botania:life_essence', 'gaia')
  essenceCircle('extendedcrafting:the_ultimate_nugget', 'ultimate_ingot')
  essenceCircle('2x forbidden_arcanus:arcane_gold_ingot', 'arcane_gold')
  essenceCircle('2x stalwart_dungeons:tungsten_ingot', 'tungsten_ingot')

  function essenceLine(result, essenceType) {
    event.shaped(result, ['   ', 'AAA', '   '], { A: `mysticalagriculture:${essenceType}_essence` }).id(`kubejs:mysticalagriculture/${essenceType}_essence_crafting`)
  }

  essenceLine('2x industrialforegoing:pink_slime', 'pink_slime')
  essenceLine('2x minecraft:phantom_membrane', 'phantom')
  essenceLine('3x thermal:niter', 'niter')
  essenceLine('3x ftbic:rubber', 'rubber')
  essenceLine('3x ftbic:silicon', 'silicon')

  function essenceCirclePlus(result, essenceType) {
    event.shaped(result, ['AAA', 'ABA', 'AAA'], { A: `mysticalagriculture:${essenceType}_essence`, B: 'minecraft:nether_star' }).id(`kubejs:mysticalagriculture/${essenceType}_essence_crafting`)
  }

  essenceCirclePlus('powah:crystal_nitro', 'nitro_crystal')

  event.remove({id: 'mysticalagriculture:essence/botania/manasteel_ingot'})
  event.remove({id: 'mysticalagriculture:essence/botania/terrasteel_ingot'})
  event.remove({id: 'mysticalagriculture:essence/botania/elementium_ingot'})
  event.remove({id: 'mysticalagriculture:essence/common/tungsten_ingot'})
  event.remove({id: 'mysticalagradditions:essence/nitro_crystal'})
  event.remove({id: 'mysticalagriculture:essence/common/rubber'})
  event.remove({id: 'mysticalagriculture:essence/common/silicon'})
  event.remove({id: 'mysticalagriculture:seed/infusion/silicon'})
  event.remove({id: 'mysticalagriculture:seed/infusion/nitro_crystal'})

  event.recipes.mysticalagriculture.infusion({
    input: { item: 'mysticalagriculture:prosperity_seed_base' },
    ingredients: [
          { item: 'ftbic:silicon' },
				  { item: 'mysticalagriculture:prudentium_essence' },
				  { item: 'ftbic:silicon' },
				  { item: 'mysticalagriculture:prudentium_essence' },
				  { item: 'ftbic:silicon' },
				  { item: 'mysticalagriculture:prudentium_essence' },
				  { item: 'ftbic:silicon' },
				  { item: 'mysticalagriculture:prudentium_essence' }
    ],
    result: { item: 'mysticalagriculture:silicon_seeds' }
  })

  event.recipes.mysticalagriculture.infusion({
    input: { item: 'mysticalagriculture:prosperity_seed_base' },
    ingredients: [
          { item: 'powah:nitro_crystal_block' },
				  { item: 'mysticalagradditions:insanium_block' },
				  { item: 'powah:nitro_crystal_block' },
				  { item: 'mysticalagradditions:insanium_block' },
				  { item: 'powah:nitro_crystal_block' },
				  { item: 'mysticalagradditions:insanium_block' },
				  { item: 'powah:nitro_crystal_block' },
				  { item: 'mysticalagradditions:insanium_block' }
    ],
    result: { item: 'mysticalagriculture:nitro_crystal_seeds' }
  })

  let fish = [
    'aquaculture:arapaima',
    'aquaculture:atlantic_cod',
    'aquaculture:atlantic_halibut',
    'aquaculture:atlantic_herring',
    'aquaculture:bayad',
    'aquaculture:blackfish',
    'aquaculture:bluegill',
    'aquaculture:boulti',
    'aquaculture:brown_shrooma',
    'aquaculture:brown_trout',
    'aquaculture:capitaine',
    'aquaculture:carp',
    'aquaculture:catfish',
    'aquaculture:gar',
    'aquaculture:minnow',
    'aquaculture:muskellunge',
    'aquaculture:pacific_halibut',
    'aquaculture:perch',
    'aquaculture:pink_salmon',
    'aquaculture:piranha',
    'aquaculture:pollock',
    'aquaculture:rainbow_trout',
    'aquaculture:red_grouper',
    'aquaculture:red_shrooma',
    'aquaculture:smallmouth_bass',
    'aquaculture:synodontis',
    'aquaculture:tambaqui',
    'aquaculture:tuna',
  ]

  fish.forEach(name => {
    event.custom({
      type: 'mysticalagriculture:soul_extraction',
      input: {
        item: name
      },
      output: {
        type: 'mysticalagriculture:fish',
        souls: 0.5
      }
    })
  })

})
