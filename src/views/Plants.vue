<template>
    <div class="plants">
        <PlantRenderItem deviceId="INKE" title="Schlafzimmer" />
        <PlantRenderItem deviceId="ODIN" title="Balken" />
        <PlantRenderItem deviceId="KUNO" title="Treppe" />
    </div>
</template>

<script>
import PlantRenderItem from '@/components/PlantRenderItem'

export default {
  name: 'plants',
  components: {
    PlantRenderItem
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
