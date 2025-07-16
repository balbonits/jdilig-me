`use client`;

import React from 'react';
import { BaseFormControlProps } from './types';

interface ButtonProps extends BaseFormControlProps {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  id,
  name,
  label,
  type = 'button',
  children,
  className,
  required,
  disabled,
  error,
  onClick,
}) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-1 text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <button
        id={id}
        name={name}
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      >
        {children}
      </button>
      {error && (
        <span id={`${id}-error`} className="mt-1 text-sm text-red-500">
          {error}
        </span>
      )}
    </div>
  );
};