import { ExerciseMetadata, ExampleCase } from '@interfaces/exercises';

/**
 * Array Deduplication Exercise Implementation
 * 
 * DESCRIPTION:
 * Removes duplicates from an array of numbers or strings, returning unique elements in order of first appearance.
 * 
 * EXAMPLE:
 * [1, 2, 2, 3, 1] → [1, 2, 3]
 * ["a", "b", "a"] → ["a", "b"]
 * 
 * CONCEPTS:
 * - Array manipulation
 * - Hash sets
 * - Filtering and reducing
 * 
 * PERFORMANCE:
 * - Set-based: O(n) time, O(n) space
 * - Filter/Reduce-based: O(n²) time, O(n) space
 * 
 * Multiple implementations included to show different approaches.
 */

// Set-based implementation
export function ArrayDeduplicate(arr: (number | string)[]): (number | string)[] {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  const seen = new Set();
  const dedupedArray: (number | string)[] = [];

  for (const item of arr) {
    if (!seen.has(item)) {
      seen.add(item);
      dedupedArray.push(item);
    }
  }
  return dedupedArray;
}

// Filter-based implementation
export function ArrayFilterDeduplicate(arr: (number | string)[]): (number | string)[] {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Reduce-based implementation
export function ArrayReduceDeduplicate(arr: (number | string)[]): (number | string)[] {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  return arr.reduce((deduped: (number | string)[], item) => {
    if (!deduped.includes(item)) {
      deduped.push(item);
    }
    return deduped;
  }, []);
}

// Exercise metadata
export const metadata: ExerciseMetadata = {
  title: "Array Deduplication",
  description: "Removes duplicates from an array of numbers or strings",
  concepts: ["array manipulation", "hash sets", "filtering", "reducing"],
  timeComplexity: "O(n) for Set-based, O(n²) for filter/reduce-based",
  spaceComplexity: "O(n)"
};

// Example test cases
export const examples: ExampleCase[] = [
  {
    input: [1, 2, 2, 3, 1],
    output: [1, 2, 3],
    description: "Array with duplicate numbers"
  },
  {
    input: ["a", "b", "a", "c", "b"],
    output: ["a", "b", "c"],
    description: "Array with duplicate strings"
  },
  {
    input: [],
    output: [],
    description: "Empty array"
  },
  {
    input: [1],
    output: [1],
    description: "Single element array"
  },
  {
    input: [1, "a", 1, "a", 2],
    output: [1, "a", 2],
    description: "Mixed numbers and strings"
  },
  {
    input: null,
    output: new Error("Input must be an array"),
    description: "Invalid input (null)"
  }
];

// Default export for easy importing
export default {
  ArrayDeduplicate,
  ArrayFilterDeduplicate,
  ArrayReduceDeduplicate,
  metadata,
  examples
};