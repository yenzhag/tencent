import Vue from 'vue'
import Vuex from 'vuex'
import choicem from "./modules/choicem.js"
import findm from "./modules/findm.js"
import aboutm from "./modules/aboutm.js"
import vipm from "./modules/vipm.js"
import selfm from "./modules/selfm.js"
import lifem from "./modules/lifem.js"
import moviem from "./modules/moviem.js"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        choicem,
        findm,
        aboutm,
        vipm,
        selfm,
        lifem,
        moviem
    }
})