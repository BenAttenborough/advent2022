import { Utils } from "../helpers/utils.js";
export const Day05 = {
    partOne: (input) => {
        let splitParts = input.split("\n\n");
        let setup = splitParts[0].split("\n");
        setup.pop();
        let cargo = convertInputToCargo(setup);
        let instructionStrings = splitParts[1].split("\n");
        const instructions = convertInstructions(instructionStrings);
        console.log("Cargo: ", cargo);
        return 0;
    },
    partTwo: (input) => {
        return 0;
    }
};
// function runInstructionsOverCargo()
function convertInstructions(input) {
    return input.map(line => {
        return {
            amount: parseInt(line[5]),
            start: parseInt(line[12]) - 1,
            end: parseInt(line[17]) - 1
        };
    });
}
;
function convertInputToCargo(input) {
    let x = input
        .map(line => {
        line = line.concat(" ");
        let ins = Utils.stringDivideInto(line, 4);
        return ins
            .map(item => {
            item = item.trim();
            if (!item) {
                return "0";
            }
            else {
                return item[1];
            }
        });
    });
    let unfiltered = Utils.matrixRotateClockwise(x);
    return unfiltered.map(x => {
        return x.filter(value => value !== '0');
    });
}
//# sourceMappingURL=main.js.map