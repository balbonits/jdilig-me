// src/utils/fetchExercises.ts
interface Exercise {
  name: string;
  title: string;
  description: string;
  code: string;
  rawContent: string;
  metadata: string | null;
  examples: string | null;
  generatedAt: string;
}

interface ExercisesData {
  exercises: Exercise[];
}

/**
 * Fetches exercises from /generated/exercises.json
 * @returns Promise<Exercise[]> - Array of exercise objects
 * @throws Error if the fetch fails or JSON is invalid
 */
export async function fetchExercises(): Promise<Exercise[]> {
  try {
    // Use relative URL for portability across environments
    const response = await fetch('/generated/exercises.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-cache', // Bypass cache for debugging
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch exercises: ${response.status} ${response.statusText}`);
    }

    const data: ExercisesData = await response.json();

    // Debug: Log the fetched data
    console.debug('Fetched exercises:', data.exercises);

    // Validate data structure
    if (!data.exercises || !Array.isArray(data.exercises)) {
      throw new Error('Invalid exercises data: Expected an array');
    }

    return data.exercises;
  } catch (error) {
    console.error('Error fetching exercises:', error);
    throw error; // Let the caller handle the error
  }
}