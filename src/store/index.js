import Vue from 'vue'
import Vuex from 'vuex'
import choicem from "./modules/choicem.js"
import findm from "./modules/findm.js"
import aboutm from "./modules/aboutm.js"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        choicem,
        findm,
        aboutm
    }
})