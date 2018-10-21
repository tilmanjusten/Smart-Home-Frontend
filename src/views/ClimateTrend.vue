<template>
    <div class="climate-trend">
      <h1 class="climate-trend__title">Wetter-Verlauf</h1>
      <div class="climate-trend__legend">
        <ol>
          <li class="climate-trend__legend-item climate-trend__legend-item--zeus">
            Wohnzimmer
          </li>
          <li class="climate-trend__legend-item climate-trend__legend-item--thor">
            Schlafzimmer
          </li>
          <li class="climate-trend__legend-item climate-trend__legend-item--amun">
            Badezimmer
          </li>
        </ol>
      </div>
      <div class="climate-trend__main">
        <chartist
          class="climate-trend__chart"
          type="Line"
          :data="chartData"
          :options="chartOptions">
        </chartist>
      </div>
    </div>
</template>

<script>
import moment from 'moment'
import chartist from 'vue-chartist'
import Vue from 'vue'

Vue.use(chartist, {
  messageNoData: 'You have not enough data',
  classNoData: 'empty'
})

export default {
  name: 'climate-trend',
  data () {
    return {
      chartOptions: {
        lineSmooth: true,
        showPoint: false,
        chartPadding: {
          top: 15,
          right: 15,
          bottom: 5,
          left: 10
        },
        high: 90,
        low: 10,
        height: '75vh',
        axisX: {
          type: this.$chartist.FixedScaleAxis,
          divisor: 5,
          labelInterpolationFnc: value => {
            return moment(value).format('D.MM., H:mm')
          }
        },
        axisY: {
          labelInterpolationFnc: (value) => {
            return value < 50 ? `${value}°C` : `${value}%`
          }
        }
      }
    }
  },
  computed: {
    chartData () {
      const series = []
      const dataMap = [{
        name: 'Wohnzimmer Temperatur',
        deviceId: 'ZEUS',
        property: 'te'
      }, {
        name: 'Wohnzimmer Luftfeuchtigkeit',
        deviceId: 'ZEUS',
        property: 'hu'
      }, {
        name: 'Schlafzimmer Temperatur',
        deviceId: 'THOR',
        property: 'te'
      }, {
        name: 'Schlafzimmer Luftfeuchtigkeit',
        deviceId: 'THOR',
        property: 'hu'
      }, {
        name: 'Badezimmer Temperatur',
        deviceId: 'AMUN',
        property: 'te'
      }, {
        name: 'Badezimmer Luftfeuchtigkeit',
        deviceId: 'AMUN',
        property: 'hu'
      }]

      // Temperature
      dataMap.forEach(entry => {
        let items = this.$store.getters.itemsByDeviceId(entry.deviceId, entry.property).slice(-1200)
        let data = items.map(item => {
          return {
            x: new Date(item.date),
            y: item[entry.property] * 1
          }
        })

        series.push({
          name: entry.name,
          data
        })
      })

      return {
        labels: ['WZ °C', 'WZ %', 'SZ °C', 'SZ %', 'BZ °C', 'BZ %'],
        series
      }
    }
  },
  created () {
    if (this.$store.getters.items.length < 1) {
      this.$store.dispatch('populate')
    }
  }
}
</script>

<style src='chartist/dist/chartist.min.css'></style>

<style lang="scss">
.climate-trend {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: stretch;
  min-height: 100vh;
}

.climate-trend__title {
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding-top: 1rem;
}

.climate-trend__main {
  flex: 1 1 75vh;
  height: 75vh;
  padding: 0 1rem;
}

.climate-trend__legend {
  flex: 0 1 5;

  ol {
    justify-content: center;
    list-style: none;
    padding: 0;
    display: flex;
    margin: 0;
  }
}

.climate-trend__legend-item {
  flex: 0 1 auto;
  padding: 0 2rem 0 20px;
  position: relative;

  &::before {
    border-radius: 50%;
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    left: 0;
    position: absolute;
    bottom: 0;
    top: 0;
    margin: auto 0;
  }
}

.climate-trend__legend-item--amun {
  &::before {
    background: #1c91c0;
  }
}

.climate-trend__legend-item--thor {
  &::before {
    background: #6f9654;
  }
}

.climate-trend__legend-item--zeus {
  &::before {
    background: #e2431e;
  }
}

.climate-trend__chart {
  .ct-series {
    .ct-line {
      stroke-width: 3px;
    }

    .ct-point {
      stroke-width: 7px;
    }
  }

  .ct-series-a {
    .ct-line,
    .ct-point {
      stroke: #e2431e;
    }
  }

  .ct-series-b {
    .ct-line,
    .ct-point {
      stroke: #e2431e;
    }
  }

  .ct-series-c {
    .ct-line,
    .ct-point {
      stroke: #6f9654;
    }
  }

  .ct-series-d {
    .ct-line,
    .ct-point {
      stroke: #6f9654;
    }
  }

  .ct-series-e {
    .ct-line,
    .ct-point {
      stroke: #1c91c0;
    }
  }

  .ct-series-f {
    .ct-line,
    .ct-point {
      stroke: #1c91c0;
    }
  }
}
</style>
