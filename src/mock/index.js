let Mock = require("mockjs")

//请求XXX拿到XXX
Mock.mock("/data/list/choicem", "get", require("./data/data.json"))
Mock.mock("/data/list/findm", "get", require("./data/find.json"))
Mock.mock("/data/list/aboutm", "get", require("./data/about.json"))
Mock.mock("/data/list/vipm", "get", require("./data/vip.json"))
Mock.mock("/data/list/selfm", "get", require("./data/self.json"))
Mock.mock("/data/list/lifem", "get", require("./data/life.json"))
Mock.mock("/data/list/moviem", "get", require("./data/movie.json"))