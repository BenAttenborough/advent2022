import { readFile } from "./helpers/io.js";
import { Day01 } from "./day01/one.js";
import { Day02 } from "./day02/two.js";
import { Day03 } from "./day03/three.js";

import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

let result = readFile(__dirname + "/day03/", "input.txt");
result.then(
  (data) => {
    console.log("hello");
    console.log(Day03.partTwo(data));
  },
  (err) => {
    console.log(err);
  }
);
