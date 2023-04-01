"use strict";
exports.__esModule = true;
var app_1 = require("./app");
var hostname = "127.0.0.1";
var port = 5050;
app_1["default"].listen(port, hostname, function () {
    console.log("server is working");
    console.log("http://".concat(hostname, ":").concat(port, "/"));
});
