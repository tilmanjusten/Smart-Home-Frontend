<template>
    <div class="plants">
        <PlantRenderItem deviceId="ZEUS" title="Efeutute" room="Wohnzimmer" />
        <PlantRenderItem deviceId="THOR" title="Rose" room="Schlafzimmer" />
    </div>
</template>

<script>
import PlantRenderItem from '@/components/PlantRenderItem'

export default {
  name: 'plants',
  components: {
    PlantRenderItem
  },
  created () {
    if (this.$store.getters.items.length < 1) {
      this.$store.dispatch('populate')
    }
  }
}
</script>

<style lang="scss">
.plants {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;

  > *:nth-child(2n) {
    background: var(--color-green-transparent);
  }
}
</style>
