export const Day08 = {
  partOne: (input: string): number => {
    return 0;
  },

  partTwo: (input: string): number => {
    return 0;
  },
};

const TREE_MAX_HEIGHT = 9;

export function findVisibleTreesInRows(trees: string[]): number[][][] {
  const length = trees[0].length;
  const height = trees.length;
  let horizontalVisibleTrees = [];
  let row = [];
  for (let i = 0; i < height; ++i) {
    row.push(findVisibleTreesInRow(trees[i]));
  }
  horizontalVisibleTrees.push(row);
  console.log(`horizontalVisibleTrees: ${horizontalVisibleTrees}`);
  console.log([0, 1], [0, 2]);
  return horizontalVisibleTrees;
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
