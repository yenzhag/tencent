import getlink from "@/api/getapi.js"
let choicem = {
    state: {
        arr: [],
        arr1: []
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
        choicelink(context) {
            //异步触发器
            getlink("/data/list/choicem").then((ok) => {
                console.log(ok);
                context.commit("updata", ok.data.arr);
                context.commit("updata1", ok.data.arr1)
            })
        }
    },
}

export default choicem