const util = require("../helpers/io");

let result = util.readFile(__dirname, 'input.txt');
result.then(
    (data) => {
        let answer = two(data);
        console.log(answer);
    },
    (err) => {
        console.log(err);
    }
);

function one(input: string): number {
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

function two(input: string): number {
    return input
        .split("\n\n")
        .map(x => x.split("\n"))
        .map(val => val.map(x => { return parseInt(x) }))
        .map(val => val.reduce((prev, next) => {
            return prev + next;
        }, 0))
        .sort((a, b) => b - a)
        .splice(0, 3)
        .reduce((prev, next) => {
            return prev + next;
        }, 0)

}