/**
 * Common props shared by all library components, grouped by category.
 */

// 1. Basic/HTML props
export interface BasicHTMLProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  name?: string;
  tabIndex?: number;
  title?: string;
  role?: string;
}

// 2. Testing & Analytics props
export interface TestingProps {
  'data-testid'?: string;
  componentId?: string;
}

// 3. Accessibility (ARIA) props
export interface AccessibilityProps {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
  'aria-required'?: boolean;
  'aria-disabled'?: boolean;
  'aria-checked'?: boolean;
  'aria-expanded'?: boolean;
  'aria-controls'?: string;
  // Add more ARIA attributes as needed
}

// 4. Combine all shared props for library components
export interface LibraryComponentProps
  extends BasicHTMLProps,
    TestingProps,
    AccessibilityProps {}

// 5. Base props for all form controls
export interface BaseFormControlProps extends LibraryComponentProps {
  label?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
}

// 6. Example: Textbox props
export interface TextboxProps extends BaseFormControlProps {
  type?: 'text' | 'email' | 'password' | 'number';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

// 7. Example: Password field props
export interface PasswordFieldProps extends Omit<TextboxProps, 'type'> {
  showToggle?: boolean;
}