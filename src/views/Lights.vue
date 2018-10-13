<template>
    <div class="lights">
        <LightRenderItem deviceId="lichterkette" title="Lichterkette" />
        <LightRenderItem deviceId="sofalicht" title="Sofa &amp; Regal" />
        <LightRenderItem deviceId="galerielicht" title="Galerie" />
        <LightRenderItem deviceId="tuerlicht" title="Tür" />
        <LightRenderItem deviceId="wohnzimmerlicht" title="Wohnzimmer" />
        <LightRenderItem deviceId="alle-lichter" title="Alle Lichter" />
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
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
}
</style>
