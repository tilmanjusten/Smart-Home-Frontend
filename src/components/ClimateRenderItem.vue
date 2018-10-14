<template>
    <div :class="'climate-item ' + actionClass">
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
      actionClass: ''
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
      let min = -15
      let max = 46
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
  border: 1px solid #eee;
  border-width: 0 0 0 0;
  flex: 0 0 calc((100% / 3) - 1px);
  height: 100vh;
  text-align: center;
  align-content: center;
  align-items: center;
  color: inherit;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  justify-content: stretch;
  text-decoration: none;
  transition: background 2.5s 0s linear;
}

.climate-item--has-update {
  background: #42b983;
  transition-duration: 0s;
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
