import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import store from './store'
import './assets/css/tailwind.css'
import { Octokit } from "@octokit/rest";
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';
import VModal from 'vue-js-modal'
Vue.use(VModal)

Vue.config.productionTip = false
Vue.component('overlay-scrollbars', OverlayScrollbarsComponent);

Vue.use(Vuex)

Vue.prototype.owner = 'Ace520'

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