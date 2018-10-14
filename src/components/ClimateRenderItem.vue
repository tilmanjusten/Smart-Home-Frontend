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
          {{humidity}}% ({{temperatureDisplay}})
        </div>
      </div>
      <div class="climate-item__dials">
        <div class="climate-item__thermometer">
          <div class="climate-item__thermometer-display" :style="{transform: temperatureDisplay}"></div>
        </div>
        <div class="climate-item__hygrometer">

        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import socket from '@/lib/socket'

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
      date: null,
      socket,
      actionClass: ''
    }
  },
  computed: {
    temperatureDisplay () {
      let min = 10
      let max = 50
      let range = max - min
      let val = this.temperature / range

      return `scaleY(${val})`
    }
  },
  created () {
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

    this.socket.on('update', data => {
      data.data.forEach(item => {
        if (item.deviceId === this.deviceId && (item.hu !== this.humidity || item.te !== this.temperature)) {
          this.date = new Date(item.date)
          this.humidity = item.hu
          this.temperature = item.te
          this.actionClass = 'climate-item--has-update'
        }
      })

      setTimeout(() => {
        this.actionClass = ''
      }, 100)
    })
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
  flex: 1 1 20vh;
  align-items: center;
  margin: 0;
}

.climate-item__main {
  display: flex;
  flex-direction: column;
  flex: 1 1 20vh;
  align-items: center;
  justify-content: center;
}

.climate-item__dials {
  flex: 1 1 auto;
  align-items: stretch;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  height: 60vh;
  width: 100%;
}

.climate-item__hygrometer,
.climate-item__thermometer {
  flex: 1 1 auto;
  position: relative;
}

.climate-item__hygrometer {
  display: none;
}

.climate-item__thermometer {
  &::before,
  &::after {
    background: #fff;
    border: 3px solid #000;
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
  }

  &::before {
    width: 30px;
    border-radius: 15px 15px 0 0;
    border-bottom-width: 0;
    top: 5vh;
    height: 40vh;
    z-index: 2;
  }

  &::after {
    background: rgb(225, 0, 0);
    width: 60px;
    border-radius: 50%;
    top: calc(45vh - 5px);
    height: 60px;
    z-index: 1;
  }
}

.climate-item__thermometer-display {
  position: absolute;
  bottom: calc(15vh - 3px);
  width: 30px;
  background: rgb(225, 0, 0);
  height: calc(100% - 15vh - 7px - 5vh);
  border-radius: 1px 1px 0 0;
  z-index: 3;
  left: 0;
  right: 0;
  margin: auto;
  transition: transform 2s 0s ease-out;
  transform: scaleY(0);
  transform-origin: bottom;
}
</style>
