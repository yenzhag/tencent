import getlink from "@/api/getapi.js"
let aboutm = {
    state: {
        arr: []
    },
    mutations: {
        updata(state, payload) {
            state.arr = payload
        }
    },
    actions: {
        aboutlink(context) {
            getlink("/data/list/aboutm").then((ok) => {
                console.log(ok);
                context.commit("updata", ok.data.arr);
            })
        }
    }
}


export default aboutm