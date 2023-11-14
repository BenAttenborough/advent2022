import { Utils } from "../helpers/utils.ts";

export const Day03 = {
  partOne: (input: string): number => {
    return input
      .split("\n")
      .map((item) => priorityOfCommonElementInString(item))
      .reduce((prev, next) => prev + next, 0);
  },

  partTwo: (input: string): number => {
    let lines = Utils.lines(input);
    let container = Utils.arrayDivideInto(lines, 3);
    return container
      .map((item) => {
        let commonChar = findCommon3(item[0], item[1], item[2]);
        return convertCharCodeToPriority(commonChar.charCodeAt(0));
      })
      .reduce((prev, next) => prev + next, 0);
  },
};

function findMatches(string1: string, string2: string): string {
  let commonChars = "";
  for (const char of string1) {
    if (string2.includes(char)) {
      commonChars += char;
    }
  }
  return commonChars;
}

function findCommon3(
  string1: string,
  string2: string,
  string3: string,
): string {
  let commonFirstTwo = findMatches(string1, string2);
  return findMatch(commonFirstTwo, string3);
}

function findMatch(string1: string, string2: string): string {
  for (const char of string1) {
    if (string2.includes(char)) {
      return char;
    }
  }
  return "No match";
}

function priorityOfCommonElementInString(input: string): number {
  let bag01 = input.substring(0, input.length / 2);
  let bag02 = input.substring(input.length / 2);
  let commonElement = findMatch(bag01, bag02);
  return convertCharCodeToPriority(commonElement.charCodeAt(0));
}

function convertCharCodeToPriority(code: number): number {
  if (code <= 90) {
    return code - 38;
  } else {
    return code - 96;
  }
}
