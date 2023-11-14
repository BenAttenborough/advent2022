import * as IO from "../helpers/io.ts";
import { Day06, allCharsUnique } from "./main.ts";

let inputResult: IO.result = {
  isSuccess: false,
  value: "",
  error: null,
};

const testInput = "mjqjpqmgbljsphdztnvjfqwrcgsmlb";

beforeAll(async () => {
  try {
    let temp: string = await IO.getInput(__dirname, "input.txt");
    inputResult = IO.success(temp);
  } catch (err) {
    inputResult = IO.failure(err);
  }
});

test("06-1-test", () => {
  const testInput = "mjqjpqmgbljsphdztnvjfqwrcgsmlb";
  expect(Day06.partOne(testInput)).toBe(7);
});

test("allCharsUnique", () => {
  expect(allCharsUnique("abcd")).toBe(true);
  expect(allCharsUnique("abcb")).toBe(false);
});

test("06-1", () => {
  if (inputResult.isSuccess) {
    expect(Day06.partOne(inputResult.value)).toBe(1531);
  } else {
    console.error(inputResult.error);
  }
});

test("06-2", () => {
  if (inputResult.isSuccess) {
    expect(Day06.partTwo(inputResult.value)).toBe(2518);
  } else {
    console.error(inputResult.error);
  }
});
