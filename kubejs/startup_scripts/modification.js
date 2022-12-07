onEvent('item.modification', (event) => {

  let colors = [`white`, `light_gray`, `gray`, `black`, `red`, `orange`, `yellow`, `lime`, `green`, `light_blue`, `cyan`, `blue`, `purple`, `magenta`, `pink`, `brown`]

  function modifyStack(listOfItems, countPerStack) {
    listOfItems.forEach(item => {
      event.modify(item, item => item.maxStackSize = countPerStack)
    })
  }

  modifyStack([
    //Miscelleneous region
    /^industrialforegoing:.*addon.*/,
    /^sophisticatedbackpacks:.*upgrade.*/,
    /^sophisticatedstorage:.*upgrade.*/,
    /^mekanism:.*upgrade.*/,
    /^thermal:.*grenade.*/,
    'cyclic:heart',
    'cyclic:heart_empty',
    'minecraft:ender_pearl',
    'minecraft:egg',
    'minecraft:cake',
    'minecraft:minecart',
    'minecraft:saddle',
    'blue_skies:camel_saddle',
    'minecraft:shulker_box',
    'minecraft:writable_book',
    'minecraft:enchanted_book',
    'minecraft:honey_bottle',
    'minecraft:totem_of_undying',
    'minecraft:snowball',
    'minecraft:armor_stand',
    'minecraft:bucket',
    'minecraft:water_bucket',
    'minecraft:milk_bucket',
    'minecraft:lava_bucket',
    'tconstruct:glow_ball',
    'tconstruct:efln_ball',
    'tconstruct:quartz_shuriken',
    'tconstruct:flint_shuriken',
    'forbidden_arcanus:aureal_bottle',
    'forbidden_arcanus:xpetrified_orb',
    'voidtotem:totem_of_void_undying',
    //Sign region
    'minecraft:oak_sign',
    'minecraft:spruce_sign',
    'minecraft:oak_sign',
    'minecraft:spruce_sign',
    'minecraft:birch_sign',
    'minecraft:acacia_sign',
    'minecraft:jungle_sign',
    'minecraft:dark_oak_sign',
    'minecraft:crimson_sign',
    'minecraft:warped_sign',
    'undergarden:smogstem_sign',
    'undergarden:wigglewood_sign',
    'undergarden:grongle_sign',
    'framedblocks:framed_sign',
    'securitycraft:secret_sign_item',
    'securitycraft:secret_spruce_sign_item',
    'securitycraft:secret_birch_sign_item',
    'securitycraft:secret_jungle_sign_item',
    'securitycraft:secret_acacia_sign_item',
    'securitycraft:secret_dark_oak_sign_item',
    'securitycraft:secret_crimson_sign_item',
    'securitycraft:secret_warped_sign_item',
    'forbidden_arcanus:fungyss_sign',
    'forbidden_arcanus:cherrywood_sign',
    'forbidden_arcanus:mysterywood_sign',
    'forbidden_arcanus:edelwood_sign',
    'twilightforest:twilight_oak_sign',
    'twilightforest:canopy_sign',
    'twilightforest:mangrove_sign',
    'twilightforest:darkwood_sign',
    'twilightforest:time_sign',
    'twilightforest:trans_sign',
    'twilightforest:mine_sign',
    'twilightforest:sort_sign',
    'tconstruct:greenheart_sign',
    'tconstruct:skyroot_sign',
    'tconstruct:bloodshroom_sign',
    'quark:blossom_sign',
    'quark:azalea_sign',
    'biomesoplenty:fir_sign',
    'biomesoplenty:redwood_sign',
    'biomesoplenty:cherry_sign',
    'biomesoplenty:mahogany_sign',
    'biomesoplenty:jacaranda_sign',
    'biomesoplenty:palm_sign',
    'biomesoplenty:willow_sign',
    'biomesoplenty:dead_sign',
    'biomesoplenty:magic_sign',
    'biomesoplenty:umbran_sign',
    'biomesoplenty:hellbark_sign',
    //Boat region
    'minecraft:oak_boat',
    'minecraft:spruce_boat',
    'minecraft:birch_boat',
    'minecraft:jungle_boat',
    'minecraft:acacia_boat',
    'minecraft:dark_oak_boat',
    'biomesoplenty:fir_boat',
    'biomesoplenty:redwood_boat',
    'biomesoplenty:cherry_boat',
    'biomesoplenty:mahogany_boat',
    'biomesoplenty:jacaranda_boat',
    'biomesoplenty:palm_boat',
    'biomesoplenty:willow_boat',
    'biomesoplenty:dead_boat',
    'biomesoplenty:magic_boat',
    'biomesoplenty:umbran_boat',
    'biomesoplenty:hellbark_boat',
    'undergarden:smogstem_boat',
    'undergarden:wigglewood_boat',
    'undergarden:grongle_boat',
    'byg:aspen_boat',
    'byg:baobab_boat',
    'byg:blue_enchanted_boat',
    'byg:cherry_boat',
    'byg:cika_boat',
    'byg:cypress_boat',
    'byg:ebony_boat',
    'byg:fir_boat',
    'byg:green_enchanted_boat',
    'byg:holly_boat',
    'byg:jacaranda_boat',
    'byg:mahogany_boat',
    'byg:mangrove_boat',
    'byg:maple_boat',
    'byg:palm_boat',
    'byg:pine_boat',
    'byg:rainbow_eualyptus_boat',
    'byg:redwood_boat',
    'byg:skyris_boat',
    'byg:willow_boat',
    'byg:witch_hazel_boat',
    'byg:zelkova_boat',
    'quark:blossom_boat',
    'quark:azalea_boat',
    //Horse armor region
    'minecraft:iron_horse_armor',
    'minecraft:golden_horse_armor',
    'minecraft:diamond_horse_armor',
    'minecraft:leather_horse_armor',
    'byg:ametrine_horse_armor',
    'byg:pendorite_horse_armor',
    //Stew/soup region
    'minecraft:mushroom_stew',
    'minecraft:rabbit_stew',
    'minecraft:beetroot_soup',
    'undergarden:bloody_stew',
    'undergarden:inky_stew',
    'undergarden:indigo_stew',
    'undergarden:veiled_stew',
    'thermal:hearty_stew',
    'thermal:xp_stew',
    'ob_aquamirae:sea_stew',
    'nourished_end:chorus_soup',
    'aquaculture:turtle_soup',
    'forbidden_arcanus:bat_soup',
    //Music disk region
    /^morediscs:.*music_disc.*/,
    'minecraft:music_disc_13',
    'minecraft:music_disc_cat',
    'minecraft:music_disc_blocks',
    'minecraft:music_disc_chirp',
    'minecraft:music_disc_far',
    'minecraft:music_disc_mall',
    'minecraft:music_disc_mellohi',
    'minecraft:music_disc_stal',
    'minecraft:music_disc_strad',
    'minecraft:music_disc_ward',
    'minecraft:music_disc_11',
    'minecraft:music_disc_wait',
    'minecraft:music_disc_otherside',
    'minecraft:music_disc_pigstep',
    'bloodmagis:bleedingedge',
    'biomesoplenty:music_disc_wanderer',
    'snowpig:music_disc_frosty_snig',
    'botania:record_gaia_1',
    'botania:record_gaia_2',
    'alexsmobs:music_disc_thime',
    'alexsmobs:music_disc_daze',
    'ob_aquamirae:musicdischorizon',
    'ob_aquamirae:music_disc_forsaken_drownage',
    'bygonenether:wither_waltz_music_disc',
    'mowziesmobs:music_disc_petiole',
    'quark:music_disc_endermosh',
    'quark:music_disc_drips',
    'quark:music_disc_ocean',
    'quark:music_disc_rain',
    'quark:music_disc_wind',
    'quark:music_disc_fire',
    'quark:music_disc_clock',
    'quark:music_disc_crickets',
    'quark:music_disc_chatter',
    'blue_skies:blinding_rage',
    'blue_skies:defying_starlight',
    'blue_skies:venomous_encounter',
    'blue_skies:population',
    'twilightforest:music_disc_radiance',
    'twilightforest:music_disc_steps',
    'twilightforest:music_disc_superstitious',
    'twilightforest:music_disc_home',
    'twilightforest:music_disc_wayfarer',
    'twilightforest:music_disc_findings',
    'twilightforest:music_disc_maker',
    'twilightforest:music_disc_thread',
    'twilightforest:music_disc_motion',
    'undergarden:music_disc_mammoth',
    'undergarden:music_disc_limax_maximus',
    'undergarden:music_disc_relict',
    'undergarden:music_disc_gloomper_anthem',
    //Potion region
    /^minecraft:.*potion.*/,
    /^enigmaticlegacy:.*potion.*/,
  ], 64)

  colors.forEach(color => {
    event.modify(`minecraft:${color}_banner`, item => item.maxStackSize = 64)
  })

  colors.forEach(color => {
    event.modify(`minecraft:${color}_bed`, item => item.maxStackSize = 64)
  })

  colors.forEach(color => {
    event.modify(`minecraft:${color}_shulker_box`, item => item.maxStackSize = 64)
  })

  event.modify('allthemodium:allthemodium_sword', modification => {
		modification.setAttackDamage(1000)
	})
  event.modify('allthemodium:vibranium_sword', modification => {
		modification.setAttackDamage(1500)
	})
  event.modify('allthemodium:unobtainium_sword', modification => {
		modification.setAttackDamage(2000)
	})

})

onEvent('block.modification', event => {
  event.modify(/.*log.*/, block => {
    block.requiresTool = true
  })
})
