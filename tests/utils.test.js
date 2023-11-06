import { Utils } from "../src/helpers/utils";

test("lines", () => {
  expect(Utils.lines("abc\ndef")).toEqual(["abc", "def"]);
});

test("arrayDivideInto", () => {
  expect(Utils.arrayDivideInto([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
});

test("arrayGetCommonElements", () => {
  const set1 = new Set(["a", "b", "c"]);
  const set2 = new Set(["d", "b", "e"]);

  expect(Utils.arrayGetCommonElements(set1, set2)).toEqual(["b"]);
});

test("matrixTransform", () => {
  let input = [
    [4, 5, 6],
    [1, 2, 3],
  ];
  expect(Utils.matrixRotateClockwise(input)).toEqual([
    [1, 2, 3],
    [4, 5, 6],
  ]);
});

test("stringDivideInto", () => {
  expect(Utils.stringDivideInto("123456789", 3)).toEqual(["123", "456", "789"]);
});

test("stringDivideInto test 2", () => {
  expect(Utils.stringDivideInto("[Z] [M] [P] ", 4)).toEqual([
    "[Z] ",
    "[M] ",
    "[P] ",
  ]);
});
