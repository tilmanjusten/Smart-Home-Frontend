<template>
    <div :class="'plant-item ' + typeClass">
      <h2 class="plant-item__label">
        {{title}}
        <div class="plant-item__room">{{room}}</div>
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
    'room',
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
      let item = this.$store.getters.latestItemByDeviceId(this.deviceId, 'mo')

      return item
    },
    moisture () {
      return this.source.mv * 1
    },
    date () {
      return this.source.date
    }
  }
}
</script>

<style lang="scss">
.plant-item {
  flex: 0 0 (100% / 2);
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
  flex-direction: column;
  justify-content: center;
  flex: 1 1 25vh;
  margin: 0;
  text-align: center;
}

.plant-item__room {
  font-size: 1rem;
  font-weight: normal;
}

.plant-item__main {
  display: flex;
  flex-direction: column;
  flex: 1 1 75vh;
  align-items: center;
  justify-content: center;
}
</style>
