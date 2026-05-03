import type { PrimaryColor } from '@types'

/**
 * Get the primary color based on the index.
 * The colors will cycle through the 3 defined primary colors.
 *
 * For example:
 * - index 0 will return '10-purple'
 * - index 1 will return '20-light-purple'
 * - index 2 will return '30-blue'
 * - index 3 will return '10-purple' again, and so on.
 *
 * @param index - The index to determine the primary color.
 * @returns The primary color tailwind name as a string.
 */
export const getPrimaryColor = (index: number): PrimaryColor => {
  const colors: PrimaryColor[] = ['10-purple', '20-light-purple', '30-blue']
  return colors[index % colors.length]
}
