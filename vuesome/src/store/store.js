import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import authStore from './modules/authStore'
import store from './modules/store'

export default new Vuex.Store({
   modules: {
      authStore,
      store
   }
});