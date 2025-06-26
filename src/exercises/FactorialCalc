import { ExerciseMetadata, ExampleCase } from '@interfaces/exercises';

/**
 * Factorial Calculator Exercise Implementation
 * 
 * DESCRIPTION:
 * Computes the factorial of a non-negative integer n (n!), the product of all positive integers up to n.
 * 
 * EXAMPLE:
 * 5! = 5 × 4 × 3 × 2 × 1 = 120
 * 0! = 1
 * 
 * CONCEPTS:
 * - Recursion
 * - Iteration
 * - Input validation
 * 
 * PERFORMANCE:
 * - Recursive: O(n) time, O(n) space (call stack)
 * - Iterative: O(n) time, O(1) space
 * 
 * Multiple implementations included to show different approaches.
 */

// Main function (recursive)
export function factorialCalc(n: number): number {
  if (!Number.isInteger(n)) {
    throw new Error("Input must be an integer");
  }
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorialCalc(n - 1);
}

// Alternative implementation (iterative)
export function factorialIterative(n: number): number {
  if (!Number.isInteger(n)) {
    throw new Error("Input must be an integer");
  }
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Exercise metadata
export const metadata: ExerciseMetadata = {
  title: "Factorial Calculator",
  description: "Computes the factorial of a non-negative integer",
  concepts: ["recursion", "iteration", "input validation"],
  timeComplexity: "O(n)",
  spaceComplexity: "O(n) recursive, O(1) iterative"
};

// Example test cases
export const examples: ExampleCase[] = [
  {
    input: 5,
    output: 120,
    description: "Factorial of 5 (5! = 5 × 4 × 3 × 2 × 1)"
  },
  {
    input: 0,
    output: 1,
    description: "Factorial of 0 (0! = 1 by definition)"
  },
  {
    input: 1,
    output: 1,
    description: "Factorial of 1 (1! = 1)"
  },
  {
    input: 3,
    output: 6,
    description: "Factorial of 3 (3! = 3 × 2 × 1)"
  },
  {
    input: -1,
    output: null,
    description: "Negative input throws error"
  },
  {
    input: 3.5,
    output: null,
    description: "Non-integer input throws error"
  }
];

// Default export for easy importing
export default {
  factorialCalc,
  factorialIterative,
  metadata,
  examples
};