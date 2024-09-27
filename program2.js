const decodeTheRing = function (s, p) {
  const m = s.length;
  const n = p.length;

  // Create a 2D array to hold our dp results
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
  dp[0][0] = true; // Both empty string and pattern match

  // Handle patterns that start with '*'
  for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') {
          dp[0][j] = dp[0][j - 1]; // '*' can match empty sequence
      }
  }

  // Fill in the dp table
  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
          if (p[j - 1] === '*') {
              // '*' can match any sequence (including empty)
              dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
          } else if (p[j - 1] === '?' || p[j - 1] === s[i - 1]) {
              // Match single character or '?'
              dp[i][j] = dp[i - 1][j - 1];
          }
      }
  }

  return dp[m][n];
};

// Export the function for use in other modules
module.exports = decodeTheRing;

// Example Tests
console.log(decodeTheRing("aa", "a")); // Output: false
console.log(decodeTheRing("aa", "*")); // Output: true
console.log(decodeTheRing("cb", "?a")); // Output: false
console.log(decodeTheRing("adceb", "*a*b")); // Output: true
console.log(decodeTheRing("acdcb", "a*c?b")); // Output: false
