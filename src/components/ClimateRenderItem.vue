<template>
    <div :class="'climate-item ' + typeClass">
      <h2 class="climate-item__label">
        {{title}}
      </h2>
      <div class="climate-item__main">
        <div class="climate-item__temperature">
          {{temperature}}°C
        </div>
        <div class="climate-item__humidity">
          {{humidity}}%
        </div>
      </div>
      <div class="climate-item__dial">

        <ClimateDial :humidityScale="humidityScale" :temperatureScale="temperatureScale" />

      </div>
    </div>
</template>

<script>
import ClimateDial from '@/components/ClimateDial.vue'

export default {
  name: 'climate-render-item',
  props: [
    'title',
    'deviceId'
  ],
  components: {
    ClimateDial
  },
  data () {
    return {
      typeClass: `climate-item--${this.deviceId.toLowerCase()}`
    }
  },
  computed: {
    temperatureDisplay () {
      let min = 10
      let max = 42
      let range = max - min

      return Math.max(Math.min(100, (this.temperature - min) / range), 0)
    },
    temperatureScale () {
      let min = -9
      let max = 45
      let range = max - min

      return Math.max(Math.min(100, (this.temperature - min) / range), 0)
    },
    humidityScale () {
      let min = -5
      let max = 96
      let range = max - min

      return Math.max(Math.min(100, (this.humidity - min) / range), 0)
    },
    humidity () {
      return this.$store.getters.latestItemByDeviceId(this.deviceId).hu
    },
    temperature () {
      return this.$store.getters.latestItemByDeviceId(this.deviceId).te
    },
    date () {
      return new Date(this.$store.getters.latestItemByDeviceId(this.deviceId).date)
    }
  }
}
</script>

<style lang="scss">
.climate-item {
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

.climate-item__label {
  display: flex;
  flex: 1 1 25vh;
  align-items: center;
  margin: 0;
}

.climate-item__main {
  display: flex;
  flex-direction: column;
  flex: 1 1 10vh;
  align-items: center;
  justify-content: center;
}

.climate-item__dial {
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 65vh;
}
</style>
