import * as IO from "../helpers/io.ts";
import { Day07, addDirectory, parseLine } from "./main.ts";

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

// test("parseLine", () => {
//   expect(parseLine("$ ls")).toEqual({ type: "LIST" });
//   expect(parseLine("$ cd foo")).toEqual({ type: "CD", payload: "foo" });
//   expect(parseLine("dir e")).toEqual({ type: "ITEM_DIRECTORY", payload: "e" });
//   expect(parseLine("1000 file.txt")).toEqual({
//     type: "ITEM_FILE",
//     filePayload: {
//       size: 1000,
//       label: "file.txt",
//     },
//   });
// });

// test("addDirectory", () => {
//   expect(addDirectory({ size: 0 }, "foo", 5)).toBe({});
// });

// test("07-1-test-input", () => {
//   if (inputResultTest.isSuccess) {
//     expect(Day07.partOne(inputResultTest.value)).toBe("95437");
//   } else {
//     console.error(inputResultTest.error);
//   }
// });

// test("07-1", () => {
//   if (inputResult.isSuccess) {
//     expect(Day07.partOne(inputResult.value)).toBe("1427048");
//   } else {
//     console.error(inputResult.error);
//   }
// });

test("07-2-test-input", () => {
  if (inputResult.isSuccess) {
    expect(Day07.partTwo(inputResultTest.value)).toBe("0");
  } else {
    console.error(inputResult.error);
  }
});

// test("07-2", () => {
//   if (inputResult.isSuccess) {
//     expect(Day07.partTwo(inputResult.value)).toBe("0");
//   } else {
//     console.error(inputResult.error);
//   }
// });
