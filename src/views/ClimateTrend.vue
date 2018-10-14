<template>
    <div class="climate-trend">
      <h1 class="climate-trend__title">Wetter-Verlauf</h1>
      <div class="climate-trend__main">
        <GChart
          type="LineChart"
          :data="chartData"
          :options="chartOptions"
        />
      </div>
    </div>
</template>

<script>
import { GChart } from 'vue-google-charts'

const chartOptions = {
  legend: {
    position: 'top',
    fontSize: 12
  },
  height: 340,
  chartArea: {
    left: 50,
    top: 10,
    width: '90%',
    height: '85%'
  },
  series: {
    0: {
      color: '#e2431e'
    },
    1: {
      color: '#e2431e'
    },
    2: {
      color: '#6f9654'
    },
    3: {
      color: '#6f9654'
    },
    4: {
      color: '#1c91c0'
    },
    5: {
      color: '#1c91c0'
    }
  },
  hAxis: {
    title: null,
    format: 'd.MM., H:mm',
    fontSize: 12
  },
  vAxis: {
    format: '#',
    title: '°C / %'
  },
  trendlines: {},
  explorer: {
    axis: 'horizontal',
    actions: ['dragToPan', 'dragToZoom', 'rightClickToReset'],
    maxZoomIn: 0.25,
    maxZoomOut: 2,
    zoomDelta: 1.5
  }
}

const processItemForChart = item => {
  const res = [new Date(item.date)]

  item.data.map(v => {
    if (v === null) {
      res.push(0)
      res.push(0)
    } else if (v !== null && v !== undefined) {
      res.push(v.hu * 1)
      res.push(v.te * 1)
    }
  })

  return res
}

export default {
  name: 'climate-trend',
  components: {
    GChart
  },
  data () {
    return {
      chartOptions
    }
  },
  computed: {
    chartData () {
      let header = [
        [
          'Zeit',
          'SZ: %',
          '°C',
          'WZ: %',
          '°C',
          'Bad: %',
          '°C'
        ]
      ]
      let items = this.$store.getters.items.slice(-1200)
      let preparedItems = items.map(processItemForChart)

      return [...header, ...preparedItems]
    }
  },
  created () {
    if (this.$store.getters.items.length < 1) {
      this.$store.dispatch('populate')
    }
  }
}
</script>

<style>
.climate-trend {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: stretch;
  min-height: 100vh;
}

.climate-trend__title {
  flex: 0 1 auto;
  height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding-top: 1rem;
}

.climate-trend__main {
  flex: 1 1 auto;
  padding: 0 1rem 1rem;
  height: 75vh;
}
</style>
