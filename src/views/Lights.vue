<template>
    <div class="lights">
        <LightRenderItem
          v-for="light in lights"
          :key="light.id"
          :status="light.state"
          :deviceId="light.name_id"
          :title="light.name">
        </LightRenderItem>
    </div>
</template>

<script>
import LightRenderItem from '@/components/LightRenderItem.vue'

export default {
  name: 'lights-view',
  components: {
    LightRenderItem
  },
  computed: {
    lights () {
      return this.$store.getters.lights
    }
  },
  created () {
    if (!this.$store.getters.lastUpdatedLightsStateFromApi) {
      this.$store.dispatch('updateLightsStateFromApi')
    }
  }
}
</script>

<style>
.lights {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
}
</style>
