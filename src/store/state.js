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
  devices: [],
  lightsApiBaseUrl: 'http://lichter.fritz.box',
  lastUpdatedLightsStateFromApi: false,
  lights: [{
    id: 0,
    name: 'Alle Lichter',
    name_id: 'alle-lichter',
    state: 'off',
    dependents: [
      'wohnzimmerlicht',
      'sofalicht',
      'lichterkette',
      'tuerlicht',
      'galerielicht'
    ]
  }, {
    id: 1,
    name: 'Wohnzimmerlicht',
    name_id: 'wohnzimmerlicht',
    state: 'off',
    dependents: [
      'sofalicht',
      'lichterkette'
    ]
  }, {
    id: 2,
    name: 'Sofa & Regal',
    name_id: 'sofalicht',
    state: 'off'
  }, {
    id: 3,
    name: 'Lichterkette',
    name_id: 'lichterkette',
    state: 'off'
  }, {
    id: 5,
    name: 'Galerielicht',
    name_id: 'galerielicht',
    state: 'off'
  }, {
    id: 4,
    name: 'Türlicht',
    name_id: 'tuerlicht',
    state: 'off'
  }]
}
