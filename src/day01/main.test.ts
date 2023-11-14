import * as IO from "../helpers/io.ts";
import { Day01 } from "./main.ts";

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

test("01-1", () => {
  if (inputResult.isSuccess) {
    expect(Day01.partOne(inputResult.value)).toBe(69310);
  } else {
    console.error(inputResult.error);
  }
});

test("01-2", () => {
  if (inputResult.isSuccess) {
    expect(Day01.partTwo(inputResult.value)).toBe(206104);
  } else {
    console.error(inputResult.error);
  }
});
