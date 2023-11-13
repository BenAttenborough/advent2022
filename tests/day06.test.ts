import { readFile } from "../src/helpers/io";
import { Day05, runInstruction, convertInstructions } from "../src/day05/main";

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

let input = "";
let readSuccess = false;
let error = "";

type result = {
  isSuccess: Boolean;
  value: String | null;
  error: String | null;
};

let inputResult: result = {
  isSuccess: false,
  value: null,
  error: null,
};

function getInput(): Promise<string> {
  return new Promise((resolve, reject) => {
    let readRead = readFile(__dirname + "/", "day05input.txt");
    readRead.then(
      (data: string) => {
        resolve(data);
      },
      (err: string) => {
        reject(err);
      },
    );
  });
}

beforeAll(async () => {
  try {
    let temp: string = await getInput();
    inputResult.isSuccess = true;
    inputResult.value = temp;
  } catch (err) {
    inputResult.isSuccess = false;
    let message;
    if (err instanceof Error) message = err.message;
    else message = String(error);
    inputResult.error = message;
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
  expect(Day05.partTwo(inputTest)).toBe(0);
});

test("runUnstruction", () => {
  expect(
    runInstruction([["Z", "N"], ["M", "C", "D"], ["P"]], {
      amount: 2,
      start: 1,
      end: 0,
    }),
  ).toEqual([["Z", "N", "D", "C"], ["M"], ["P"]]);
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
