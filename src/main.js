import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/css/set.css"
import "../public/download/font_3247002_plx0e8qufs/iconfont.css"

require("./mock")
import Bb from "@/components/bottombar.vue"
Vue.component("Bb", Bb)
import Sc from "@/components/search.vue"
Vue.component("Sc", Sc)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')