export default {
  addItem (state, item) {
    state.items.push(item)
  },
  populateItems (state, data) {
    state.items = data
  },
  addDevice (state, device) {
    state.devices.push(device)
  },
  setLightState (state, light) {
    state.lights[light.id].state = light.state
  },
  lastUpdatedLightsStateFromApi (state, status) {
    state.lastUpdatedLightsStateFromApi = status
  }
}
