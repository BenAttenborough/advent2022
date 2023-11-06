export const Utils = {
    lines: (input: string): string[] => {
        return input.split("\n");
    },

    stringDivideInto: (input: string, divisor: number): string[] => {
        let loopCount = Math.floor(input.length / divisor);
        let container = [];
        for (let i = 0; i < loopCount; ++i) {
            container.push(input.slice(divisor * i, (divisor * (i + 1))));
        }
        return container
    },

    arrayDivideInto: (input: any[], divisor: number): any[] => {
        let loopCount = Math.floor(input.length / divisor);
        let container = [];
        for (let i = 0; i < loopCount; ++i) {
            container.push(input.splice(0, divisor));
        }
        return container
    },

    // Takes two sets and returns elements common to both (in an array)
    arrayGetCommonElements: <Type>(set1: Set<Type>, set2: Set<Type>): Type[] => {
        let commonElements = [];
        set1.forEach(item => {
            if (set2.has(item)) {
                commonElements.push(item);
            }
        });
        return commonElements;
    },

    matrixRotateClockwise: <Type>(input: Type[][]): Type[][] => {
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
}
