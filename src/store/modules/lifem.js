import getlink from "@/api/getapi.js"
let lifem = {
    state: {
        arr: []
    },
    mutations: {
        updata(state, payload) {
            state.arr = payload
        },
        updata1(state, payload) {
            state.arr1 = payload
        }
    },
    actions: {
        lifelink(context) {
            getlink("/data/list/lifem").then((ok) => {
                console.log(ok);
                context.commit("updata", ok.data.arr)
                context.commit("updata1", ok.data.arr1)
            })
        }
    }
}

export default lifem