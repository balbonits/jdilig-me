import { ExerciseMetadata, ExampleCase } from '@interfaces/exercises';

/**
 * FizzBuzz Exercise Implementation
 * 
 * DESCRIPTION:
 * A classic programming challenge where you count from 1 to n with special rules:
 * - Numbers divisible by 3 become "Fizz"
 * - Numbers divisible by 5 become "Buzz"  
 * - Numbers divisible by both become "FizzBuzz"
 * - Everything else stays as the number
 * 
 * EXAMPLE (n=15):
 * 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
 * 
 * CONCEPTS:
 * - Loops and conditional logic
 * - Modulo operator (%) for checking divisibility
 * - String manipulation and arrays
 * 
 * PERFORMANCE:
 * - Time: O(n) - checks each number once
 * - Space: O(n) - stores results in an array
 * 
 * Multiple implementations included to show different coding approaches.
 */

// Main function
export function fizzBuzz(n: number): string[] {
  const result: string[] = [];
  
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }
  
  return result;
}

// Alternative implementation using string concatenation
export function fizzBuzzConcat(n: number): string[] {
  const result: string[] = [];
  
  for (let i = 1; i <= n; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    result.push(output || i.toString());
  }
  
  return result;
}

// One-liner version (for showing off)
export const fizzBuzzOneLiner = (n: number): string[] =>
  Array.from({ length: n }, (_, i) => {
    const num = i + 1;
    return (num % 3 === 0 ? "Fizz" : "") + (num % 5 === 0 ? "Buzz" : "") || num.toString();
  });

// Exercise metadata
export const metadata: ExerciseMetadata = {
  title: "FizzBuzz",
  description: "Count from 1 to n, replacing multiples of 3 with 'Fizz', multiples of 5 with 'Buzz', and multiples of both with 'FizzBuzz'",
  concepts: ["loops", "conditionals", "modulo operator", "string manipulation"],
  timeComplexity: "O(n)",
  spaceComplexity: "O(n)"
};

// Example test cases
export const examples: ExampleCase[] = [
  {
    input: 15,
    output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"],
    description: "Classic FizzBuzz up to 15"
  },
  {
    input: 5,
    output: ["1", "2", "Fizz", "4", "Buzz"],
    description: "Small example showing Fizz and Buzz"
  }
];

// Default export for easy importing
export default {
  fizzBuzz,
  fizzBuzzConcat,
  fizzBuzzOneLiner,
  metadata,
  examples
};