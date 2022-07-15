import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './index.css';
import './plagins/bootstrap/index'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import * as serviceWorker from './serviceWorker';
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000',
  vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
  },
}))

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

serviceWorker.unregister();