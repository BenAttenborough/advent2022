"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var io_js_1 = require("./helpers/io.js");
var main_js_1 = require("./day03/main.js");
// const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
var result = (0, io_js_1.readFile)(__dirname + "/day03/", "input.txt");
result.then(function (data) {
    console.log(main_js_1.Day03.partTwo(data));
}, function (err) {
    console.log(err);
});
