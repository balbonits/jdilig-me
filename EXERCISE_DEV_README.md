# Exercise Development Guide

This document outlines the conventions and structure required for coding exercises in the `/src/exercises/` directory.

## File Structure Requirements

### Directory Layout
```
/src/exercises/
├── fizzbuzz.ts
├── palindrome.ts
└── [exercise-name].ts
```

### File Naming
- Use lowercase with no spaces: `fizzbuzz.ts`, `twosum.ts`
- Match the exercise name exactly for build script automation

## TypeScript File Convention

Each exercise file must follow this exact structure:

```typescript
import { ExerciseMetadata, ExampleCase } from '@interfaces/exercises';

/**
 * Exercise Title
 * 
 * DESCRIPTION:
 * Brief explanation of what the exercise does
 * 
 * EXAMPLE (n=15):
 * Show expected input/output
 * 
 * CONCEPTS:
 * - List of programming concepts demonstrated
 * 
 * PERFORMANCE:
 * - Time: O(n) complexity
 * - Space: O(n) complexity
 * 
 * Additional notes or implementation details.
 */

// Main implementation
export function primaryFunction(param: type): returnType {
  // implementation
}

// Alternative implementations (optional)
export function alternativeFunction(param: type): returnType {
  // different approach
}

export const oneLineFunction = (param: type): returnType => {
  // concise version
};

// Required metadata
export const metadata: ExerciseMetadata = {
  title: "Exercise Name",
  description: "Brief description matching the header comment",
  concepts: ["concept1", "concept2", "concept3"],
  timeComplexity: "O(n)",
  spaceComplexity: "O(n)"
};

// Required examples
export const examples: ExampleCase[] = [
  {
    input: sampleInput,
    output: expectedOutput,
    description: "Brief explanation of this test case"
  }
];

// Default export for easy importing
export default {
  primaryFunction,
  alternativeFunction,
  oneLineFunction,
  metadata,
  examples
};
```

## Critical Requirements

### Header Comment
- **Must be first** in the file after imports
- Use `/** ... */` format (JSDoc style)
- Include DESCRIPTION, EXAMPLE, CONCEPTS, PERFORMANCE sections

### Function Exports
- All functions must use `export` keyword
- Use descriptive function names
- Include multiple implementations when helpful

### Metadata Export
- **Exact name**: `metadata`
- **Exact type**: `ExerciseMetadata`
- Match description with header comment

### Examples Export
- **Exact name**: `examples`
- **Exact type**: `ExampleCase[]`
- Include realistic test cases with descriptions

## Build Script Integration

The `/scripts/generate-exercises.js` script extracts:

1. **Header comment** → Page description section
2. **Exported functions** → Code display panel
3. **Metadata object** → Exercise information
4. **Examples array** → Test cases and input defaults

### Extraction Patterns
- Header: First `/** ... */` comment block
- Functions: All `export function` and `export const` (excluding metadata/examples)
- Metadata: `export const metadata`
- Examples: `export const examples`

## Best Practices

### Code Organization
- Start with simplest implementation
- Add alternative approaches
- Include one-liner versions when appropriate
- Comment complex logic

### Performance Notes
- Always include Big O notation
- Explain time/space trade-offs in comments
- Consider edge cases in examples

### Testing
- Provide 2-3 example cases minimum
- Include edge cases (empty input, single item, etc.)
- Add descriptive explanations for each example

## Example Implementation

See `/src/exercises/fizzbuzz.ts` for a complete reference implementation following all conventions.

## Troubleshooting

### Build Script Issues
- Verify exact naming: `metadata` and `examples`
- Ensure header comment is first JSDoc block
- Check that all functions use `export` keyword
- Validate TypeScript syntax

### Common Mistakes
- Missing header comment
- Wrong variable names for metadata/examples
- Functions not exported
- Invalid TypeScript syntax