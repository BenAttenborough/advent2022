export const Day11 = {
  partOne: (input: string): number => {
    // console.log(input);
    const result = input
      .split("\n\n")
      .map((x) => x.split("\n").map((x) => x.trim()));
    // console.log(result);
    const x = convertInstructions(result[1]);
    console.log(x);
    return 0;
  },

  partTwo: (input: string): number => {
    return 0;
  },
};

type operator = "ADD" | "MULTIPLY" | "SQUARE";

type InstructionSet = {
  startingItems: number[];
  operation: {
    operator: operator;
    value: number;
  };
  divideByTest: number;
  trueMonkey: number;
  falseMonkey: number;
};

function convertInstructions(input: string[]): InstructionSet {
  const startingItems = input[1].slice(16).split(", ").map(Number);
  let operationOperator: operator;
  let operationValue;
  if (input[2].slice(23) === "old") {
    operationOperator = "SQUARE";
    operationValue = -1;
  } else if (input[2][21] == "+") {
    operationOperator = "ADD";
    operationValue = Number(input[2].slice(23));
  } else {
    operationOperator = "MULTIPLY";
    operationValue = Number(input[2].slice(23));
  }
  // console.log(
  //   `operationOperator: ${operationOperator}, operationValue: ${operationValue}`,
  // );
  const divideBy = Number(input[3].slice(19));
  const trueMonkey = Number(input[4].slice(25));
  const falseMonkey = Number(input[5].slice(26));
  return {
    startingItems: startingItems,
    operation: {
      operator: operationOperator,
      value: operationValue,
    },
    divideByTest: divideBy,
    trueMonkey: trueMonkey,
    falseMonkey: falseMonkey,
  };
}
