import { Utils } from "../helpers/utils.js";
export const Day01 = {
    partOne: (input) => {
        return input
            .split("\n\n")
            .map(Utils.lines)
            .map(val => val.map(x => { return parseInt(x); }))
            .map(val => val.reduce((prev, next) => {
            return prev + next;
        }, 0))
            .reduce((prev, next) => {
            return (next > prev) ? next : prev;
        }, 0);
    },
    partTwo: (input) => {
        return input
            .split("\n\n")
            .map(x => x.split("\n"))
            .map(val => val.map(x => { return parseInt(x); }))
            .map(val => val.reduce((prev, next) => {
            return prev + next;
        }, 0))
            .sort((a, b) => b - a)
            .splice(0, 3)
            .reduce((prev, next) => {
            return prev + next;
        }, 0);
    }
};
//# sourceMappingURL=main.js.map