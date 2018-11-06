export default {
  items: [],
  devices: [],
  socketUrl: 'raspberrypi:3000',
  // weatherApiBaseUrl: process.env.NODE_ENV === 'production' ? 'http://raspberrypi:3000' : 'http://localhost:3000',
  weatherApiBaseUrl: 'http://raspberrypi:3000',
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
      'tischregal',
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
    id: 4,
    name: 'Tischregal',
    name_id: 'tischregal',
    state: 'off'
  }, {
    id: 5,
    name: 'Galerielicht',
    name_id: 'galerielicht',
    state: 'off'
  }]
}
