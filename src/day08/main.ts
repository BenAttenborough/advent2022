import { Utils } from "../helpers/utils.ts";

export const Day08 = {
  partOne: (input: string): number => {
    return 0;
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

export function main(input: string[]): void {
  let trees = convertInput(input);
  convertRow(trees[0]);
}

export function convertRow(row: Tree[]): Tree[] {
  console.log(row);
  // For performance checking
  let treesChecked = 0;
  let heighestTree = 0;
  let lastSeenTreeIndex = 0;

  // let visibleTreeIndexes: number[] = [];
  for (let i = 0; i < row.length; ++i) {
    const currentTreeHeight = row[i].value;
    if (currentTreeHeight === TREE_MAX_HEIGHT) {
      // visibleTreeIndexes.push(i);
      spotTree(i);
      break;
    }
    compareHeights(i, currentTreeHeight);
  }
  // If the last entry in visibleTreeIndexes is the same as trees.length
  // we don't need to go from r to l
  heighestTree = 0;
  console.log("lastSeenTreeIndex ", lastSeenTreeIndex);
  if (lastSeenTreeIndex === row.length) {
    return row;
  }
  for (let i = row.length - 1; i > lastSeenTreeIndex + 1; --i) {
    console.log(i);
    let currentTreeHeight = row[i].value;

    if (currentTreeHeight === TREE_MAX_HEIGHT) {
      row[i].spotted = true;
      treesChecked++;
      break;
    }
    compareHeights(i, currentTreeHeight);
  }
  console.log(`Rows: ${JSON.stringify(row)} Trees checked ${treesChecked}`);

  return row;

  function spotTree(i: number) {
    row[i].spotted = true;
    treesChecked++;
    lastSeenTreeIndex = i;
  }

  function compareHeights(i: number, currentTreeHeight: number) {
    if (currentTreeHeight > heighestTree) {
      heighestTree = currentTreeHeight;
      spotTree(i);
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
  // console.log(result);
  return result;
}

export function findVisibleTreesInRows(trees: string[]): number[][] {
  const length = trees[0].length;
  const height = trees.length;
  let rows = [];
  for (let i = 0; i < height; ++i) {
    rows.push(findVisibleTreesInRow(trees[i]));
  }
  console.log(rows);
  return rows;
}

export function findVisibleTreesInCols(trees: string[]): number[] {
  let treesMatrix = trees.map((x) => x.split(""));
  console.log("Trees matrix: ", treesMatrix);
  let matrixRotated = Utils.matrixRotateClockwise(treesMatrix);
  console.log("Trees matrix rotated: ", matrixRotated);
  return [];
  // let treesRotated = Utils.matrixRotateClockwise(trees);
  // const length = trees[0].length;
  // const height = trees.length;
  // let treesChecked = 0;
  // let heighestTree = 0;
  // let visibleTreeIndexes: number[] = [];
  // let cols = [];
  // for (let i = 0; i < height; ++i) {
  //   for (let j = 0; j < length; ++j) {
  //     const currentTreeHeight = parseInt(trees[j][i]);
  //     cols.push(currentTreeHeight);
  //     if (currentTreeHeight === TREE_MAX_HEIGHT) {
  //       visibleTreeIndexes.push(j);
  //       treesChecked++;
  //       break;
  //     }
  //     compareHeights(j, currentTreeHeight);
  //   }
  //   console.log(visibleTreeIndexes);
  // }
  // console.log("Hard coded cols 32633, 05535, 35353, 71349, 32290");
  // // console.log(
  // //   `Given the trees "${trees}" \n Visible tree indexes ${visibleTreeIndexes} \n Last seen tree index ${lastSeenTreeIndex} \n Trees checked ${treesChecked}`,
  // // );
  // return visibleTreeIndexes;

  // function compareHeights(i: number, currentTreeHeight: number) {
  //   // console.log("Current tree height ", currentTreeHeight);
  //   // console.log("heighestTree ", heighestTree);

  //   if (currentTreeHeight > heighestTree) {
  //     console.log(
  //       `Tree at index ${i} is of height ${currentTreeHeight}, which is higher than the current highest tree at ${heighestTree}`,
  //     );
  //     heighestTree = currentTreeHeight;
  //     visibleTreeIndexes.push(i);
  //   }
  //   treesChecked++;
  // }
}

/* 
1 1 2 1 1 
Need to move l to r and r to l to get all trees 
But we can be more efficient. In the above example we don't
need to go all the way through the array twice.
On the way back we can stop at the last seen tree (location 2)

This algo is trying to be efficient
Given the string of "30398899998888889321"
We only need to look at the first four numbers and the last four numbers since all other numbers are hidden
*/
export function findVisibleTreesInRow(trees: string): number[] {
  // For performance checking
  let treesChecked = 0;
  let heighestTree = 0;
  let visibleTreeIndexes: number[] = [];
  for (let i = 0; i < trees.length; ++i) {
    const currentTreeHeight = parseInt(trees[i]);
    if (currentTreeHeight === TREE_MAX_HEIGHT) {
      visibleTreeIndexes.push(i);
      treesChecked++;
      break;
    }
    compareHeights(i, currentTreeHeight);
  }
  // If the last entry in visibleTreeIndexes is the same as trees.length
  // we don't need to go from r to l
  const lastSeenTreeIndex = visibleTreeIndexes[visibleTreeIndexes.length - 1];
  heighestTree = 0;
  if (lastSeenTreeIndex === trees.length) {
    return visibleTreeIndexes;
  }
  for (let i = trees.length; i > lastSeenTreeIndex + 1; --i) {
    const currentTreeHeight = parseInt(trees[i]);

    if (currentTreeHeight === TREE_MAX_HEIGHT) {
      visibleTreeIndexes.push(i);
      treesChecked++;
      break;
    }
    compareHeights(i, currentTreeHeight);
  }
  console.log(
    `Given the trees "${trees}" \n Visible tree indexes ${visibleTreeIndexes} \n Last seen tree index ${lastSeenTreeIndex} \n Trees checked ${treesChecked}`,
  );
  return visibleTreeIndexes;

  function compareHeights(i: number, currentTreeHeight: number) {
    if (currentTreeHeight > heighestTree) {
      heighestTree = currentTreeHeight;
      visibleTreeIndexes.push(i);
    }
    treesChecked++;
  }
}
