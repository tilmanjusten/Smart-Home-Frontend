<template>
    <div class="plants-trend">
      <h1 class="plants-trend__title">Pflanzen-Verlauf</h1>
      <div class="plants-trend__legend">
        <ol>
          <li class="plants-trend__legend-item plants-trend__legend-item--zeus">
            Wohnzimmer
          </li>
          <li class="plants-trend__legend-item plants-trend__legend-item--thor">
            Schlafzimmer
          </li>
        </ol>
      </div>
      <div class="plants-trend__main">
        <chartist
          class="plants-trend__chart"
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

moment.locale('de')

Vue.use(chartist, {
  messageNoData: 'keine Daten vorhanden',
  classNoData: 'plants-trend__chart--empty'
})

export default {
  name: 'plants-trend',
  components: {},
  data () {
    return {
      chartOptions: {
        lineSmooth: true,
        showPoint: true,
        chartPadding: {
          top: 15,
          right: 15,
          bottom: 5,
          left: 10
        },
        high: 80,
        low: 0,
        axisX: {
          type: this.$chartist.FixedScaleAxis,
          divisor: 7,
          labelInterpolationFnc: value => {
            return `${moment(value).format('ddd, D.MM.')}`
          }
        },
        axisY: {
          labelInterpolationFnc: (value) => {
            return `${value}%`
          }
        }
      }
    }
  },
  computed: {
    chartData () {
      const series = []
      const dataMap = [{
        name: 'Wohnzimmer',
        deviceId: 'ZEUS',
        property: 'mv'
      }, {
        name: 'Schlafzimmer',
        deviceId: 'THOR',
        property: 'mv'
      }]

      // Temperature
      dataMap.forEach(entry => {
        let items = this.$store.getters.itemsByDeviceId(entry.deviceId, entry.property).slice(-700)
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
        labels: ['Wohnzimmer', 'Schlafzimmer'],
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
.plants-trend {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: stretch;
  min-height: 100vh;
}

.plants-trend__title {
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding-top: 1rem;
}

.plants-trend__main {
  flex: 1 1 75vh;
  height: 75vh;
  padding: 0 1rem;
}

.plants-trend__legend {
  flex: 0 1 5;

  ol {
    justify-content: center;
    list-style: none;
    padding: 0;
    display: flex;
    margin: 0;
  }
}

.plants-trend__legend-item {
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

.plants-trend__legend-item--amun {
  &::before {
    background: #1c91c0;
  }
}

.plants-trend__legend-item--thor {
  &::before {
    background: #6f9654;
  }
}

.plants-trend__legend-item--zeus {
  &::before {
    background: #e2431e;
  }
}

.plants-trend__chart {
  height: inherit;

  .ct-labels {
  }

  .ct-label {
    color: #000;
    font-weight: bold;
  }

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
      stroke: #6f9654;
    }
  }

  .ct-series-c {
    .ct-line,
    .ct-point {
      stroke: #1c91c0;
    }
  }
}

.plants-trend__chart--empty {
  text-align: center;
}
</style>
