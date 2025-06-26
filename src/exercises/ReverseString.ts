import { ExerciseMetadata, ExampleCase } from '@interfaces/exercises';

/**
 * Reverse a String Exercise Implementation
 * 
 * DESCRIPTION:
 * Reverses a given string, returning the characters in opposite order.
 * 
 * EXAMPLE:
 * "hello" → "olleh"
 * "12345" → "54321"
 * 
 * CONCEPTS:
 * - String manipulation
 * - Array methods
 * - Iteration
 * 
 * PERFORMANCE:
 * - Time: O(n) - single pass to reverse
 * - Space: O(n) - stores new string/array
 * 
 * Multiple implementations included to show different approaches.
 */

// Main function (built-in methods)
export function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

// Alternative implementation (manual loop)
export function reverseStringManual(str: string): string {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

// Exercise metadata
export const metadata: ExerciseMetadata = {
  title: "Reverse a String",
  description: "Reverses a given string, returning the characters in opposite order",
  concepts: ["string manipulation", "array methods", "iteration"],
  timeComplexity: "O(n)",
  spaceComplexity: "O(n)"
};

// Example test cases
export const examples: ExampleCase[] = [
  {
    input: "hello",
    output: "olleh",
    description: "Basic string reversal"
  },
  {
    input: "",
    output: "",
    description: "Empty string"
  },
  {
    input: "a",
    output: "a",
    description: "Single character"
  },
  {
    input: "12345!",
    output: "!54321",
    description: "String with numbers and special characters"
  },
  {
    input: "héllo",
    output: "ollèh",
    description: "String with Unicode characters"
  }
];

// Default export for easy importing
export default {
  reverseString,
  reverseStringManual,
  metadata,
  examples
};