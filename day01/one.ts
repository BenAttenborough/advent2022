const util = require("../helpers/io");

let result = util.readFile(__dirname, 'input.txt');
result.then(
    (data) => {
        let answer = main(data);
        console.log(answer);
    },
    (err) => {
        console.log(err);
    }
);

function main(input: string): number {
    let block: string[] = input.split("\n\n");
    let line: string[][] = block.map(x => x.split("\n"));
    let lineNumber: number[][] = line.map(
        x => x.map(y => { return parseInt(y) })
    );
    let answerList: number[] = lineNumber.map(
        x => x.reduce((prev, next) => {
            return prev + next;
        }, 0)
    )
    let answer: number = answerList.reduce((prev, next) => {
        if (next > prev) {
            return next;
        } else {
            return prev;
        }
    }, 0)

    console.log(`The answer is ${answer}`);

    let split = input
        .split("\n\n")

    let tline: number = split
        .map(x => x.split("\n"))
        .map(val => val.map(x => { return parseInt(x) }))
        .map(val => val.reduce((prev, next) => {
            return prev + next;
        }, 0))
        .reduce((prev, next) => {
            if (next > prev) {
                return next;
            } else {
                return prev;
            }
        }, 0)

    // .map(line => {
    //     line
    //         .split("\n")
    //     // .map(val => parseInt(val))
    //     // .reduce((prev, next) => {
    //     //     return prev + next;
    //     // }, 0)
    // })

    console.log(tline)

    // return calPerElf.map


    return 0;
}