import { Day01 } from "../src/day01/main";

const inputTest = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

test("Part one", () => {
  expect(Day01.partOne(inputTest)).toBe(24000);
});

test("Part two", () => {
  expect(Day01.partTwo(inputTest)).toBe(45000);
});
