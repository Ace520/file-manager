import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        owner: '',
        avatar_url:'',
        repo: '',
        path: '',
    },
    getters: {
        owner: () => {
            return Cookies.get('owner');
        },
        avatar_url: () => {
            return Cookies.get('avatar_url');
        },
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
export default store;