/**
 * Utility for converting strings to and from kebab-case.
 * to: Converts a string to kebab-case.
 * from: Converts a kebab-case string back to normal case with spaces and capitalization.
 */
export const kebabCase = {
  to: (str: string) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, ''),

  from: (str: string) =>
    str
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
}
