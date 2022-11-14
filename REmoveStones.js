/**
 * *Time: O(N + M)
 * *Space: O(N)
 */
// Runtime: 282 ms, faster than 20.17% of JavaScript online submissions for Most Stones Removed with Same Row or Column.
// Memory Usage: 49.5 MB, less than 57.98% of JavaScript online submissions for Most Stones Removed with Same Row or Column.

// find the number of valid stones
// if valid, traverse stones and look for same row and col then remove those stones
const removeStones = stones => {
	const visited = new Set();
	let valid = 0;

  // find and remove stones that have same row and col
	const traverse = (row, col) => {
		const key = `${row}-${col}`;

		if (visited.has(key)) return;

		visited.add(key); // mark visited
		for (const [x, y] of stones) {
			// if row or col is same, should be removed
			if (row === x || col === y) traverse(x, y);
		}
	};

	for (const [x, y] of stones) {
		const key = `${x}-${y}`;

		if (visited.has(key)) continue;

		traverse(x, y);
		valid++;
	}

  // subtract number of valid nodes from total number of stones
	return stones.length - valid;
};