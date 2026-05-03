import type { PrimaryColor } from '@types'

/**
 * Utility function to get the appropriate Tailwind CSS classes for card colors based on the provided primary color.
 * @param color - The primary color to determine the card's color scheme.
 * @returns A string of Tailwind CSS classes for the card's background and border colors.
 */
export const getCardColorStyles = (color: PrimaryColor) =>
  ({
    '10-purple': 'from-10-purple/10 hover:border-10-purple/40 border-10-purple/20',
    '20-light-purple': 'from-20-light-purple/10 to hover:border-20-light-purple/40 border-20-light-purple/20',
    '30-blue': 'from-30-blue/10 hover:border-30-blue/40 border-30-blue/20'
  })[color]
