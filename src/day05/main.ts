import { Utils } from "../helpers/utils.ts";

type instruction = {
  amount: number;
  start: number;
  end: number;
};

export const Day05 = {
  partOne: (input: string): string => {
    const splitParts = input.split("\n\n");
    const setup = splitParts[0].split("\n");
    setup.pop();
    const cargo = convertInputToCargo(setup);
    const instructionStrings: string[] = splitParts[1].split("\n");
    const instructions: instruction[] = convertInstructions(instructionStrings);
    // console.log("Cargo: ", cargo);
    // console.log("instructions: ", instructions);
    instructions.forEach((instruction) => {
      runInstruction(cargo, instruction);
    });
    let finalCargo = "";
    cargo.forEach((stack) => {
      let item = stack.pop();
      if (typeof item === "string") {
        finalCargo += item;
      }
    });
    return finalCargo;
  },

  partTwo: (input: string): number => {
    return 0;
  },
};

export function convertInstructions(input: string[]): instruction[] {
  return input.map((line) => {
    const elements = line.split(" ");
    return {
      amount: parseInt(elements[1]),
      start: parseInt(elements[3]) - 1,
      end: parseInt(elements[5]) - 1,
    };
  });
}

function convertInputToCargo(input: string[]): string[][] {
  const x = input.map((line) => {
    line = line.concat(" ");
    let ins = Utils.stringDivideInto(line, 4);
    return ins.map((item) => {
      item = item.trim();
      if (!item) {
        return "0";
      } else {
        return item[1];
      }
    });
  });
  const unfiltered = Utils.matrixRotateClockwise(x);
  return unfiltered.map((x) => {
    return x.filter((value) => value !== "0");
  });
}

export const runInstruction = (
  cargo: string[][],
  instruction: instruction,
): string[][] => {
  for (let i = 0; i < instruction.amount; ++i) {
    const temp: string | undefined = cargo[instruction.start].pop();
    if (typeof temp === "string") {
      cargo[instruction.end].push(temp);
    }
  }
  return cargo;
};
