import { Utils } from "../helpers/utils.ts";

export const Day08 = {
  partOne: (input: string): number => {
    return main(input);
  },

  partTwo: (input: string): number => {
    return 0;
  },
};

const TREE_MAX_HEIGHT = 9;

type Tree = {
  value: number;
  spotted: boolean;
};

let spottedTreesCount = 0;

export function main(input: string): number {
  let trees = convertInput(input.split("\n"));
  const length = trees[0].length;
  const height = trees.length;
  for (let i = 0; i < height; ++i) {
    convertRow(trees[i]);
  }
  findVisibleTreesInCols(trees);
  let result = trees.reduce((prev, next) => {
    return (
      prev +
      next.reduce((p, n) => {
        let found = n.spotted ? 1 : 0;
        return p + found;
      }, 0)
    );
  }, 0);
  return result;
}

export function convertRow(row: Tree[]): Tree[] {
  // For performance checking
  let treesChecked = 0;
  let heighestTree = -1;
  let lastSeenTreeIndex = 0;

  for (let i = 0; i < row.length; ++i) {
    const currentTreeHeight = row[i].value;
    if (currentTreeHeight === TREE_MAX_HEIGHT) {
      row[i].spotted = true;
      treesChecked++;
      lastSeenTreeIndex = i;
      spottedTreesCount++;
      break;
    }
    compareHeights(i, currentTreeHeight);
  }
  // If the last entry in visibleTreeIndexes is the same as trees.length
  // we don't need to go from r to l
  if (lastSeenTreeIndex === row.length) {
    return row;
  }

  heighestTree = -1;

  for (let i = row.length - 1; i > lastSeenTreeIndex; i--) {
    let currentTreeHeight = row[i].value;
    if (currentTreeHeight === TREE_MAX_HEIGHT) {
      row[i].spotted = true;
      treesChecked++;
      break;
    }
    compareHeights(i, currentTreeHeight);
  }

  return row;

  function compareHeights(i: number, currentTreeHeight: number) {
    if (currentTreeHeight > heighestTree) {
      heighestTree = currentTreeHeight;
      row[i].spotted = true;
      treesChecked++;
      spottedTreesCount++;
    } else {
      treesChecked++;
    }
  }
}

export function convertInput(input: string[]): Tree[][] {
  const result = input
    .map((x) => x.split(""))
    .map((x) => {
      return x.map((y) => {
        return { value: parseInt(y), spotted: false };
      });
    });
  return result;
}

export function findVisibleTreesInCols(trees: Tree[][]): Tree[][] {
  const length = trees[0].length;
  const height = trees.length;
  let treesChecked = 0;
  let heighestTree = -1;
  let currentTreeHeight = 0;
  let lastSeenTreeIndex = 0;

  for (let x = 0; x < length; ++x) {
    heighestTree = -1;
    for (let y = 0; y < height; ++y) {
      currentTreeHeight = trees[y][x].value;
      if (currentTreeHeight === TREE_MAX_HEIGHT) {
        trees[y][x].spotted = true;
        spottedTreesCount++;
        treesChecked++;
        lastSeenTreeIndex = y;
        break;
      }
      compareHeights(x, y, currentTreeHeight);
    }

    heighestTree = -1;

    for (let y = height - 1; y > lastSeenTreeIndex; y--) {
      let currentTreeHeight = trees[y][x].value;
      if (currentTreeHeight === TREE_MAX_HEIGHT) {
        trees[y][x].spotted = true;
        spottedTreesCount++;
        treesChecked++;
        break;
      }
      compareHeights(x, y, currentTreeHeight);
    }
  }

  return trees;

  function compareHeights(i: number, j: number, currentTreeHeight: number) {
    if (currentTreeHeight > heighestTree) {
      heighestTree = currentTreeHeight;
      trees[j][i].spotted = true;
    }
    treesChecked++;
  }
}
