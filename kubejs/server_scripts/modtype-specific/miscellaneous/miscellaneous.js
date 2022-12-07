onEvent('recipes', (event) => {
  
  function multicrush(output, input) {
    event.recipes.mekanism.crushing(output, input)
    event.recipes.immersiveengineering.crusher(output, input)
    event.recipes.thermal.pulverizer(output, input)
  }

  multicrush('4x minecraft:brick', 'minecraft:bricks')
  multicrush('4x minecraft:magma_cream', 'minecraft:magma_block')
  multicrush('minecraft:snow_block', 'minecraft:ice')
  multicrush('allthemodium:unobtainium_allthemodium_alloy_dust', 'allthemodium:unobtainium_allthemodium_alloy_ingot')
  multicrush('allthemodium:unobtainium_vibranium_alloy_dust', 'allthemodium:unobtainium_vibranium_alloy_ingot')
  multicrush('allthemodium:vibranium_allthemodium_alloy_dust', 'allthemodium:vibranium_allthemodium_alloy_ingot')

})
