export default {
  addItem (state, item) {
    state.items.push(item)
  },
  populateItems (state, data) {
    state.items = data
  },
  populateDevices (state, data) {
    state.devices = data
  },
  setLightState (state, light) {
    state.lights[light.id].state = light.state
  },
  lastUpdatedLightsStateFromApi (state, status) {
    state.lastUpdatedLightsStateFromApi = status
  }
}
