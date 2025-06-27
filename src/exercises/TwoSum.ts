import { ExerciseMetadata, ExampleCase } from '@interfaces/exercises';

/**
 * Two Sum Exercise Implementation
 * 
 * DESCRIPTION:
 * Finds two indices in an array of numbers whose values add up to a target sum.
 * Assumes exactly one solution exists for valid inputs.
 * 
 * EXAMPLE:
 * [2, 7, 11, 15], 9 → [0, 1]
 * [3, 2, 4], 6 → [1, 2]
 * 
 * CONCEPTS:
 * - Array iteration
 * - Hash maps
 * - Two-pointer or brute-force alternatives
 * 
 * PERFORMANCE:
 * - Hash map: O(n) time, O(n) space
 * - Brute-force: O(n²) time, O(1) space
 * 
 * Multiple implementations included to show different approaches.
 */

// Main function (hash map)
export function twoSum(nums: number[], target: number): number[] {
  if (!Array.isArray(nums) || nums.length < 2) {
    throw new Error("Input must be an array with at least two numbers");
  }
  const numToIndex: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numToIndex[complement] !== undefined) {
      return [numToIndex[complement], i];
    }
    numToIndex[nums[i]] = i;
  }
  throw new Error("No two numbers sum to the target");
}

// Alternative implementation (brute-force)
export function twoSumBruteForce(nums: number[], target: number): number[] {
  if (!Array.isArray(nums) || nums.length < 2) {
    throw new Error("Input must be an array with at least two numbers");
  }
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  throw new Error("No two numbers sum to the target");
}

// Exercise metadata
export const metadata: ExerciseMetadata = {
  title: "Two Sum",
  description: "Finds two indices in an array whose values sum to a target",
  concepts: ["array iteration", "hash maps", "brute-force"],
  timeComplexity: "O(n) for hash map, O(n²) for brute-force",
  spaceComplexity: "O(n) for hash map, O(1) for brute-force"
};

// Example test cases
export const examples: ExampleCase[] = [
  {
    input: [[2, 7, 11, 15], 9],
    output: [0, 1],
    description: "Basic two sum with unique numbers"
  },
  {
    input: [[3, 2, 4], 6],
    output: [1, 2],
    description: "Two sum with solution not at start"
  },
  {
    input: [[3, 3], 6],
    output: [0, 1],
    description: "Two sum with duplicate numbers"
  },
  {
    input: [[1, 2, 3], 10],
    output: new Error("No two numbers sum to the target"),
    description: "No solution exists"
  },
  {
    input: [[1], 2],
    output: new Error("Input must be an array with at least two numbers"),
    description: "Array too short"
  },
  {
    input: [null, 5],
    output: new Error("Input must be an array with at least two numbers"),
    description: "Invalid input (null)"
  }
];

// Default export for easy importing
export default {
  twoSum,
  twoSumBruteForce,
  metadata,
  examples
};