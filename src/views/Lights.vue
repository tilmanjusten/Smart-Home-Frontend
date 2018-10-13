<template>
    <div class="lights">
        <LightRenderItem title="Lichterkette" />
        <LightRenderItem title="Sofa &amp; Regal" />
        <LightRenderItem title="Galerie" />
        <LightRenderItem title="Tür" />
        <LightRenderItem title="Wohnzimmer" />
        <LightRenderItem title="Alle Lichter" />
    </div>
</template>

<script>
import LightRenderItem from '@/components/LightRenderItem.vue'

export default {
  name: 'lights',
  components: {
    LightRenderItem
  }
}
</script>

<style>
.lights {
  align-items: flex-start;
  background: #eef;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
}
</style>
