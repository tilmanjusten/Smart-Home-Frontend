export default {
  items: state => state.items,
  itemsByType: state => type => {
    return state.items.filter(item => item.type === type)
  },
  itemsByDeviceId: state => deviceId => {
    return state.items.filter(item => item.deviceId === deviceId)
  }
}
