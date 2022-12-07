//priority: 1000
onEvent('tags.blocks', (event) => {

  event.add('ae2:blacklisted/spatial','#forge:relocation_not_supported')
  event.add('allthemodium:blocks/blocklist',['alltheores:iridium_slate_ore'])
  event.add('minecraft:climbable', ['minecraft:chain', /additionallanterns:.*_chain/])
  event.add('forge:relocation_not_supported', ['minecraft:beehive', 'minecraft:bee_nest', /botania:.+/])
  event.add('minecraft:logs', ['evilcraft:undead_log_stripped', 'evilcraft:undead_wood_stripped', /allthemodium:stripped_\w+_log/])

})

onEvent('tags.items', (event) => {

  //Minecraft Furnaces
  event.add('misctags:furnace', ['minecraft:furnace', 'quark:deepslate_furnace', 'quark:blackstone_furnace'])

  //Smooth Stones
  event.add('misctags:smooth_stone', [
    'minecraft:smooth_stone',
    'minecraft:smooth_red_sandstone',
    'minecraft:smooth_sandstone',
    'minecraft:smooth_quartz',
    'minecraft:smooth_basalt',
    'biomesoplenty:smooth_white_sandstone',
    'biomesoplenty:smooth_orange_sandstone',
    'biomesoplenty:smooth_black_sandstone',
    'byg:black_smooth_sandstone',
    'byg:white_smooth_sandstone',
    'byg:blue_smooth_sandstone',
    'byg:purple_smooth_sandstone',
    'byg:pink_smooth_sandstone',
  ])

  //Pam's Crops
  //Leafy Vegetables
  event.add('pamhc2:leafyvegetables', [
    'pamhc2crops:cabbageitem',
    'pamhc2crops:kaleitem',
    'pamhc2crops:lettuceitem',
    'pamhc2crops:nettlesitem',
    'pamhc2crops:nopalesitem',
    'pamhc2crops:spinachitem'
  ])
  //Vegetables
  event.add('pamhc2:vegetables', [
    'minecraft:beetroot',
    'minecraft:carrot',
    'minecraft:potato',
    'minecraft:pumpkin',
    'pamhc2crops:arrowrootitem',
    'pamhc2crops:artichokeitem',
    'pamhc2crops:asparagusitem',
    'pamhc2crops:bellpepperitem',
    'pamhc2crops:bokchoyitem',
    'pamhc2crops:broccoliitem',
    'pamhc2crops:brusselsproutitem',
    'pamhc2crops:cabbageitem',
    'pamhc2crops:calabashitem',
    'pamhc2crops:cassavaitem',
    'pamhc2crops:caulifloweritem',
    'pamhc2crops:celeryitem',
    'pamhc2crops:chilipepperitem',
    'pamhc2crops:cucumberitem',
    'pamhc2crops:eggplantitem',
    'pamhc2crops:garlicitem',
    'pamhc2crops:jicamaitem',
    'pamhc2crops:kaleitem',
    'pamhc2crops:kohlrabiitem',
    'pamhc2crops:leekitem',
    'pamhc2crops:lettuceitem',
    'pamhc2crops:lotusitem',
    'pamhc2crops:nettlesitem',
    'pamhc2crops:nopalesitem',
    'pamhc2crops:okraitem',
    'pamhc2crops:onionitem',
    'pamhc2crops:parsnipitem',
    'pamhc2crops:peanutitem',
    'pamhc2crops:peasitem',
    'pamhc2crops:radishitem',
    'pamhc2crops:rhubarbitem',
    'pamhc2crops:rutabagaitem',
    'pamhc2crops:scallionitem',
    'pamhc2crops:spinachitem',
    'pamhc2crops:sweetpotatoitem',
    'pamhc2crops:taroitem',
    'pamhc2crops:tomatilloitem',
    'pamhc2crops:tomatoitem',
    'pamhc2crops:turnipitem',
    'pamhc2crops:waterchestnutitem',
    'pamhc2crops:whitemushroomitem',
    'pamhc2crops:wintersquashitem',
    'pamhc2crops:zucchiniitem'
  ])
  //Cactus Plants
  event.add('forge:cactus_plants', [
    'byg:prickly_pear_cactus',
    'byg:golden_spined_cactus',
    'byg:mini_cactus',
    'projectvibrantjourneys:small_cactus'
  ])

  //Mystic Alagriculture
  event.add('misctags:farmland/tier6', ['mysticalagradditions:insanium_farmland'])
  event.add('misctags:farmland/tier5', ['mysticalagriculture:supremium_farmland', '#misctags:farmland/tier6'])
  event.add('misctags:farmland/tier4', ['mysticalagriculture:imperium_farmland', '#misctags:farmland/tier5'])
  event.add('misctags:farmland/tier3', ['mysticalagriculture:tertium_farmland', '#misctags:farmland/tier4'])
  event.add('misctags:farmland/tier2', ['mysticalagriculture:prudentium_farmland', '#misctags:farmland/tier3'])
  event.add('misctags:farmland/tier1', ['mysticalagriculture:inferium_farmland', '#misctags:farmland/tier2'])

  //Immersive Engineering
  event.add('misctags:immersive_engineering_hammer', 'immersiveengineering:hammer')
  event.add('misctags:immersive_engineering_wirecutter', 'immersiveengineering:wirecutter')



  //Agriculture
  event.add('forge:grains', ['#forg:grain/wheat', '#forge:grain/amaranth', '#forge:grain/barley', '#forge:grain/millet', '#forge:grain/oats', '#forge:grain/quinoa', '#forge:grain/rice', '#forge:grain/rye'])
  event.add('forge:milk', ['blue_skies:ventium_milk_bucket', 'pamhc2foodcore:freshmilkitem', 'pamhc2foodextended:soymilkitem'])

  //Arow Top
  event.add('forge:arrow_top', [
    'minecraft:flint',
    'byg:therium_shard',
    'byg:subzero_crystal_shard',
    'reliquary:guardian_spike',
    'alexsmobs:bone_serpent_tooth',
    'alexsmobs:shark_tooth',
    'alexsmobs:cachalot_whale_tooth',
    'werewolves:werewolf_tooth',
    'ars_nouveau:wilden_spike',
    'evilcraft:dark_spike',
    'tombstone:bone_needle'
  ])

  //Glazed Terracota
  event.add('forge:glazed_terracotta', [
    'minecraft:white_glazed_terracotta',
    'minecraft:orange_glazed_terracotta',
    'minecraft:magenta_glazed_terracotta',
    'minecraft:light_blue_glazed_terracotta',
    'minecraft:yellow_glazed_terracotta',
    'minecraft:lime_glazed_terracotta',
    'minecraft:pink_glazed_terracotta',
    'minecraft:gray_glazed_terracotta',
    'minecraft:light_gray_glazed_terracotta',
    'minecraft:cyan_glazed_terracotta',
    'minecraft:purple_glazed_terracotta',
    'minecraft:blue_glazed_terracotta',
    'minecraft:brown_glazed_terracotta',
    'minecraft:green_glazed_terracotta',
    'minecraft:red_glazed_terracotta',
    'minecraft:black_glazed_terracotta'
  ])

  //Storage Drawers
  //Full Drawers 1x1
  event.add('storagedrawers:full_drawer1x1', [
    'storagedrawers:oak_full_drawers_1',
    'storagedrawers:spruce_full_drawers_1',
    'storagedrawers:birch_full_drawers_1',
    'storagedrawers:jungle_full_drawers_1',
    'storagedrawers:acacia_full_drawers_1',
    'storagedrawers:dark_oak_full_drawers_1'
  ])
  //Full Drawers 1x2
  event.add('storagedrawers:full_drawer1x2', [
    'storagedrawers:oak_full_drawers_2',
    'storagedrawers:spruce_full_drawers_2',
    'storagedrawers:birch_full_drawers_2',
    'storagedrawers:jungle_full_drawers_2',
    'storagedrawers:acacia_full_drawers_2',
    'storagedrawers:dark_oak_full_drawers_2'
  ])
  //Full Drawers 2x2
  event.add('storagedrawers:full_drawer2x2', [
    'storagedrawers:oak_full_drawers_4',
    'storagedrawers:spruce_full_drawers_4',
    'storagedrawers:birch_full_drawers_4',
    'storagedrawers:jungle_full_drawers_4',
    'storagedrawers:acacia_full_drawers_4',
    'storagedrawers:dark_oak_full_drawers_4'
  ])
  //Drawers Trim
  event.add('storagedrawers:trim',[
    'storagedrawers:oak_trim',
    'storagedrawers:spruce_trim',
    'storagedrawers:birch_trim',
    'storagedrawers:jungle_trim',
    'storagedrawers:acacia_trim',
    'storagedrawers:dark_oak_trim'
  ])

  //Chest
  event.add('misctags:chests', [
    'minecraft:chest',
    'quark:oak_chest',
    'quark:spruce_chest',
    'quark:birch_chest',
    'quark:jungle_chest',
    'quark:acacia_chest',
    'quark:dark_oak_chest',
    'quark:crimson_chest',
    'quark:warped_chest',
    'quark:prismarine_chest',
    'quark:nether_brick_chest',
    'quark:purpur_chest',
    'quark:blossom_chest',
    'quark:azalea_chest'
  ])

  //Doggy Talents
  event.add('doggytalents:beds', 'doggytalents:dog_bed')

  //Construction Wands
  event.add('constructionwand:wands', [
    'constructionwand:stone_wand',
    'constructionwand:iron_wand',
    'constructionwand:diamond_wand',
    'constructionwand:infinity_wand'
  ])

  //Tinkers' Construct
  event.add('tconstruct:part_builders', 'tconstruct:part_builder')
  event.add('tconstruct:tinker_stations', 'tconstruct:tinker_station')
  event.add('tconstruct:crafting_stations', 'tconstruct:crafting_station')
  event.add('tconstruct:tinkers_anvils', 'tconstruct:tinkers_anvil')
  
  //RFTools
  //Crafters
  event.add('rftools:crafter', [
    'rftoolsutility:crafter1',
    'rftoolsutility:crafter2',
    'rftoolsutility:crafter3'
  ])
  //Power Cells
  event.add('rftools:powercell', [
    'rftoolspower:cell1',
    'rftoolspower:cell2',
    'rftoolspower:cell3'
  ])
  //Dimensional Cells
  event.add('rftools:dimensionalcell', [
    'rftoolspower:dimensionalcell',
    'rftoolspower:dimensionalcell_simple',
    'rftoolspower:dimensionalcell_advanced'
  ])
  //Quarry Shape Cards
  event.add('rftools:quarrycard',[
    'rftoolsbuilder:shape_card_quarry',
    'rftoolsbuilder:shape_card_quarry_fortune',
    'rftoolsbuilder:shape_card_quarry_silk',
    'rftoolsbuilder:shape_card_quarry_clear',
    'rftoolsbuilder:shape_card_quarry_clear_fortune',
    'rftoolsbuilder:shape_card_quarry_clear_silk'
  ])
  //Fluid Shape Cards
  event.add('rftools:fluidcard', [
    'rftoolsbuilder:shape_card_liquid',
    'rftoolsbuilder:shape_card_pump',
    'rftoolsbuilder:shape_card_pump_clear'
  ])

  //Mining Gadgets
  event.add('mininggadgets:mininggadgets', [
    'mininggadgets:mininggadget_simple',
    'mininggadgets:mininggadget_fancy',
    'mininggadgets:mininggadget'
  ])

  //BLUE SKIES
  //Spears
  event.add('blue_skies:spears', [
    'blue_skies:bluebright_spear',
    'blue_skies:starlit_spear',
    'blue_skies:frostbright_spear',
    'blue_skies:lunar_spear',
    'blue_skies:dusk_spear',
    'blue_skies:maple_spear',
    'blue_skies:cherry_spear'
  ])

  //Summoner Artifact Drops
  event.add('blue_skies:summoner_drops', [
    'blue_skies:ethereal_arc',
    'blue_skies:soulbound_spear',
    'blue_skies:summoning_tome',
    'blue_skies:summoning_table',
    'blue_skies:blinding_rage'
  ])

  //Starlit Crusher Artifact Drops
  event.add('blue_skies:starlit_crusher_drops', [
    'blue_skies:crushing_hammer',
    'blue_skies:nature_arc',
    'blue_skies:defying_starlight'
  ])

  //Alchemist Artifact Drops
  event.add('blue_skies:alchemist_drops', [
    'blue_skies:spike_shield',
    'blue_skies:dusk_arc',
    'blue_skies:alchemy_table',
    'blue_skies:blinding_rage'
  ])

  //Arachnarch Artifact Drops
  event.add('blue_skies:arachnarch_drops', [
    'blue_skies:venom_sac',
    'blue_skies:poison_arc',
    'blue_skies:different_sword',
    'blue_skies:venomous_encounter'
  ])

  //Tool's Compement Sickles
  event.add('forge:sickles', [
    'tools_complement:iron_sickle',
    'tools_complement:gold_sickle',
    'tools_complement:diamond_sickle',
    'tools_complement:netherite_sickle',
    'tools_complement:copper_sickle',
    'tools_complement:tin_sickle',
    'tools_complement:lead_sickle',
    'tools_complement:silver_sickle',
    'tools_complement:nickel_sickle',
    'tools_complement:bronze_sickle',
    'tools_complement:electrum_sickle',
    'tools_complement:invar_sickle',
    'tools_complement:constantan_sickle',
  ])

  //Banner Patterns
  event.add('misctags:banner/patterns', [
    'minecraft:flower_banner_pattern',
    'minecraft:creeper_banner_pattern',
    'minecraft:skull_banner_pattern',
    'minecraft:mojang_banner_pattern',
    'minecraft:globe_banner_pattern',
    'minecraft:piglin_banner_pattern',
    'alexsmobs:banner_pattern_bear',
    'alexsmobs:banner_pattern_australia_0',
    'alexsmobs:banner_pattern_australia_1',
    'alexsmobs:banner_pattern_new_mexico',
    'alexsmobs:banner_pattern_brazil',
    'immersiveengineering:bannerpattern_hammer',
    'immersiveengineering:bannerpattern_bevels',
    'immersiveengineering:bannerpattern_ornate',
    'immersiveengineering:bannerpattern_treated_wood',
    'immersiveengineering:bannerpattern_windmill',
    'immersiveengineering:bannerpattern_wolf_r',
    'immersiveengineering:bannerpattern_wolf_l',
    'immersiveengineering:bannerpattern_wolf',
    'greekfantasy:spider_banner_pattern',
    'twilightforest:naga_banner_pattern',
    'twilightforest:lich_banner_pattern',
    'twilightforest:minoshroom_banner_pattern',
    'twilightforest:hydra_banner_pattern',
    'twilightforest:knight_phantom_banner_pattern',
    'twilightforest:ur_ghast_banner_pattern',
    'twilightforest:alpha_yeti_banner_pattern',
    'twilightforest:snow_queen_banner_pattern',
    'twilightforest:quest_ram_banner_pattern',
  ])

  //Comforts
  //Hammocks
  event.add('comforts:hammocks', [
    'comforts:hammock_white',
    'comforts:hammock_orange',
    'comforts:hammock_magenta',
    'comforts:hammock_light_blue',
    'comforts:hammock_yellow',
    'comforts:hammock_lime',
    'comforts:hammock_pink',
    'comforts:hammock_gray',
    'comforts:hammock_light_gray',
    'comforts:hammock_cyan',
    'comforts:hammock_purple',
    'comforts:hammock_blue',
    'comforts:hammock_brown',
    'comforts:hammock_green',
    'comforts:hammock_red',
    'comforts:hammock_black'
  ])
  //Sleeping Bags
  event.add('comforts:sleeping_bags', [
    'comforts:sleeping_bag_white',
    'comforts:sleeping_bag_orange',
    'comforts:sleeping_bag_magenta',
    'comforts:sleeping_bag_light_blue',
    'comforts:sleeping_bag_yellow',
    'comforts:sleeping_bag_lime',
    'comforts:sleeping_bag_pink',
    'comforts:sleeping_bag_gray',
    'comforts:sleeping_bag_light_gray',
    'comforts:sleeping_bag_cyan',
    'comforts:sleeping_bag_purple',
    'comforts:sleeping_bag_blue',
    'comforts:sleeping_bag_brown',
    'comforts:sleeping_bag_green',
    'comforts:sleeping_bag_red',
    'comforts:sleeping_bag_black'
  ])

  //Applied Energistics
  event.add('ae2:dusts/fluix', 'ae2:fluix_dust')

  //Industrial Foregoing
  event.add('industrialforegoing:bioreactor', '#forge:crops')

  //Missed Forge Tags
  

  event.add('forge:ores/quartz', ['byg:blue_nether_quartz_ore', 'byg:brimstone_nether_quartz_ore'])
  event.add('forge:ores/gold', ['byg:blue_nether_gold_ore', 'byg:brimstone_nether_gold_ore'])
  event.add('forge:ores/inferium',['mysticalagradditions:nether_inferium_ore','mysticalagradditions:end_inferium_ore'])

  event.add('forge:raw_ores/copper', 'minecraft:raw_copper')
  event.add('forge:raw_ores/iron', 'minecraft:raw_iron')
  event.add('forge:raw_ores/gold', 'minecraft:raw_gold')
  event.add('forge:rope', 'druidcraftrg:rope')

  event.add('forge:raw_ores/cobalt', 'tconstruct:raw_cobalt');
  event.add('forge:dusts/cobalt', 'kubejs:cobalt_dust');
  event.add('forge:dusts/netherite', 'alltheores:netherite_dust');

  event.add('forge:raw_ores/iridium', 'ftbic:iridium_chunk');
  event.remove('forge:silicon', ['ae2:silicon', 'refinedstorage:silicon'])
  event.add('forge:rubber', 'ftbic:rubber')

  event.add('forge:melons','minecraft:melon_slice')
  event.add('forbidden_arcanus:modifier/eternal_incompatible',['#alltheores:ore_hammers','@ftbic','#tconstruct:modifiable','minecraft:nether_star','mythicbotany:faded_nether_star', 'bloodmagic:sanguinereverter'])

  //Fix raw block crafting for other mods
  mekanismMetals.forEach(metal => event.add(`forge:raw_ores/${metal}`, `mekanism:raw_${metal}`))
  immersiveMetals.forEach(metal => event.add(`forge:raw_ores/${metal}`, `immersiveengineering:raw_${metal}`))

  atmMetals.forEach(metal => event.add(`forge:storage_blocks/raw_${metal}`, `allthemodium:raw_${metal}_block`));
  event.add('forge:storage_blocks/nether_star', 'extendedcrafting:nether_star_block');
  event.add('forge:ingots/redstone', 'extendedcrafting:redstone_ingot');
  event.add('forge:rods/metal', atoMetals.concat(vanillaMetals, atoAlloys).map(metal => `alltheores:${metal}_rod`));
  event.add('forge:rods/metal', atmMetals.map(metal => `allthemodium:${metal}_rod`));
  event.add('forge:rods/all_metal', '#forge:rods/metal');
  event.add('forge:plates', atmMetals.map(metal => `allthemodium:${metal}_plate`))

  event.remove('forge:storage_blocks/copper', 'minecraft:cut_copper')

  event.add('minecraft:logs', ['evilcraft:undead_log_stripped', 'evilcraft:undead_wood_stripped', /allthemodium:stripped_\w+_log/, 'hexerei:stripped_willow_log', /hexerei:stripped_\w+_wood/])
  event.add('forge:stripped_logs', [/hexerei:stripped_\w+_log/, 'evilcraft:undead_log_stripped', /allthemodium:stripped_\w+_log/])
  event.add('forge:stripped_wood', [/hexerei:stripped_\w+_wood/, 'evilcraft:undead_wood_stripped'])

})

onEvent('tags.entity_types', (event) => {
  event.add('industrialforegoing:mob_duplicator_blacklist',['artifacts:mimic','botania:doppleganger','allthemodium:piglich',])
  
})
