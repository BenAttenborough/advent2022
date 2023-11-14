import { Utils } from "../helpers/utils.ts";

// mjqj

export const Day06 = {
  partOne: (input: string): number => {
    return analyseStingChunks(input, 4);
  },

  partTwo: (input: string): number => {
    return analyseStingChunks(input, 14);
  },
};

function analyseStingChunks(input: string, chunkSize: number): number {
  for (let i = 0; i < input.length - chunkSize; ++i) {
    const chunk = input.slice(i, i + chunkSize);
    if (allCharsUnique(chunk)) {
      return i + chunkSize;
    }
  }
  return 0;
}

export function allCharsUnique(input: string): boolean {
  let checkedChars: string = "";
  for (let i = 0; i < input.length; ++i) {
    if (checkedChars.includes(input[i])) {
      return false;
    } else {
      checkedChars += input[i];
    }
  }
  return true;
}
