<template>
    <div :class="'plant-item ' + typeClass">
      <h2 class="plant-item__label">
        {{title}}
        <div class="plant-item__room">{{room}}</div>
      </h2>
      <div class="plant-item__main" v-if="moisture">
        <div class="plant-item__moisture">
          {{moisture}}%
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="plant" viewBox="0 0 32 32">
          <ellipse v-if="moisture > 20" cx="18" cy="14.5" fill="green" class="plant__leaf-1" rx="1.5" ry="2.5" transform="matrix(0.5,0.9,-0.9,0.5,23,-10.2)"/>
          <ellipse v-if="moisture > 30" cx="24.5" cy="7" fill="green" class="plant__leaf-2" rx="2.5" ry="4" transform="matrix(0.5,-0.9,0.9,0.5,-6.6,26.4)"/>
          <ellipse v-if="moisture > 50" cx="9.8" cy="7.8" fill="green" class="plant__leaf-3" rx="2.5" ry="4.3" transform="matrix(0.9,0.4,-0.4,0.9,13,-6.2)"/>
          <g class="plant__pot">
              <rect v-if="moisture > 15" width="15" height="3" x="8.5" y="17.5" fill="brown"/>
              <rect v-if="moisture > 10" width="12" height="5.5" x="10" y="20.5" fill="brown"/>
              <rect v-if="moisture > 10" width="11" height="6" x="10.5" y="25.5" fill="brown"/>
          </g>
          <path d="M 20.9 0 a 0.5 0.5 0 0 0 -0.1 0 c -0.8 0.1 -1.6 0.4 -2.3 0.8 c -2.2 1.3 -3.5 3.7 -3.4 6.2 A 6.5 6.5 0 0 0 10 4.5 a 0.5 0.5 0 0 0 0 0 c -0.8 0 -1.5 0.1 -2.3 0.4 a 0.5 0.5 0 0 0 -0.3 0.5 c 0.4 3.3 3.2 5.9 6.5 5.9 a 0.5 0.5 0 0 0 0 0 c 0.5 0 1.1 -0.1 1.6 -0.2 v 5.9 H 8.8 a 0.8 0.8 0 0 0 -0.8 0.8 V 20.2 c 0 0.4 0.4 0.8 0.8 0.8 h 0.3 l 1.2 11 h 11.3 l 1.2 -11 h 0.3 c 0.4 0 0.8 -0.4 0.8 -0.8 v -2.4 a 0.8 0.8 0 0 0 -0.8 -0.8 h -6.7 v -1.3 c 0.3 0.1 0.6 0.1 1 0.1 a 0.5 0.5 0 0 0 0 0 c 2.3 0 4.3 -1.7 4.5 -4 a 0.5 0.5 0 0 0 -0.3 -0.5 a 4.6 4.6 0 0 0 -1.6 -0.3 a 0.5 0.5 0 0 0 0 0 a 4.6 4.6 0 0 0 -3.6 1.8 v -2.3 a 0.5 0.5 0 0 0 0 -0.1 v -0.5 a 6.7 6.7 0 0 0 2.1 -0.8 a 0.5 0.5 0 0 0 0 0 c 3 -1.8 4.2 -5.5 2.8 -8.8 a 0.5 0.5 0 0 0 -0.5 -0.3 V 0 z m -0.3 1.1 c 0.9 2.7 0 5.7 -2.5 7.1 c -0.3 0.2 -0.7 0.3 -1 0.4 l 2.4 -3.2 a 0.5 0.5 0 0 0 -0.4 -0.8 a 0.5 0.5 0 0 0 -0.4 0.2 l -2.3 3.1 c -0.5 -2.5 0.5 -5 2.7 -6.2 c 0.5 -0.3 1 -0.4 1.5 -0.5 z M 10 5.5 h 0 c 2.3 0 4.3 1.5 5.1 3.5 l -2.9 -1.5 a 0.5 0.5 0 0 0 -0.2 -0.1 a 0.5 0.5 0 0 0 -0.2 0.9 l 3.3 1.7 c -0.4 0.1 -0.7 0.2 -1.1 0.2 c -2.7 0 -4.9 -1.9 -5.4 -4.5 c 0.5 -0.1 1 -0.3 1.5 -0.3 z m 10.1 6.5 h 0 c 0.2 0 0.5 0.1 0.7 0.1 c -0.4 1.5 -1.7 2.7 -3.3 2.7 c -0.1 0 -0.2 0 -0.2 0 l 1.6 -0.9 a 0.5 0.5 0 0 0 -0.2 -0.9 v 0 a 0.5 0.5 0 0 0 -0.3 0.1 l -1 0.6 c 0.6 -1 1.6 -1.6 2.8 -1.6 z M 9 18 h 14 v 2 H 9 v 0 H 9 V 18 z m 1.1 3 h 11.8 L 20.8 31 h -9.5 l -1.1 -10 z" class="plant__outline"/>
        </svg>
      </div>
      <div class="plant-item__main" v-else>
        keine Daten vorhanden
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

.plant {
  height: auto;
  margin: 2rem 0;
  width: 80%;
}
</style>
