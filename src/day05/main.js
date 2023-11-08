import { Utils } from "../helpers/utils.js";
export const Day05 = {
    partOne: (input) => {
        let splitParts = input.split("\n\n");
        let setup = splitParts[0].split("\n");
        let instructionStrings = splitParts[1].split("\n");
        setup.pop();
        let cargo = convertInputToCargo(setup);
        // console.log(cargo);
        const instructions = instructionStrings.map(line => {
            return {
                amount: parseInt(line[5]),
                start: parseInt(line[12]),
                end: parseInt(line[17])
            };
        });
        return 0;
    },
    partTwo: (input) => {
        return 0;
    }
};
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
    return Utils.matrixRotateClockwise(x);
}
//# sourceMappingURL=main.js.map