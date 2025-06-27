# Algorithm Design Approaches

## Main Algorithm Design Approaches

### 1. Brute Force
- **Characteristics**: Tests all possible solutions exhaustively.
- **Use Cases**: Small inputs or simple problems.
- **Examples**:
  - **Two Sum**: Check every pair (O(n²)).
  - **Longest Common Substring**: Compare all substrings (O(n² * m)).

### 2. Divide-and-Conquer
- **Characteristics**: Splits problem into independent subproblems, solves, and combines.
- **Use Cases**: Sorting, searching.
- **Examples**:
  - **Merge Sort**: Split, sort, merge (O(n log n)).
  - **Binary Search**: Halve search space (O(log n)).

### 3. Dynamic Programming
- **Characteristics**: Stores results of overlapping subproblems.
- **Use Cases**: Optimization, redundant subproblems.
- **Examples**:
  - **Fibonacci**: O(n) with storage vs. exponential.
  - **Longest Common Subsequence**: Table-based (O(n * m)).

### 4. Greedy Algorithms
- **Characteristics**: Locally optimal choices for global optimum.
- **Use Cases**: Local choices yield global solutions.
- **Examples**:
  - **Coin Change**: Pick largest coins.
  - **Kruskal’s MST**: Smallest edges without cycles.

### 5. Backtracking
- **Characteristics**: Explores all possibilities, pruning invalid paths.
- **Use Cases**: Combinatorial problems.
- **Examples**:
  - **N-Queens**: Place queens, backtrack on conflicts.
  - **Permutations**: Generate all permutations.

### 6. Branch and Bound
- **Characteristics**: Explores solution space, bounds to prune branches.
- **Use Cases**: Optimization (e.g., scheduling).
- **Examples**:
  - **Traveling Salesman**: Find shortest path, prune costly routes.
  - **Knapsack**: Optimize item selection.

## Relevance to Your Exercises
- **Two Sum**:
  - Brute Force: O(n²) pairs.
  - Optimized: Hash map (O(n)).
- **Fibonacci**:
  - Brute Force: Exponential recursion.
  - Dynamic Programming: O(n) storage.
- **Longest Common Substring**:
  - Brute Force: All substrings.
  - Dynamic Programming: Table-based.
- **Permutations (potential exercise)**:
  - Backtracking: Generate all permutations.

## Summary
- **Brute Force**: Simple, slow.
- **Divide-and-Conquer**: Sorting/searching.
- **Dynamic Programming**: Overlapping subproblems.
- **Greedy**: Local optima.
- **Backtracking**: Combinatorial exploration.
- **Branch and Bound**: Optimization with pruning.

These approaches cover most coding exercises for your portfolio, enhancing your problem-solving showcase!