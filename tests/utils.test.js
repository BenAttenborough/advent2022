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
