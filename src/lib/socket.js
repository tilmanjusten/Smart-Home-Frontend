import io from 'socket.io-client'
import store from '@/store'

const socket = io('localhost:3000')

socket.on('update', data => {
  store.dispatch('addItem', data)
})

export default () => {

}
