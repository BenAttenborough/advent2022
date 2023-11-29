import * as IO from "../helpers/io.ts";
import { Day08 } from "./main.ts";

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
    expect(Day08.partOne(inputResultTest.value)).toBe(21);
  } else {
    console.error(inputResultTest.error);
  }
});

test("07-1-input", () => {
  if (inputResultTest.isSuccess) {
    expect(Day08.partOne(inputResult.value)).toBe(1681);
  } else {
    console.error(inputResultTest.error);
  }
});

// test("07 Find visible trees in row", () => {
//   const testTrees = "30373\n25512\n65332\n33549\n35390";
//   const input = testTrees.split("\n");
//   expect(main(input)).toBe(21);
// });
