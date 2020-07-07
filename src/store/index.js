import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    songs: [
      { id: 0, author: 'Icona Pop', title: 'Still Don\'t Know', time: '3:16' },
      { id: 1, author: 'Icona Pop', title: 'I Love It', time: '2:35' },
      { id: 2, author: 'Icona Pop', title: 'Girlfriend', time: '2:50' },
      { id: 3, author: 'Icona Pop', title: 'We Got the World', time: '3:07' },
      { id: 4, author: 'Icona Pop', title: 'Nights Like This', time: '3:24' },
    ],
    currentId: 0
  },
  mutations: {
    id(state){
      return state.currentId
    }
  },
  actions: {},
  modules: {}
});
