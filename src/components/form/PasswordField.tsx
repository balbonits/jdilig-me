// PasswordField.tsx
import React, { useState } from 'react';
import { Textbox } from './TextBox';
import { PasswordFieldProps } from './types';

export const PasswordField: React.FC<PasswordFieldProps> = (props) => {
  const { showToggle, ...textboxProps } = props;
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative">
      <Textbox
        {...textboxProps}
        type={isVisible ? 'text' : 'password'}
      />
      {showToggle && (
        <button
          type="button"
          onClick={handleToggle}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-600"
          aria-label={isVisible ? 'Hide password' : 'Show password'}
        >
          {isVisible ? 'Hide' : 'Show'}
        </button>
      )}
    </div>
  );
};