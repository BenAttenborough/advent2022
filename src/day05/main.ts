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
        setup.pop();
        let cargo = convertInputToCargo(setup)
        let instructionStrings: string[] = splitParts[1].split("\n");
        const instructions: instruction[] = convertInstructions(instructionStrings);
        console.log("Cargo: ", cargo)
        return 0;
    },

    partTwo: (input: string): number => {
        return 0;
    }
}

// function runInstructionsOverCargo()

function convertInstructions(input: string[]): instruction[] {
    return input.map(line => {
        return {
            amount: parseInt(line[5]),
            start: parseInt(line[12]) - 1,
            end: parseInt(line[17]) - 1
        }
    })
};

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
    let unfiltered = Utils.matrixRotateClockwise(x);
    return unfiltered.map(x => {
        return x.filter(value => value !== '0')
    })
}
