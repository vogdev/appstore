import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apps: [],
    galleries: [],
    curentApp: {}
  },

  getters: {
    getApps: state => {
      return state.apps;
    },
    getGalleries: state => {
      return state.galleries;
    },
    getShowPageApps: state => {
      return state.apps.slice(5,17);
    },
    getCurentApp: state => {
      return state.curentApp;
    },
  },

  mutations: {
    mutationSetApps(state,payload){
        state.apps = payload;
    },
    mutationSetGalleries(state,payload){
      state.galleries = payload;
    },
    mutationSetCurrentApp(state,payload){
      state.curentApp = payload;
    }
  },

  actions: {

    actionSetApps({ commit }){
      axios.get('http://0.0.0.0:8000/api/apps')
      .then(response => {
        commit('mutationSetApps',response.data)
      });
    },

    actionSetGalleries({ commit }){
      axios.get('http://0.0.0.0:8000/api/galleries')
      .then(response => {
        commit('mutationSetGalleries',response.data)
      });
    },
    actionFetchAppInfo({ commit },payload){
      axios.get(`http://0.0.0.0:8000/api/show/${payload}`)
      .then(response => {
        commit('mutationSetCurrentApp',response.data)
      });
    }
  }
})
