<template>
    <div class="climate">
        <ClimateRenderItem deviceId="ODIN" title="Wohnzimmer" />
        <ClimateRenderItem deviceId="INKE" title="Schlafzimmer" />
        <ClimateRenderItem deviceId="PURL" title="Badezimmer" />
    </div>
</template>

<script>
import ClimateRenderItem from '@/components/ClimateRenderItem.vue'

export default {
  name: 'climate',
  components: {
    ClimateRenderItem
  }
}
</script>

<style>
.climate {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
}
</style>
