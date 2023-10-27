const util = require("../helpers/io");
let result = util.readFile(__dirname, 'input.txt');
result.then((data) => {
    let answer = main(data);
    console.log(answer);
}, (err) => {
    console.log(err);
});
function main(input) {
    let block = input.split("\n\n");
    let line = block.map(x => x.split("\n"));
    let lineNumber = line.map(x => x.map(y => { return parseInt(y); }));
    let answerList = lineNumber.map(x => x.reduce((prev, next) => {
        return prev + next;
    }, 0));
    let answer = answerList.reduce((prev, next) => {
        if (next > prev) {
            return next;
        }
        else {
            return prev;
        }
    }, 0);
    console.log(`The answer is ${answer}`);
    let split = input
        .split("\n\n");
    let tline = split
        .map(x => x.split("\n"))
        .map(val => val.map(x => { return parseInt(x); }))
        .map(val => val.reduce((prev, next) => {
        return prev + next;
    }, 0))
        .reduce((prev, next) => {
        if (next > prev) {
            return next;
        }
        else {
            return prev;
        }
    }, 0);
    // .map(line => {
    //     line
    //         .split("\n")
    //     // .map(val => parseInt(val))
    //     // .reduce((prev, next) => {
    //     //     return prev + next;
    //     // }, 0)
    // })
    console.log(tline);
    // return calPerElf.map
    return 0;
}
//# sourceMappingURL=one.js.map