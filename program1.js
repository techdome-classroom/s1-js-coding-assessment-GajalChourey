const getTotalIsles = function (grid) {
  if (grid.length === 0) return 0;

  const numRows = grid.length;
  const numCols = grid[0].length;
  let islandCount = 0;

  // Helper function for DFS
  const dfs = (row, col) => {
      // Check boundaries
      if (row < 0 || col < 0 || row >= numRows || col >= numCols || grid[row][col] === 'W') {
          return;
      }

      // Mark the cell as visited
      grid[row][col] = 'W'; 

      // Explore all four directions (up, down, left, right)
      dfs(row - 1, col); // Up
      dfs(row + 1, col); // Down
      dfs(row, col - 1); // Left
      dfs(row, col + 1); // Right
  };

  // Traverse the grid
  for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
          if (grid[i][j] === 'L') {
              // Found an unvisited land, start DFS
              islandCount++;
              dfs(i, j);
          }
      }
  }

  return islandCount;
};

// Export the function for use in other modules
module.exports = getTotalIsles;

// Example Dispatches
const dispatch1 = [
  ["L","L","L","L","W"],
  ["L","L","W","L","W"],
  ["L","L","W","W","W"],
  ["W","W","W","W","W"],
];

const dispatch2 = [
  ["L","L","W","W","W"],
  ["L","L","W","W","W"],
  ["W","W","L","W","W"],
  ["W","W","W","L","L"],
];

console.log(getTotalIsles(dispatch1)); // Output: 1
console.log(getTotalIsles(dispatch2)); // Output: 3
