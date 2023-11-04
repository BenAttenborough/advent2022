import { readFile } from "../helpers/io.js";
import { Day01 } from "./day01/one.js";
const day01 = new Day01();
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
let result = readFile(__dirname + "/day01/", "input.txt");
result.then((data) => {
    console.log(day01.partOne(data));
}, (err) => {
    console.log(err);
});
//# sourceMappingURL=app.js.map