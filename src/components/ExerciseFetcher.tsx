'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExercises } from '@store/exercisesSlice';
import { AppDispatch } from '@store';

export default function ExerciseFetcher() {
  const dispatch = useDispatch<AppDispatch>();
  const status = useSelector((state: any) => state.exercises.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchExercises());
    }
  }, [status, dispatch]);

  return null; // No UI
}