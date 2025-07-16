'use client'; // Client-side for state

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Exercise {
  name: string;
  title: string;
  description: string;
  code: string;
  metadata?: string;
  examples?: string;
  // Add other fields as needed
}

interface ExercisesContextType {
  exercises: Exercise[];
  loading: boolean;
}

const ExercisesContext = createContext<ExercisesContextType | undefined>(undefined);

export function ExercisesProvider({ children }: { children: ReactNode }) {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercises = async () => {
      const cached = localStorage.getItem('exercises');
      if (cached) {
        setExercises(JSON.parse(cached));
        setLoading(false);
        return;
      }

      try {
        const res = await fetch('/generated/exercises.json');
        if (!res.ok) throw new Error('Fetch failed');
        const { exercises: data } = await res.json();
        setExercises(data);
        localStorage.setItem('exercises', JSON.stringify(data));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  return (
    <ExercisesContext.Provider value={{ exercises, loading }}>
      {children}
    </ExercisesContext.Provider>
  );
}

export const useExercises = () => {
  const context = useContext(ExercisesContext);
  if (!context) throw new Error('useExercises must be used within ExercisesProvider');
  return context;
};