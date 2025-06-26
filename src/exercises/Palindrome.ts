const isPalindrome = (str: string) => {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
};

export default {
    isPalindrome,
    metadata,
    examples
  };