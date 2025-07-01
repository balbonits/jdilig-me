export const validateName = (name: string): string | null => {
  if (!name.trim()) {
    return 'Name is required';
  }
  if (name.length < 2) {
    return 'Name must be at least 2 characters long';
  }
  if (!/^[a-zA-Z\s'-]+$/.test(name)) {
    return 'Name can only contain letters, spaces, hyphens, or apostrophes';
  }
  return null;
};

export const validateAddress = (address: string): string | null => {
  if (!address.trim()) {
    return 'Address is required';
  }
  if (address.length < 5) {
    return 'Address must be at least 5 characters long';
  }
  return null;
};

export const validateEmail = (email: string): string | null => {
  if (!email.trim()) {
    return 'Email is required';
  }
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(email)) {
    return 'Please enter a valid email address';
  }
  return null;
};