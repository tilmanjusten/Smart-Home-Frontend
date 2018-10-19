import store from '@/store'

export default {
  addItem (state, item) {
    state.items.push(item)
  },
  populateItems (state, data) {
    state.items = data

    store.dispatch('pupulateLatest')
  },
  populateDevices (state, data) {
    state.devices = data
  },
  setLatestItem (state, item) {
    state.latest = { ...state.latest, ...item }
    state.latestItemByDeviceId[item.deviceId] = { ...state.latestItemByDeviceId[item.deviceId], ...item }
  },
  setLightState (state, light) {
    state.lights[light.id].state = light.state
  },
  lastUpdatedLightsStateFromApi (state, status) {
    state.lastUpdatedLightsStateFromApi = status
  }
}
