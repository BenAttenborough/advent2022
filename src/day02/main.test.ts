import * as IO from "../helpers/io.ts";
import { Day02 } from "./main.ts";

const inputTest = `A Y
B X
C Z`;

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
    expect(Day02.partOne(inputResult.value)).toBe(13565);
  } else {
    console.error(inputResult.error);
  }
});

test("02-2", () => {
  if (inputResult.isSuccess) {
    expect(Day02.partTwo(inputResult.value)).toBe(12424);
  } else {
    console.error(inputResult.error);
  }
});
