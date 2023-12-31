export const Day04 = {
  partOne: (input: string): number => {
    return input
      .split("\n")
      .map((line) => {
        return line.split(",").map(splitValues);
      })
      .map(rangeEnclosedByAnother())
      .reduce((prev, next) => prev + next, 0 as number);
  },

  partTwo: (input: string): number => {
    return input
      .split("\n")
      .map((line) => {
        return line.split(",").map(splitValues);
      })
      .map(rangesOverlap())
      .reduce((prev, next) => prev + next, 0 as number);
  },
};

type sectionRange = {
  start: number;
  end: number;
};

function rangesOverlap(): (value: sectionRange[]) => 1 | 0 {
  return function (range) {
    if (
      (range[0].start >= range[1].start && range[0].start <= range[1].end) ||
      (range[1].start >= range[0].start && range[1].start <= range[0].end)
    ) {
      return 1;
    } else {
      return 0;
    }
  };
}

function rangeEnclosedByAnother(): (value: sectionRange[]) => 1 | 0 {
  return function (range) {
    if (
      (range[0].start >= range[1].start && range[0].end <= range[1].end) ||
      (range[1].start >= range[0].start && range[1].end <= range[0].end)
    ) {
      return 1;
    } else {
      return 0;
    }
  };
}

function splitValues(values: string): sectionRange {
  let splitValues = values.split("-");

  return {
    start: parseInt(splitValues[0]),
    end: parseInt(splitValues[1]),
  };
}
