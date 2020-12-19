import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/tailwind.css'
import Antd from 'ant-design-vue';
import VueLazyload from 'vue-lazyload'
import { Octokit } from "@octokit/rest";
import Cookies from "js-cookie";
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';

Vue.config.productionTip = false

Vue.prototype.octokit = new Octokit({
  auth: Cookies.get("token"),
});
Vue.component('overlay-scrollbars', OverlayScrollbarsComponent);
Vue.use(Antd);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
