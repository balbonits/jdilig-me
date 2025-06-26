export function areAnagrams(str1: string, str2: string): boolean {
    const anagramPreparer = (str: string): string => {
        return str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');
    };

    return anagramPreparer(str1) === anagramPreparer(str2);
}