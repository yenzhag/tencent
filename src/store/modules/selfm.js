import getlink from "@/api/getapi.js"
let selfm = {
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
        }
    },
    actions: {
        selflink(context) {
            getlink("/data/list/selfm").then((ok) => {
                console.log(ok);
                context.commit("updata", ok.data.arr);
                context.commit("updata1", ok.data.arr1);
                context.commit("updata2", ok.data.arr2);
                context.commit("updata3", ok.data.arr3);

            })
        }
    }
}


export default selfm