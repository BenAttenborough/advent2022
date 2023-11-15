export const Day07 = {
  partOne: (input: string): number => {
    return 0;
  },

  partTwo: (input: string): number => {
    return 0;
  },
};

type directoryMap = Map<string, directory>;

type directory = {
  size: number;
  directories: Map<string, directoryMap>;
};

let root: directory = {
  size: 0,
  directories: new Map(),
};

// function addDirectory(structure: directory): directory {
//   return {
//     size: 50,
//     directories: [
//       {
//         size: 1,
//         directories: [],
//       },
//     ],
//   };
// }
