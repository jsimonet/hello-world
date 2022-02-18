import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false;

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    pseudo: ""
  },
  mutations: {
    setPseudo (state, pseudo) {
      console.error("setting pseudo", pseudo)
      state.pseudo = pseudo
    }
  }
});

new Vue({
  render: h => h(App),
  store
}).$mount('#app');
