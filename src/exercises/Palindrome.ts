import { ExerciseMetadata, ExampleCase } from '@interfaces/exercises';

/**
 * Palindrome Checker Exercise Implementation
 * 
 * DESCRIPTION:
 * Checks if a string is a palindrome (reads the same forward and backward) after
 * ignoring case, spaces, and non-alphanumeric characters.
 * 
 * EXAMPLE:
 * "A man, a plan, a canal: Panama" → true
 * "race a car" → false
 * 
 * CONCEPTS:
 * - String manipulation
 * - Regular expressions
 * - Case-insensitive comparison
 * 
 * PERFORMANCE:
 * - Time: O(n) - single pass for cleaning and comparison
 * - Space: O(n) - stores cleaned string
 * 
 * Multiple implementations included to show different approaches.
 */

// Main function
export function isPalindrome(str: string): boolean {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

// Alternative implementation using two pointers
export function isPalindromeTwoPointer(str: string): boolean {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = cleaned.length - 1;
  
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  
  return true;
}

// Exercise metadata
export const metadata: ExerciseMetadata = {
  title: "Palindrome Checker",
  description: "Checks if a string is a palindrome, ignoring case, spaces, and non-alphanumeric characters",
  concepts: ["string manipulation", "regular expressions", "comparison"],
  timeComplexity: "O(n)",
  spaceComplexity: "O(n)"
};

// Example test cases
export const examples: ExampleCase[] = [
  {
    input: "A man, a plan, a canal: Panama",
    output: true,
    description: "Classic palindrome with spaces and punctuation"
  },
  {
    input: "race a car",
    output: false,
    description: "Non-palindrome with spaces"
  },
  {
    input: "Was it a car or a cat I saw?",
    output: true,
    description: "Palindrome with spaces, punctuation, and mixed case"
  },
  {
    input: "",
    output: true,
    description: "Empty string (considered a palindrome)"
  },
  {
    input: "a",
    output: true,
    description: "Single character (always a palindrome)"
  },
  {
    input: ".,",
    output: true,
    description: "Only punctuation (empty after cleaning)"
  }
];

// Default export for easy importing
export default {
  isPalindrome,
  isPalindromeTwoPointer,
  metadata,
  examples
};