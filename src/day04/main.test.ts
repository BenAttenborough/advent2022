import * as IO from "../helpers/io.ts";
import { Day04 } from "./main.ts";

const inputTest = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

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

test("04-1", () => {
  if (inputResult.isSuccess) {
    expect(Day04.partOne(inputResult.value)).toBe(584);
  } else {
    console.error(inputResult.error);
  }
});

test("04-2", () => {
  if (inputResult.isSuccess) {
    expect(Day04.partTwo(inputResult.value)).toBe(933);
  } else {
    console.error(inputResult.error);
  }
});
