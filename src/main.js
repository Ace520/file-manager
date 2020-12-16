import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import './assets/css/tailwind.css'
import { Octokit } from "@octokit/rest";
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';
import 'overlayscrollbars/css/OverlayScrollbars.css';
Vue.config.productionTip = false
Vue.component('overlay-scrollbars', OverlayScrollbarsComponent);

Vue.prototype.owner = 'Ace520'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    repo: '',
    path: '',
  },
  getters: {
    repo: (state) => {
      return state.repo
    },
    path: (state) => {
      return state.path
    }
  },
  mutations: {
    repo(state, val) {
      state.repo = val
    },
    path(state, val) {
      state.path = val
    }
  },
  actions: {
    repo({ commit }, val) {
      commit("repo", val)
    },
    path({ commit }, val) {
      commit("path", val)
    }
  }
})

Vue.prototype.octokit = new Octokit({
  auth: localStorage.getItem('token'),
});


router.beforeEach((to, from, next) => {
  let repo = to.params.repo;
  let path = to.params.pathMatch;
  if (repo == undefined) {
    repo = path;
    path = "";
  }
  store.commit('repo', repo)
  store.commit('path', path)
  next()
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
