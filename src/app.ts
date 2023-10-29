const util = require("../helpers/io");

const Day01 = require("./day01/one");
const day01 = new Day01();
const Day02 = require("./day02/two");
const day02 = new Day02();
const Day03 = require("./day03/three");
const day03 = new Day03();

let result = util.readFile(__dirname + "/day03/", "input.txt");
result.then(
  (data) => {

    console.log(day03.partTwo(data));
  },
  (err) => {
    console.log(err);
  }
);
