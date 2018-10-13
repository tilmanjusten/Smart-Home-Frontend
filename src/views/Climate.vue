<template>
    <div class="climate">
        <ClimateRenderItem title="Wohnzimmer" />
        <ClimateRenderItem title="Schlafzimmer" />
        <ClimateRenderItem title="Badezimmer" />
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
  background: #eef;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
}
</style>
