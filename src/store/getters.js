export default {
  items: state => state.items,
  itemsByType: state => type => {
    return state.items.filter(item => item.type === type)
  },
  itemsByDeviceId: state => deviceId => {
    return state.items.filter(item => item.origin.deviceId === deviceId)
  },
  latestItem: state => {
    return state.latestItem
  },
  latestItemByDeviceId: state => deviceId => {
    return state.latestItemByDeviceId[deviceId]
  },
  lastUpdatedLightsStateFromApi: state => state.lastUpdatedLightsStateFromApi,
  lights: state => state.lights,
  lightById: state => id => state.lights.filter(light => light.id === id),
  lightsActive: state => state.lights.filter(light => light.state === 'on'),
  lightsInActive: state => state.lights.filter(light => light.state === 'off')
}
