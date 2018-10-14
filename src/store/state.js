const item = {
  date: null,
  te: null,
  hu: null,
  deviceId: null,
  type: null,
  mo: null
}

export default {
  items: [],
  latestItem: { ...item },
  latestItemByDeviceId: {
    'INKE': { ...item },
    'PURL': { ...item },
    'ODIN': { ...item }
  },
  devices: []
}
