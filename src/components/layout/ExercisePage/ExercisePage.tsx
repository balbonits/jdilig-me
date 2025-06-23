// /src/components/layout/ExercisePage/ExercisePage.tsx
import React, { useState } from 'react';
import { ExerciseMetadata, ExampleCase } from '@interfaces/exercises';
import './ExercisePage.css';

interface ExercisePageProps {
  metadata: ExerciseMetadata;
  examples: ExampleCase[];
  codeContent: string;
  runFunction: (input: any) => any;
}

export default function ExercisePage({ 
  metadata, 
  examples, 
  codeContent, 
  runFunction 
}: ExercisePageProps) {
  // State management for interactive features
  const [output, setOutput] = useState<any[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [currentInput, setCurrentInput] = useState(examples[0]?.input || 15);

  // Execute the exercise function with current input
  const handleRun = () => {
    setIsRunning(true);
    try {
      const result = runFunction(currentInput);
      // Convert single values to arrays for consistent display
      setOutput(Array.isArray(result) ? result : [result]);
    } catch (error) {
      setOutput([`Error: ${error}`]);
    }
    setIsRunning(false);
  };

  // Clear output and reset input to default
  const handleReset = () => {
    setOutput([]);
    setCurrentInput(examples[0]?.input || 15);
  };

  return (
    <div className="exercise-container">
      {/* DESCRIPTION SECTION - Exercise info, concepts, examples */}
      <section className="description-section">
        <h1 className="title">{metadata.title}</h1>
        <p className="description">{metadata.description}</p>
        
        {/* Concepts and performance info grid */}
        <div className="info-grid">
          <div>
            <h3 className="section-heading">Concepts</h3>
            <div className="concepts-container">
              {metadata.concepts.map((concept, i) => (
                <span key={i} className="concept-tag">
                  {concept}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="section-heading">Performance</h3>
            <p className="performance-text">
              Time: {metadata.timeComplexity} | Space: {metadata.spaceComplexity}
            </p>
          </div>
        </div>

        {/* Example test cases display */}
        <div className="examples-section">
          <h3 className="section-heading">Examples</h3>
          {examples.map((example, i) => (
            <div key={i} className="example-item">
              <p className="example-code">
                Input: {JSON.stringify(example.input)} → 
                Output: {JSON.stringify(example.output).slice(0, 100)}
                {JSON.stringify(example.output).length > 100 && '...'}
              </p>
              {example.description && (
                <p className="example-description">{example.description}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* MAIN CONTENT GRID - Code and Output side by side */}
      <div className="main-grid">
        
        {/* CODE SECTION - Display the TypeScript source code */}
        <section className="code-section">
          <h2 className="section-title">Code</h2>
          {/* Code display with syntax highlighting styling */}
          <pre className="code-display">
            <code>{codeContent}</code>
          </pre>
        </section>

        {/* OUTPUT SECTION - Interactive execution and results */}
        <section className="output-section">
          <div className="output-header">
            <h2 className="section-title">Output</h2>
            
            {/* Interactive controls for running the exercise */}
            <div className="controls">
              {/* Input parameter control */}
              <input
                type="number"
                value={currentInput}
                onChange={(e) => setCurrentInput(Number(e.target.value))}
                className="input-field"
                min="1"
                max="100"
                title="Input value for the function"
              />
              
              {/* Run button - executes the exercise function */}
              <button
                onClick={handleRun}
                disabled={isRunning}
                className="btn btn-run"
              >
                {isRunning ? 'Running...' : 'Run'}
              </button>
              
              {/* Reset button - clears output and resets input */}
              <button
                onClick={handleReset}
                className="btn btn-reset"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Output display area */}
          <div className="output-area">
            {output.length === 0 ? (
              <p className="output-placeholder">Run the code to see output</p>
            ) : (
              /* Formatted output with line numbers */
              <div className="output-content">
                {output.map((item, i) => (
                  <div key={i} className="output-line">
                    <span className="line-number">{i + 1}:</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}