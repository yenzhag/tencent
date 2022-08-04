import getlink from "@/api/getapi.js"
let moviem = {
    state: {
        arr: []
    },
    mutations: {
        updata(state, payload) {
            state.arr = payload
        },
        updata1(state, payload) {
            state.arr1 = payload
        },
        updata2(state, payload) {
            state.arr2 = payload
        },
        updata3(state, payload) {
            state.arr3 = payload
        },
        updata4(state, payload) {
            state.arr4 = payload
        }
    },
    actions: {
        movielink(context) {
            getlink("/data/list/moviem").then((ok) => {
                console.log(ok);
                context.commit("updata", ok.data.arr);
                context.commit("updata1", ok.data.arr1);
                context.commit("updata2", ok.data.arr2);
                context.commit("updata3", ok.data.arr3);
                context.commit("updata4", ok.data.arr4);
            })
        }
    }

}

export default moviem