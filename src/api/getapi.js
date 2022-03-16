//引用拦截器
import service from "@/util/service.js"
//使用promise封装
let getlink = (url, method = "get") => {
    return new Promise((resolve, reject) => {
        service.request({
            url,
            method
        }).then((ok) => {
            resolve(ok)
        }).catch((err) => {
            reject(err)
        })
    })
}

export default getlink