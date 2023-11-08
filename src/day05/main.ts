import { Utils } from "../helpers/utils.js"

type instruction = {
    amount: number,
    start: number,
    end: number
}

export const Day05 = {
    partOne: (input: string): number => {
        let splitParts = input.split("\n\n");
        let setup = splitParts[0].split("\n");
        let instructionStrings: string[] = splitParts[1].split("\n");
        setup.pop();
        let cargo = convertInputToCargo(setup)

        // console.log(cargo);

        const instructions: instruction[] = instructionStrings.map(line => {
            return {
                amount: parseInt(line[5]),
                start: parseInt(line[12]),
                end: parseInt(line[17])
            }
        })


        return 0;
    },

    partTwo: (input: string): number => {
        return 0;
    }
}

function convertInputToCargo(input: string[]): string[][] {
    let x = input
        .map(line => {
            line = line.concat(" ");
            let ins = Utils.stringDivideInto(line, 4);
            return ins
                .map(item => {
                    item = item.trim();
                    if (!item) {
                        return "0"
                    } else {
                        return item[1];
                    }
                });
        })
    return Utils.matrixRotateClockwise(x);
}
