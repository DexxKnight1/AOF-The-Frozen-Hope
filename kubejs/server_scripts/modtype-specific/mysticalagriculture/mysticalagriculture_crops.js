onEvent('recipes', (event) => {

  function cloche(output, amount, seed, soil, render, time) {
    event.custom({
        type: "immersiveengineering:cloche",
        results: [
          {
            item: output,
            count: amount
          }
        ],
        input: Ingredient.of(seed),
        soil: Ingredient.of(soil),
        time: time,
        render: {
          type: "crop",
          block: render
        }
      }).id(`kubejs:cloche/${seed.replace(':', '/')}`)
  }
  
  function insolator(output, input, id) {
    event.custom({
      "type": "thermal:insolator",
      "ingredient": input,
      "result": output
    }).id(id)
  }

  //FUNCTIONS
  function tier(types, time, soil, rCount) {
    types.forEach(type => {
      cloche(`mysticalagriculture:${type}_essence`, rCount, `mysticalagriculture:${type}_seeds`, soil, `mysticalagriculture:${type}_crop`, time);
      insolator([Item.of(`mysticalagriculture:${type}_essence`),Item.of( `mysticalagriculture:${type}_seeds`)], Item.of(`mysticalagriculture:${type}_seeds`),`kubejs:thermal/insolator_${type}_seeds`)
    })
  }

  function regular(output, amount, seed, crop) {
    cloche(output, amount, seed, 'minecraft:dirt', crop, 600);
  }

  //Tier 1 Crops
	tier([
      'inferium',
      'air',
      'earth',
      'fire',
      'water',
      'dirt',
      'wood',
      'ice',
      'stone',
      'deepslate'
  ], 1000, '#misctags:farmland/tier1', 2)
  //Tier 2 Crops
  tier([
      'aluminum',
      'amethyst',
      'chicken',
      'coal',
      'coral',
      'cow',
      'dye',
      'fish',
      'honey',
      'mystical_flower',
      'nature',
      'nether',
      'niter',
      'pig',
      'plastic',
      'rubber',
      'saltpeter',
      'sheep',
      'slime',
      'squid',
      'turtle',
      'apatite',
      'livingwood',
      'livingrock',
      'silicon',
      'sulfur'
  ], 1750, '#misctags:farmland/tier2', 2)
  //Tier 3 Crops
  tier([
      'amethyst_bronze',
      'basalz',
      'blitz',
      'blizz',
      'bronze',
      'brass',
      'certus_quartz',
      'creeper',
      'copper',
      'glowstone',
      'graphite',
      'iron',
      'ironwood',
      'lead',
      'manasteel',
      'nether_quartz',
      'obsidian',
      'phantom',
      'pig_iron',
      'prismarine',
      'quartz_enriched_iron',
      'rabbit',
      'redstone',
      'silver',
      'skeleton',
      'sky_stone',
      'slimesteel',
      'spider',
      'steeleaf',
      'tin',
      'zinc',
      'zombie'
  ], 2500, '#misctags:farmland/tier3', 2)
  //Tier 4 Crops
  tier([
      'blaze',
      'blazing_crystal',
      'cobalt',
      'constantan',
      'electrum',
      'elementium',
      'end',
      'enderman',
      'energized_steel',
      'experience',
      'fiery_ingot',
      'fluorite',
      'fluix',
      'ghast',
      'gold',
      'hop_graphite',
      'invar',
      'knightmetal',
      'lapis_lazuli',
      'lumium',
      'nickel',
      'osmium',
      'pink_slime',
      'refined_glowstone',
      'refined_obsidian',
      'rose_gold',
      'ruby',
      'sapphire',
      'signalum',
      'steel',
      'tungsten_ingot',
      'uranium'
  ], 3250, '#misctags:farmland/tier4', 2)
  //Tier 5 Crops
  tier([
      'arcane_gold',
      'cyanite',
      'diamond',
      'enderium',
      'emerald',
      'hepatizon',
      'iridium',
      'manyullyn',
      'netherite',
      'niotic_crystal',
      'wither_skeleton',
      'platinum',
      'queens_slime',
      'spirited_crystal',
      'terrasteel',
      'uraninite'
  ], 4000, '#misctags:farmland/tier5', 2)
  //Tier 6 Crops
  tier([
      'dragon_egg',
      'nether_star',
      'nitro_crystal'
  ], 4750, '#misctags:farmland/tier6', 2)
  //Magical Tier
  tier([
      'allthemodium',
      'vibranium',
      'unobtainium',
      'alfsteel',
      'gaia',
      'ultimate_ingot'
  ], 5500, 'kubejs:magical_soil', 2)

  removeRecipeByID(event, [
    'mysticalagriculture:mithril',
    'mysticalagriculture:tungsten',
    'mysticalagriculture:titanium',
    'mysticalagriculture:chrome'
  ])

})
