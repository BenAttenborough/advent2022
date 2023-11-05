import { Day03 } from "../src/day03/main";

const inputTest = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

test("Part one", () => {
  expect(Day03.partOne(inputTest)).toBe(157);
});

test("Part two", () => {
  expect(Day03.partTwo(inputTest)).toBe(70);
});
