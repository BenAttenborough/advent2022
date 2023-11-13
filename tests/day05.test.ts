import * as IO from "../src/helpers/io.ts";
// import { Result } from "../src/helpers/io.ts";

import {
  Day05,
  runInstruction,
  runInstruction2,
  convertInstructions,
} from "../src/day05/main.ts";

const inputTest = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

const inputTest2 = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 33 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

let inputResult: IO.result = {
  isSuccess: false,
  value: "",
  error: null,
};

beforeAll(async () => {
  try {
    let temp: string = await IO.getInput(__dirname, "day05input.txt");
    inputResult = IO.success(temp);
  } catch (err) {
    inputResult = IO.failure(err);
  }
});

test("05-1", () => {
  if (inputResult.isSuccess) {
    expect(Day05.partOne(inputResult.value)).toBe("ZRLJGSCTR");
  } else {
    console.error(inputResult.error);
  }
});

test("05-2", () => {
  // expect(Day05.partTwo(inputTest)).toBe("MCD");

  if (inputResult.isSuccess) {
    expect(Day05.partTwo(inputResult.value)).toBe("PRTTGRFPB");
  } else {
    console.error(inputResult.error);
  }
});

test("runInstruction", () => {
  expect(
    runInstruction([["Z", "N"], ["M", "C", "D"], ["P"]], {
      amount: 2,
      start: 1,
      end: 0,
    }),
  ).toEqual([["Z", "N", "D", "C"], ["M"], ["P"]]);
});

test("runInstruction2", () => {
  expect(
    runInstruction2([["Z", "N"], ["M", "C", "D"], ["P"]], {
      amount: 2,
      start: 1,
      end: 0,
    }),
  ).toEqual([["Z", "N", "C", "D"], ["M"], ["P"]]);
});

test("convertInstructions", () => {
  expect(convertInstructions(["move 1 from 2 to 1"])).toEqual([
    {
      amount: 1,
      start: 1,
      end: 0,
    },
  ]);
});
