import { Day02 } from "../src/day02/main";

const inputTest = `A Y
B X
C Z`;

test("Part one", () => {
  expect(Day02.partOne(inputTest)).toBe(15);
});

test("Part two", () => {
  expect(Day02.partTwo(inputTest)).toBe(12);
});
