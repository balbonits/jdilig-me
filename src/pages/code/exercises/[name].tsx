'use client';

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

function extractLiteral(str: string) {
  const match = str.match(/=\s*(\{[\s\S]*\}|\[[\s\S]*\]);?$/);
  if (!match) return {};
  try {
    // Try to convert to JSON (quote keys, single to double quotes)
    return JSON.parse(
      match[1]
        .replace(/(\w+):/g, '"$1":') // quote keys
        .replace(/'/g, '"') // single to double quotes
        .replace(/,(\s*[\]}])/g, '$1') // remove trailing commas
    );
  } catch {
    // Fallback: use Function to safely evaluate
    return Function('"use strict";return (' + match[1] + ')')();
  }
}

export default function ExercisePage() {
  const router = useRouter();
  const { name } = router.query;
  type Exercise = {
    title: string;
    description: string;
    code: string;
    metadata?: string;
    examples?: string;
  };

  const [ex, setEx] = useState<Exercise | null>(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    if (name) {
      fetch('/generated/exercises.json')
        .then((res) => res.json())
        .then((data) => {
          const foundEx = data.exercises.find((e: any) => e.name === name);
          setEx(foundEx);
          setStatus(foundEx ? 'succeeded' : 'failed');
        })
        .catch(() => setStatus('failed'));
    }
  }, [name]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed' || !ex) return <div>Exercise not found</div>;

  const metadata = ex.metadata ? extractLiteral(ex.metadata) : {};
  const rawExamples = ex.examples ? extractLiteral(ex.examples) : [];
  const examples = Array.isArray(rawExamples) ? rawExamples : [];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{ex.title}</h1>
      <p className="mb-4 whitespace-pre-wrap">{ex.description}</p>
      <p>Complexity: Time {metadata.timeComplexity || 'N/A'}, Space {metadata.spaceComplexity || 'N/A'}</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Code</h2>
      <SyntaxHighlighter language="typescript">
        {ex.code}
      </SyntaxHighlighter>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Test Cases</h2>
      <table className="table-auto border-collapse border w-full">
        <thead>
          <tr><th className="border p-2">Input</th><th className="border p-2">Output</th><th className="border p-2">Description</th></tr>
        </thead>
        <tbody>
          {examples.map((caseItem: any, idx: number) => (
            <tr key={idx}>
              <td className="border p-2">{JSON.stringify(caseItem.input)}</td>
              <td className="border p-2">{JSON.stringify(caseItem.output)}</td>
              <td className="border p-2">{caseItem.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}