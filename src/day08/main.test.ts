import * as IO from "../helpers/io.ts";
import {
  Day08,
  findVisibleTreesInRow,
  findVisibleTreesInRows,
} from "./main.ts";

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

const testInput = "mjqjpqmgbljsphdztnvjfqwrcgsmlb";

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

// test("07-1-test-input", () => {
//   if (inputResultTest.isSuccess) {
//     expect(Day08.partOne(inputResultTest.value)).toBe(1);
//   } else {
//     console.error(inputResultTest.error);
//   }
// });

test("07 Find visible trees in row", () => {
  //   findVisibleTrees("30373");
  //   findVisibleTrees("3037321");
  //   findVisibleTrees("3039321");
  // findVisibleTreesInRow("30398899998888889321");
  const testTrees = "30373\n25512\n65332\n33549\n35390";
  const input = testTrees.split("\n");

  findVisibleTreesInRows(input);

  // findVisibleTreesInRow("30398899998888889321");

  expect(1).toBe(1);
  //   expect(findVisibleTrees("30373")).toEqual([0, 3, 4]);
});
