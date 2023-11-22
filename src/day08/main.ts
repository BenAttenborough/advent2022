export const Day08 = {
  partOne: (input: string): number => {
    return 0;
  },

  partTwo: (input: string): number => {
    return 0;
  },
};

const TREE_MAX_HEIGHT = 9;

/* 
1 1 2 1 1 
Need to move l to r and r to l to get all trees 
But we can be more efficient. In the above example we don't
need to go all the way through the array twice.
On the way back we can stop at the last seen tree (location 2)

TODO: On the way from l to r, stop if we find a tree of max height
*/
export function findVisibleTrees(trees: string): number[] {
  // For performance checking
  let treesChecked = 0;

  let heighestTree = 0;
  let visibleTreeIndexes: number[] = [];
  for (let i = 0; i < trees.length; ++i) {
    if (parseInt(trees[i]) === TREE_MAX_HEIGHT) {
      visibleTreeIndexes.push(i);
      treesChecked++;
      break;
    }
    compareHeights(i);
  }
  // If the last entry in visibleTreeIndexes is the same as trees.length
  // we don't need to go from r to l
  const lastSeenTreeIndex = visibleTreeIndexes[visibleTreeIndexes.length - 1];
  heighestTree = 0;
  if (lastSeenTreeIndex === trees.length) {
    return visibleTreeIndexes;
  }
  for (let i = trees.length; i > lastSeenTreeIndex + 1; --i) {
    if (parseInt(trees[i]) === TREE_MAX_HEIGHT) {
      visibleTreeIndexes.push(i);
      treesChecked++;
      break;
    }
    compareHeights(i);
  }
  console.log(
    `Given the trees "${trees}" \n Visible tree indexes ${visibleTreeIndexes} \n Last seen tree index ${lastSeenTreeIndex} \n Trees checked ${treesChecked}`,
  );
  return visibleTreeIndexes;

  function compareHeights(i: number) {
    const currentTreeHeight = parseInt(trees[i]);
    if (currentTreeHeight > heighestTree) {
      heighestTree = currentTreeHeight;
      visibleTreeIndexes.push(i);
    }
    treesChecked++;
  }
}
