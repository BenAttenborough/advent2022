import * as IO from "../helpers/io.ts";
import { Day03 } from "./main.ts";

const inputTest = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

let inputResult: IO.result = {
  isSuccess: false,
  value: "",
  error: null,
};

beforeAll(async () => {
  try {
    let temp: string = await IO.getInput(__dirname, "input.txt");
    inputResult = IO.success(temp);
  } catch (err) {
    inputResult = IO.failure(err);
  }
});

test("02-1", () => {
  if (inputResult.isSuccess) {
    expect(Day03.partOne(inputResult.value)).toBe(8349);
  } else {
    console.error(inputResult.error);
  }
});

test("20-2", () => {
  if (inputResult.isSuccess) {
    expect(Day03.partTwo(inputResult.value)).toBe(2681);
  } else {
    console.error(inputResult.error);
  }
});
