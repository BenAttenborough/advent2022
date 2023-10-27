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
    return input
        .split("\n\n")
        .map(x => x.split("\n"))
        .map(val => val.map(x => { return parseInt(x) }))
        .map(val => val.reduce((prev, next) => {
            return prev + next;
        }, 0))
        .reduce((prev, next) => {
            return (next > prev) ? next : prev
        }, 0)
}