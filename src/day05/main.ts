import { Utils } from "../helpers/utils.ts";

type instruction = {
  amount: number;
  start: number;
  end: number;
};

export const Day05 = {
  partOne: (input: string): string => {
    return moveCargo(input, runInstruction);
  },

  partTwo: (input: string): string => {
    return moveCargo(input, runInstruction2);
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

export const runInstruction2 = (
  cargo: string[][],
  instruction: instruction,
): string[][] => {
  let negativeIndex: number = -Math.abs(instruction.amount);
  let liftedContainers: string[] =
    cargo[instruction.start].splice(negativeIndex);
  cargo[instruction.end] = cargo[instruction.end].concat(liftedContainers);
  return cargo;
};

const moveCargo = (
  input: string,
  instructionRunner: (
    cargo: string[][],
    instruction: instruction,
  ) => string[][],
) => {
  const splitParts = input.split("\n\n");
  const setup = splitParts[0].split("\n");
  setup.pop();
  const cargo = convertInputToCargo(setup);
  const instructionStrings: string[] = splitParts[1].split("\n");
  const instructions: instruction[] = convertInstructions(instructionStrings);
  instructions.forEach((instruction) => {
    instructionRunner(cargo, instruction);
  });
  let finalCargo = "";
  cargo.forEach((stack) => {
    let item = stack.pop();
    if (typeof item === "string") {
      finalCargo += item;
    }
  });
  return finalCargo;
};
