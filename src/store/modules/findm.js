import getlink from "@/api/getapi.js"
let findm = {
    state: {
        arr: []
    },
    mutations: {
        updata(state, payload) {
            state.arr = payload
        }
    },
    actions: {
        findlink(context) {
            getlink("/data/list/findm").then((ok) => {
                console.log(ok);
                context.commit("updata", ok.data.arr)
            })
        }
    }
}


export default findm