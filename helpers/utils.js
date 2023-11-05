export const Utils = {
    lines: (input) => {
        return input.split("\n");
    },
    arrayDivideInto: (input, divisor) => {
        let loopCount = Math.round(input.length / divisor);
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
    matrixTransform: (input) => {
        let reversedInput = input.reverse();
        let container = [];
        // console.log(reversedInput)
        for (let i = 0; i < reversedInput[0].length; ++i) {
            for (let j = 0; j < reversedInput.length; ++j) {
                container[i][j].push(reversedInput[i][j]);
            }
        }
        return container;
    }
};
//# sourceMappingURL=utils.js.map