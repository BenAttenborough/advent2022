import { Day05, runInstruction } from "../src/day05/main";

const inputTest = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

test("Day 5 Part 1", () => {
  expect(Day05.partOne(inputTest)).toBe("CMZ");
});

test("Day 5 Part 2", () => {
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
