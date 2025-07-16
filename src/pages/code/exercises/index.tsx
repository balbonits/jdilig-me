'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CodeExercisesLandingIndex() {
  const [exercises, setExercises] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    fetch('/generated/exercises.json')
      .then((res) => res.json())
      .then((data) => {
        setExercises(data.exercises || []);
        setStatus('succeeded');
      })
      .catch(() => setStatus('failed'));
  }, []);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error loading exercises</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">JS/TS Code - Code Exercises</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {exercises.map((ex: any) => (
          <Link key={ex.name} href={`/code/exercises/${ex.name}`}>
            <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
              <h2 className="text-xl font-semibold">{ex.title}</h2>
              <p className="text-gray-600">{ex.description.split('\n')[0]}...</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}