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
      <div class="climate-item__dials">
        <div class="climate-item__thermometer">
          <div class="climate-item__thermometer-display" :style="{transform: `scaleY(${temperatureDisplay})`}"></div>
        </div>
        <div class="climate-item__hygrometer">

        </div>
      </div>
      <div class="climate-item__dial">

        <svg class="climate-dial" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="180" height="260" viewBox="190 40 180 260">
            <defs>
                <path id="a" d="M280 50c5.53 0 10 4.48 10 10v200c0 5.52-4.47 10-10 10-2 0 2 0 0 0-5.52 0-10-4.48-10-10V60c0-5.52 4.48-10 10-10 2 0-2 0 0 0z"/>
                <mask id="e" width="32" height="232" x="264" y="44" maskUnits="userSpaceOnUse">
                    <path fill="#fff" d="M264 44h32v232h-32z"/>
                    <use xlink:href="#a"/>
                </mask>
                <path id="b" d="M300 270c0 11.04-8.96 20-20 20-11.03 0-20-8.96-20-20s8.97-20 20-20c11.04 0 20 8.96 20 20z"/>
                <mask id="f" width="52" height="52" x="254" y="244" maskUnits="userSpaceOnUse">
                    <path fill="#fff" d="M254 244h52v52h-52z"/>
                    <use xlink:href="#b"/>
                </mask>
                <path id="c" d="M280 50c-5.53 0-10 4.48-10 10v200c0 5.52 4.47 10 10 10h.28c2.61 0 4.72-2.12 4.72-4.72V53.08c0-1.7-1.38-3.08-3.08-3.08H280z"/>
                <mask id="g" width="20" height="220" x="270" y="50" maskUnits="userSpaceOnUse">
                    <path fill="#fff" d="M270 50h20v220h-20z"/>
                    <use xlink:href="#c"/>
                </mask>
                <path id="h" d="M300 270c0 11.04-8.96 20-20 20s-20-8.96-20-20 8.96-20 20-20 20 8.96 20 20z"/>
                <path id="i" d="M300 270c0 11.04-8.96 20-20 20-11.03 0-10-8.96-10-20s-1.03-20 10-20c11.04 0 20 8.96 20 20z"/>
                <path id="d" d="M280 50c5.53 0 10 4.48 10 10v200c0 5.52-4.47 10-10 10h-.28c-2.61 0-4.72-2.12-4.72-4.72V53.08c0-1.7 1.38-3.08 3.08-3.08H280z"/>
                <mask id="j" width="15.01" height="220" x="275" y="50" maskUnits="userSpaceOnUse">
                    <path fill="#fff" d="M275 50h15.01v220H275z"/>
                    <use xlink:href="#d"/>
                </mask>
                <path id="k" d="M300 230h15v2h-15v-2z"/>
                <path id="l" d="M300 190h15v2h-15v-2z"/>
                <path id="m" d="M300 150h15v2h-15v-2z"/>
                <path id="n" d="M300 70h15v2h-15v-2z"/>
                <path id="o" d="M300 110h15v2h-15v-2z"/>
                <path id="p" d="M250 230h10v2h-10v-2z"/>
                <path id="q" d="M250 190h10v2h-10v-2z"/>
                <path id="r" d="M250 150h10v2h-10v-2z"/>
                <path id="s" d="M250 70h10v2h-10v-2z"/>
                <path id="t" d="M250 110h10v2h-10v-2z"/>
                <path id="u" d="M253 210h7v2h-7v-2z"/>
                <path id="v" d="M253 170h7v2h-7v-2z"/>
                <path id="w" d="M253 132h7v-2h-7v2z"/>
                <path id="x" d="M253 90h7v2h-7v-2z"/>
                <path id="y" d="M255 181h5v-1h-5v1z"/>
                <path id="z" d="M255 161h5v-1h-5v1z"/>
                <path id="A" d="M255 221h5v-1h-5v1z"/>
                <path id="B" d="M255 201h5v-1h-5v1z"/>
                <path id="C" d="M255 101h5v-1h-5v1z"/>
                <path id="D" d="M255 81h5v-1h-5v1z"/>
                <path id="E" d="M255 141h5v-1h-5v1z"/>
                <path id="F" d="M255 121h5v-1h-5v1z"/>
                <path id="G" d="M255 241h5v-1h-5v1z"/>
                <path id="H" d="M300 91h7v-1h-7v1z"/>
                <path id="I" d="M300 131h7v-1h-7v1z"/>
                <path id="J" d="M300 170h7v1h-7v-1z"/>
                <path id="K" d="M300 211h7v-1h-7v1z"/>
                <path id="L" d="M300 201h5v-1h-5v1z"/>
                <path id="M" d="M300 220h5v1h-5v-1z"/>
                <path id="N" d="M300 241h5v-1h-5v1z"/>
                <path id="O" d="M300 160h5v1h-5v-1z"/>
                <path id="P" d="M300 181h5v-1h-5v1z"/>
                <path id="Q" d="M300 120h5v1h-5v-1z"/>
                <path id="R" d="M300 141h5v-1h-5v1z"/>
                <path id="S" d="M300 80h5v1h-5v-1z"/>
                <path id="T" d="M300 101h5v-1h-5v1z"/>
                <path id="U" d="M300 60h5v1h-5v-1z"/>
                <path id="V" d="M255 61h5v-1h-5v1z"/>
                <text id="W" x="355.9" y="70" alignment-baseline="before-edge" dominant-baseline="text-before-edge" font-family="Open Sans Condensed" font-size="12" font-style="normal" font-weight="700" letter-spacing="0" style="line-height:100%" transform="translate(-10.9 -8)" xml:space="preserve">
                    <tspan x="355.9" alignment-baseline="before-edge" dy="0em" text-anchor="end">40°C</tspan>
                </text>
                <text id="X" x="355.9" y="70" alignment-baseline="before-edge" dominant-baseline="text-before-edge" font-family="Open Sans Condensed" font-size="12" font-style="normal" font-weight="700" letter-spacing="0" style="line-height:100%" transform="translate(-10.9 32)" xml:space="preserve">
                    <tspan x="355.9" alignment-baseline="before-edge" dy="0em" text-anchor="end">30°C</tspan>
                </text>
                <text id="Y" x="355.9" y="70" alignment-baseline="before-edge" dominant-baseline="text-before-edge" font-family="Open Sans Condensed" font-size="12" font-style="normal" font-weight="700" letter-spacing="0" style="line-height:100%" transform="translate(-10.9 72)" xml:space="preserve">
                    <tspan x="355.9" alignment-baseline="before-edge" dy="0em" text-anchor="end">20°C</tspan>
                </text>
                <text id="Z" x="355.9" y="70" alignment-baseline="before-edge" dominant-baseline="text-before-edge" font-family="Open Sans Condensed" font-size="12" font-style="normal" font-weight="700" letter-spacing="0" style="line-height:100%" transform="translate(-10.9 112)" xml:space="preserve">
                    <tspan x="355.9" alignment-baseline="before-edge" dy="0em" text-anchor="end">10°C</tspan>
                </text>
                <text id="aa" x="355.9" y="70" alignment-baseline="before-edge" dominant-baseline="text-before-edge" font-family="Open Sans Condensed" font-size="12" font-style="normal" font-weight="700" letter-spacing="0" style="line-height:100%" transform="translate(-10.9 152)" xml:space="preserve">
                    <tspan x="355.9" alignment-baseline="before-edge" dy="0em" text-anchor="end">0°C</tspan>
                </text>
                <text id="ab" x="325.9" y="70" alignment-baseline="before-edge" dominant-baseline="text-before-edge" font-family="Open Sans Condensed" font-size="10" font-style="normal" font-weight="700" letter-spacing="0" style="line-height:100%" transform="translate(-100.9 -6)" xml:space="preserve">
                    <tspan x="325.9" alignment-baseline="before-edge" dy="0em">90%</tspan>
                </text>
                <text id="ac" x="325.9" y="70" alignment-baseline="before-edge" dominant-baseline="text-before-edge" font-family="Open Sans Condensed" font-size="10" font-style="normal" font-weight="700" letter-spacing="0" style="line-height:100%" transform="translate(-100.9 34)" xml:space="preserve">
                    <tspan x="325.9" alignment-baseline="before-edge" dy="0em">70%</tspan>
                </text>
                <text id="ad" x="325.9" y="70" alignment-baseline="before-edge" dominant-baseline="text-before-edge" font-family="Open Sans Condensed" font-size="10" font-style="normal" font-weight="700" letter-spacing="0" style="line-height:100%" transform="translate(-100.9 74)" xml:space="preserve">
                    <tspan x="325.9" alignment-baseline="before-edge" dy="0em">50%</tspan>
                </text>
                <text id="ae" x="325.9" y="70" alignment-baseline="before-edge" dominant-baseline="text-before-edge" font-family="Open Sans Condensed" font-size="10" font-style="normal" font-weight="700" letter-spacing="0" style="line-height:100%" transform="translate(-100.9 114)" xml:space="preserve">
                    <tspan x="325.9" alignment-baseline="before-edge" dy="0em">30%</tspan>
                </text>
                <text id="af" x="325.9" y="70" alignment-baseline="before-edge" dominant-baseline="text-before-edge" font-family="Open Sans Condensed" font-size="10" font-style="normal" font-weight="700" letter-spacing="0" style="line-height:100%" transform="translate(-100.9 154)" xml:space="preserve">
                    <tspan x="325.9" alignment-baseline="before-edge" dy="0em">10%</tspan>
                </text>
            </defs>
            <use fill="#fff" xlink:href="#a"/>
            <g mask="url(#e)">
                <use fill-opacity="0" stroke="#000" stroke-width="6" xlink:href="#a"/>
            </g>
            <use fill="#fff" xlink:href="#b"/>
            <g mask="url(#f)">
                <use fill-opacity="0" stroke="#000" stroke-width="6" xlink:href="#b"/>
            </g>
            <use fill="#0081ea" class="climate-dial__scale-humidity" :style="{transform: `scaleY(${humidityScale})`}" xlink:href="#c"/>
            <g mask="url(#g)">
                <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#c"/>
            </g>
            <use fill="#0081ea" class="climate-dial__base-humidity" xlink:href="#h"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#h"/>
            <use fill="#ea0000" class="climate-dial__base-temperature" xlink:href="#i"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#i"/>
            <use fill="#ea0000" class="climate-dial__scale-temperature" :style="{transform: `scaleY(${temperatureScale})`}" xlink:href="#d"/>
            <g mask="url(#j)">
                <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#d"/>
            </g>
            <use xlink:href="#k"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#k"/>
            <use xlink:href="#l"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#l"/>
            <use xlink:href="#m"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#m"/>
            <use xlink:href="#n"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#n"/>
            <use xlink:href="#o"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#o"/>
            <use xlink:href="#p"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#p"/>
            <use xlink:href="#q"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#q"/>
            <use xlink:href="#r"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#r"/>
            <use xlink:href="#s"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#s"/>
            <use xlink:href="#t"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#t"/>
            <use xlink:href="#u"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#u"/>
            <use xlink:href="#v"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#v"/>
            <use xlink:href="#w"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#w"/>
            <use xlink:href="#x"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#x"/>
            <use xlink:href="#y"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#y"/>
            <use xlink:href="#z"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#z"/>
            <use xlink:href="#A"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#A"/>
            <use xlink:href="#B"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#B"/>
            <use xlink:href="#C"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#C"/>
            <use xlink:href="#D"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#D"/>
            <use xlink:href="#E"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#E"/>
            <use xlink:href="#F"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#F"/>
            <use fill-opacity="0" stroke="#000" xlink:href="#gKJe80UTr"/>
            <use xlink:href="#G"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#G"/>
            <use xlink:href="#H"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#H"/>
            <use xlink:href="#I"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#I"/>
            <use xlink:href="#J"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#J"/>
            <use xlink:href="#K"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#K"/>
            <use xlink:href="#L"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#L"/>
            <use xlink:href="#M"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#M"/>
            <use xlink:href="#N"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#N"/>
            <use xlink:href="#O"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#O"/>
            <use xlink:href="#P"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#P"/>
            <use xlink:href="#Q"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#Q"/>
            <use xlink:href="#R"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#R"/>
            <use xlink:href="#S"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#S"/>
            <use xlink:href="#T"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#T"/>
            <use xlink:href="#U"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#U"/>
            <use xlink:href="#V"/>
            <use fill-opacity="0" stroke="#000" stroke-width="0" xlink:href="#V"/>
            <use xlink:href="#W"/>
            <use fill-opacity="0" stroke="#000" xlink:href="#c1LpQcpfnI"/>
            <use xlink:href="#X"/>
            <use xlink:href="#Y"/>
            <use xlink:href="#Z"/>
            <use xlink:href="#aa"/>
            <use xlink:href="#ab"/>
            <use xlink:href="#ac"/>
            <use xlink:href="#ad"/>
            <g>
                <use xlink:href="#ae"/>
            </g>
            <g>
                <use xlink:href="#af"/>
            </g>
        </svg>

      </div>
    </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'climate-render-item',
  props: [
    'title',
    'deviceId'
  ],
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
  },
  created () {
    // get initial state
    // axios
    //   .get(`http://localhost:3000/api/v1/items/${this.deviceId}/latest`)
    //   .then(res => {
    //     let origin = res.data.origin

    //     this.humidity = origin.hu
    //     this.temperature = origin.te
    //     this.date = new Date(res.date)
    //   })
    //   .catch(err => console.error(err))
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

.climate-item__dials {
  flex: 1 1 auto;
  align-items: stretch;
  align-self: flex-end;
  display: none;
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
  // inherit in child elements
  color: rgb(225, 0, 0);

  &::before,
  &::after {
    background: #fff;
    border: 3px solid #333;
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
  }

  &::before {
    width: 20px;
    border-radius: 13px 13px 0 0;
    border-bottom-width: 0;
    top: 5vh;
    height: 35vh;
    z-index: 2;
  }

  &::after {
    background: currentColor;
    width: 40px;
    border-radius: 50%;
    top: calc(40vh - 3px);
    height: 40px;
    z-index: 1;
  }
}

.climate-item__thermometer-display {
  position: absolute;
  bottom: calc(20vh - 3px);
  width: 20px;
  background: currentColor;
  height: calc(100% - 5vh - 20vh - 10px);
  border-radius: 1px 1px 0 0;
  z-index: 3;
  left: 0;
  right: 0;
  margin: auto;
  transition: transform 2s 0s ease-out;
  transform: scaleY(0);
  transform-origin: bottom;
}

.climate-dial__scale-humidity,
.climate-dial__scale-temperature {
  transition: transform 2s 0s ease-out;
  transform: scaleY(0.5);
  transform-origin: bottom;
}
</style>
