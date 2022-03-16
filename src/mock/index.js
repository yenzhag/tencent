let Mock = require("mockjs")

//请求XXX拿到XXX
Mock.mock("/data/list/choicem", "get", require("./data/data.json"))
Mock.mock("/data/list/findm", "get", require("./data/find.json"))
Mock.mock("/data/list/aboutm", "get", require("./data/about.json"))