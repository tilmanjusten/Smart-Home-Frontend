import axios from 'axios'

const apiBaseUrl = process.env.NODE_ENV === 'production' ? 'http://raspi:3000' : 'http://localhost:3000'
const lightsApiBaseUrl = 'http://lichter.fritz.box'

export default {
  addItem ({ commit }, item) {
    commit('addItem', item)
  },
  populate ({ commit }) {
    axios.get(`${apiBaseUrl}/api/v1/items`)
      .then(data => {
        commit('populateItems', data.data)
      })
      .catch(err => console.error(err))

    axios.get(`${apiBaseUrl}/api/v1/devices`)
      .then(data => {
        commit('populateDevices', data.data)
      })
      .catch(err => console.error(err))
  },
  updateLightsStateFromApi ({ commit, getters }) {
    let requests = []

    getters.lights.forEach((light, lightIndex) => {
      const request = axios.get(`${lightsApiBaseUrl}/state/${light.name_id}`)
        .then(res => {
          if (res.data.hasOwnProperty('state')) {
            commit('setLightState', { id: lightIndex, state: res.data.state })
          }
        })

      requests.push(request)
    })

    Promise.all(requests).then(() => {
      commit('lastUpdatedLightsStateFromApi', true)
    })
  },
  switchLight ({ commit, getters }, data) {
    let action = `${getters.lightsApiBaseUrl}/switch/${data.name_id}/${data.state}`

    axios.get(action)
      .then(res => {
        if (res.data.hasOwnProperty('state')) {
          commit('setLightState', { id: getters.lightIndexByNameId(data.name_id), state: res.data.state })
        }
      })
      .catch(err => console.error(err))
  }
}
