import Vue from 'vue'
import App from './App.vue'

import { router } from './router.js';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

//EventHub nam sluzi kao listener za search-ovanje
//koristimo ga nad window objektom koji je dostupan u svakoj komponenti
//da smo hteli da ga pravimo ispocetka morali bi napraviti novi JS fajl i u njega instancirati vue...
window.EventHub = new Vue();
