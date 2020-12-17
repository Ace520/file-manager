import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        repo: '',
        path: ''
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
export default store;