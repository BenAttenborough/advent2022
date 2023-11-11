import { readFile } from "./helpers/io.js";
import { Day03 } from "./day03/main.js";
let result = readFile(__dirname + "/day03/", "input.txt");
result.then((data) => {
    console.log(Day03.partTwo(data));
}, (err) => {
    console.log(err);
});
//# sourceMappingURL=app.js.map