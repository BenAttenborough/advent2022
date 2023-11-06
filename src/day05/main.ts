import { Utils } from "../helpers/utils.js"

export const Day05 = {
    partOne: (input: string): number => {
        let splitParts = input.split("\n\n");
        let setup = splitParts[0].split("\n");
        let instructions = splitParts[1].split("\n");
        // console.log(setup);
        // console.log(instructions);
        let setupIndexes = setup[setup.length - 1]
        // console.log(setupIndexes);
        let setupLength = parseInt(setupIndexes[setupIndexes.length - 2]);
        // console.log(setupLength);
        setup.pop();
        console.log(setup);
        let x = setup
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
            });


        console.log(x);


        console.log(Utils.matrixRotateClockwise(x.reverse()));


        return 0;
    },

    partTwo: (input: string): number => {
        return 0;
    }
}