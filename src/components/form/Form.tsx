import React from 'react';
import { BaseFormControlProps } from './types';

interface FormProps extends BaseFormControlProps {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Form: React.FC<FormProps> = ({
  id,
  name,
  label,
  className,
  required,
  disabled,
  error,
  children,
  onSubmit,
}) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-lg font-semibold text-gray-800">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <form
        id={id}
        name={name}
        onSubmit={onSubmit}
        className={`space-y-6 ${className}`}
        noValidate
        aria-disabled={disabled}
        aria-describedby={error ? `${id}-error` : undefined}
      >
        {children}
      </form>
      {error && (
        <span id={`${id}-error`} className="mt-2 text-sm text-red-500">
          {error}
        </span>
      )}
    </div>
  );
};