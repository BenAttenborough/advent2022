export const Utils = {
    lines: (input) => {
        return input.split("\n");
    },
    stringDivideInto: (input, divisor) => {
        let loopCount = Math.floor(input.length / divisor);
        let container = [];
        for (let i = 0; i < loopCount; ++i) {
            container.push(input.slice(divisor * i, (divisor * (i + 1))));
        }
        return container;
    },
    arrayDivideInto: (input, divisor) => {
        let loopCount = Math.floor(input.length / divisor);
        let container = [];
        for (let i = 0; i < loopCount; ++i) {
            container.push(input.splice(0, divisor));
        }
        return container;
    },
    // Takes two sets and returns elements common to both (in an array)
    arrayGetCommonElements: (set1, set2) => {
        let commonElements = [];
        set1.forEach(item => {
            if (set2.has(item)) {
                commonElements.push(item);
            }
        });
        return commonElements;
    },
    matrixRotateClockwise: (input) => {
        let reversedInput = input.reverse();
        let container = [];
        for (let i = 0; i < reversedInput.length; ++i) {
            container.push([]);
            for (let j = 0; j < reversedInput[0].length; ++j) {
                container[i].push(reversedInput[i][j]);
            }
        }
        return container;
    }
};
//# sourceMappingURL=utils.js.map