import axios from 'axios'

export default {
  addItem ({ commit }, item) {
    commit('addItem', item)
  },
  populateItems ({ commit }) {
    axios.get('/api/v1/items')
      .then(data => {
        console.log(data)
        commit('populateItems', data)
      })
      .catch(err => console.error(err))
  }
}
