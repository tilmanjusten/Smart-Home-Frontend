export default {
  addItem (state, item) {
    state.items.push(item)
  },
  populateItems (state, data) {
    console.log('mutation.populateItems')
    console.log(data)
  }
}
