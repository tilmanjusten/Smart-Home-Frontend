import * as defaults from '@/lib/defaults'

export default {
  items: state => state.items,
  itemsByType: state => type => {
    return state.items.filter(item => item.type === type)
  },
  itemsByDeviceId: state => deviceId => {
    return state.items.filter(item => item.origin.deviceId === deviceId)
  },
  latestItemByDeviceId: state => (deviceId, property = null) => {
    const reversedItems = [...state.items].reverse()
    let item

    if (property === null) {
      item = reversedItems.find(item => item.deviceId === deviceId)
    } else {
      item = reversedItems.find(item => item.deviceId === deviceId && item.hasOwnProperty(property) && item[property] !== null)
    }

    if (!item) {
      return defaults.item
    }

    return item
  },
  lightsApiBaseUrl: state => state.lightsApiBaseUrl,
  lastUpdatedLightsStateFromApi: state => state.lastUpdatedLightsStateFromApi,
  lights: state => state.lights,
  lightById: state => id => state.lights.filter(light => light.id === id),
  lightsActive: state => state.lights.filter(light => light.state === 'on'),
  lightsInActive: state => state.lights.filter(light => light.state === 'off'),
  lightIndexByNameId: state => nameId => state.lights.findIndex(light => light.name_id === nameId)
}
