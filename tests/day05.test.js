import { Day05 } from "../src/day05/main";

const inputTest = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

test("Day 5 Part 1", () => {
  expect(Day05.partOne(inputTest)).toBe(0);
});

test("Day 5 Part 2", () => {
  expect(Day05.partTwo(inputTest)).toBe(0);
});
