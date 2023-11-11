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

function getInput() {
  return new Promise((resolve, reject) => {
    let result = readFile(__dirname + "/", "day05input.txt");
    result.then(
      (data) => {
        resolve(data);
      },
      (err) => {
        reject(`ERROR: ${err}`);
      },
    );
  });
}

async function asyncGetInput() {
  return await getInput();
}

beforeAll(async () => {
  input = await asyncGetInput();
});

test("05-1", () => {
  expect(Day05.partOne(input)).toBe("ZRLJGSCTR");
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
