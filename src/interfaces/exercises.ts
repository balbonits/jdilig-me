  export interface ExerciseMetadata {
    title: string;
    description: string;
    concepts: string[];
    timeComplexity?: string;
    spaceComplexity?: string;
  }
  
  export interface ExampleCase {
    input: any;
    output: any;
    description?: string;
  }