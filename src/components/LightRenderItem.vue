<template>
    <div :class="'light-item light-item--' + status">
        <a class="light-item__button" @click="toggle" :href="action">
          <div class="light-item__label">{{title}}</div>
          <svg class="light-item__icon" width="100px" height="100px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M68.543 48.957a23.356 23.356 0 0 0 4.375-13.543A22.852 22.852 0 0 0 50 12.496a22.852 22.852 0 0 0-22.918 22.918c0 5 1.668 9.793 4.375 13.543l.207.207c.418.625 1.043 1.25 1.457 1.875 2.918 3.543 8.543 11.25 8.543 17.707h16.668c0-6.457 5.625-14.168 8.543-17.707.625-.625 1.043-1.25 1.457-1.875 0 .004.211-.207.211-.207zM41.668 72.918h16.668v4.168H41.668zm0 8.332h16.668v4.168H41.668z"/>
          </svg>
        </a>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'light-render-item',
  props: [
    'title',
    'deviceId'
  ],
  data () {
    return {
      status: 'on',
      baseUrl: 'http://lichter.fritz.box'
    }
  },
  computed: {
    action () {
      let action = this.status === 'on' ? 'off' : 'on'

      return `${this.baseUrl}/switch/${this.deviceId}/${action}`
    }
  },
  methods: {
    toggle (event) {
      event.preventDefault()

      axios.get(this.action)
        .then(res => {
          let status = res.data.trim().toLowerCase()

          if (status === 'on' || status === 'off') {
            this.status = status
          } else {
            this.status = this.status === 'on' ? 'off' : 'on'
          }
        })
        .catch(err => console.error(err))
    }
  },
  mounted () {
    // get light state from ${this.baseUrl}/state/${this.deviceId}
  }
}
</script>

<style lang="scss">
.light-item {
  border: 1px solid #eee;
  border-width: 0 1px 1px 0;
  display: flex;
  flex: 0 0 calc((100% / 3) - 1px);
  height: calc(50vh - 1px);
  text-align: center;
}

.light-item--on {
}

.light-item--off {
}

.light-item__button {
  align-content: center;
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1 1 100%;
  flex-direction: column-reverse;
  font-weight: 700;
  justify-content: center;
  height: 100%;
  text-decoration: none;
}

.light-item__icon {
  display: block;
  margin-bottom: 1rem;

  path {
  }

  .light-item--on & {
    path {
      fill: #fff;
    }
  }

  .light-item--off & {
    path {
      stroke: transparent;
    }
  }
}
</style>
