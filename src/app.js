const util = require("../helpers/io");
const Day01 = require("./day01/one");
const day01 = new Day01();
const Day02 = require("./day02/two");
const day02 = new Day02();
const Day03 = require("./day03/three");
const day03 = new Day03();
const Day04 = require("./day04/four");
const day04 = new Day04();
let result = util.readFile(__dirname + "/day04/", "testinput.txt");
result.then((data) => {
    console.log(day04.partOne(data));
}, (err) => {
    console.log(err);
});
//# sourceMappingURL=app.js.map