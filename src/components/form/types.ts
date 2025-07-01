// types.ts
export interface BaseFormControlProps {
  id: string;
  name: string;
  label?: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
}

export interface TextboxProps extends BaseFormControlProps {
  type?: 'text' | 'email' | 'password' | 'number';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export interface PasswordFieldProps extends Omit<TextboxProps, 'type'> {
  showToggle?: boolean;
}