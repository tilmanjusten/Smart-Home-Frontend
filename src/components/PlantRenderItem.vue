<template>
    <div :class="'plant-item ' + typeClass">
      <h2 class="plant-item__label">
        {{title}}
      </h2>
      <div class="plant-item__main">
        <div class="plant-item__moisture" v-if="moisture">
          {{moisture}}%
        </div>
        <div v-else>
          keine Daten vorhanden
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'plant-render-item',
  props: [
    'title',
    'deviceId'
  ],
  data () {
    return {
      isActive: false,
      typeClass: `plant-item--${this.deviceId.toLowerCase()}`
    }
  },
  computed: {
    source () {
      let template = {
        date: null,
        deviceId: null,
        mo: null,
        type: null
      }
      let stateItem = this.$store.getters.latestItemByDeviceId(this.deviceId) || {}

      return { ...template, ...stateItem }
    },
    moisture () {
      return this.source.mo
    },
    date () {
      return this.source.date
    }
  }
}
</script>

<style lang="scss">
.plant-item {
  flex: 0 0 (100% / 3);
  height: 100vh;
  text-align: center;
  align-content: center;
  align-items: center;
  color: inherit;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  justify-content: stretch;
  padding: 1rem;
  text-decoration: none;
}

.plant-item__label {
  display: flex;
  flex: 1 1 25vh;
  align-items: center;
  margin: 0;
}

.plant-item__main {
  display: flex;
  flex-direction: column;
  flex: 1 1 75vh;
  align-items: center;
  justify-content: center;
}
</style>
