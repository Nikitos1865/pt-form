import Vue from 'vue'
import App from './App.vue'
import './assets/formulate.scss'


import VueFormulate from "@braid/vue-formulate";
import {ServerTable, ClientTable} from 'vue-tables-2-premium';

Vue.use(VueFormulate);

Vue.use(ClientTable, {}, false, 'bootstrap3');
Vue.use(ServerTable, {}, false, 'bootstrap3')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
