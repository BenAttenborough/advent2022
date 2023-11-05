module.exports = class Day04 {
    partOne(input) {
        return input
            .split("\n")
            .map(line => {
            return line
                .split(",")
                .map(part => splitValues(part));
        })
            .map(rangeEnclosedByAnother())
            .reduce((prev, next) => prev + next, 0);
    }
    partTwo(input) {
        return input
            .split("\n")
            .map(line => {
            return line
                .split(",")
                .map(part => splitValues(part));
        })
            .map(rangesOverlap())
            .reduce((prev, next) => prev + next, 0);
    }
};
function rangesOverlap() {
    return function (range) {
        if ((range[0].start >= range[1].start && range[0].start <= range[1].end) ||
            (range[1].start >= range[0].start && range[1].start <= range[0].end)) {
            return 1;
        }
        else {
            return 0;
        }
    };
}
function rangeEnclosedByAnother() {
    return function (range) {
        if ((range[0].start >= range[1].start && range[0].end <= range[1].end) ||
            (range[1].start >= range[0].start && range[1].end <= range[0].end)) {
            return 1;
        }
        else {
            return 0;
        }
    };
}
function splitValues(values) {
    let splitValues = values
        .split("-");
    return {
        start: parseInt(splitValues[0]),
        end: parseInt(splitValues[1])
    };
}
export {};
//# sourceMappingURL=main.js.map