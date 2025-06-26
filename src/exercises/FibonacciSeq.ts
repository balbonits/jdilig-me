import { ExerciseMetadata, ExampleCase } from '@interfaces/exercises';

/**
 * Fibonacci Sequence Exercise Implementation
 * 
 * DESCRIPTION:
 * Generates the first n numbers in the Fibonacci sequence, where each number
 * is the sum of the two preceding ones, starting with 0, 1.
 * 
 * EXAMPLE:
 * 7 → [0, 1, 1, 2, 3, 5, 8]
 * 0 → []
 * 
 * CONCEPTS:
 * - Iteration or recursion
 * - Memoization for optimization
 * - Array manipulation
 * 
 * PERFORMANCE:
 * - Time: O(n) for iterative/memoized, O(2^n) for naive recursive
 * - Space: O(n) for array storage, O(n) for recursive call stack
 * 
 * Multiple implementations included to show different approaches.
 */

// Main function (iterative)
export function FibonacciSeq(count: number): number[] {
  if (!Number.isInteger(count)) {
    throw new Error("Input must be an integer");
  }
  if (count < 0) {
    throw new Error("Input must be non-negative");
  }
  if (count === 0) return [];
  if (count === 1) return [0];
  if (count === 2) return [0, 1];

  const fibSeq: number[] = [0, 1];
  for (let i = 2; i < count; i++) {
    fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
  }
  return fibSeq;
}

// Alternative implementation (memoized recursive)
export function FibonacciSeqMemoized(count: number): number[] {
  if (!Number.isInteger(count)) {
    throw new Error("Input must be an integer");
  }
  if (count < 0) {
    throw new Error("Input must be non-negative");
  }
  if (count === 0) return [];

  const memo: { [key: number]: number } = { 0: 0, 1: 1 };
  const fib = (n: number): number => {
    if (n in memo) return memo[n];
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
  };
  
  const result: number[] = [];
  for (let i = 0; i < count; i++) {
    result.push(fib(i));
  }
  return result;
}

// Exercise metadata
export const metadata: ExerciseMetadata = {
  title: "Fibonacci Sequence",
  description: "Generates the first n numbers in the Fibonacci sequence",
  concepts: ["iteration", "recursion", "memoization", "array manipulation"],
  timeComplexity: "O(n) for iterative/memoized",
  spaceComplexity: "O(n)"
};

// Example test cases
export const examples: ExampleCase[] = [
  {
    input: 7,
    output: [0, 1, 1, 2, 3, 5, 8],
    description: "Fibonacci sequence for n=7"
  },
  {
    input: 0,
    output: [],
    description: "Empty sequence for n=0"
  },
  {
    input: 1,
    output: [0],
    description: "Single number for n=1"
  },
  {
    input: 2,
    output: [0, 1],
    description: "First two numbers for n=2"
  },
  {
    input: -1,
    output: new Error("Input must be non-negative"),
    description: "Negative input error"
  },
  {
    input: 3.5,
    output: new Error("Input must be an integer"),
    description: "Non-integer input error"
  }
];

// Default export for easy importing
export default {
  FibonacciSeq,
  FibonacciSeqMemoized,
  metadata,
  examples
};