import * as IO from "../helpers/io.ts";
import { Day11 } from "./main.ts";

let inputResult: IO.result = {
  isSuccess: false,
  value: "",
  error: null,
};

let inputResultTest: IO.result = {
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

  try {
    let temp: string = await IO.getInput(__dirname, "inputTest.txt");
    inputResultTest = IO.success(temp);
  } catch (err) {
    inputResultTest = IO.failure(err);
  }
});

test("07-1-test-input", () => {
  if (inputResultTest.isSuccess) {
    expect(Day11.partOne(inputResultTest.value)).toBe(0);
  } else {
    console.error(inputResultTest.error);
  }
});
