<template>
    <div class="climate-item">
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
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'climate-render-item',
  props: [
    'title',
    'deviceId'
  ],
  data () {
    return {
      humidity: null,
      temperature: null,
      date: null
    }
  },
  mounted () {
    // get initial state
    axios
      .get(`http://localhost:3000/api/v1/items/${this.deviceId}/latest`)
      .then(res => {
        let origin = res.data.origin

        this.humidity = origin.hu
        this.temperature = origin.te
        this.date = new Date(res.date)
      })
      .catch(err => console.error(err))
  }
}
</script>

<style lang="scss">
.climate-item {
  border: 1px solid #eee;
  border-width: 0 1px 0 0;
  flex: 0 0 calc((100% / 3) - 1px);
  height: 100vh;
  text-align: center;
  align-content: center;
  align-items: center;
  color: inherit;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  justify-content: center;
  text-decoration: none;
}
</style>
