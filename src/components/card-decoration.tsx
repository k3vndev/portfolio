import type { PrimaryColor } from '@types'
import { cn } from '@utils'

interface Props {
  className?: string
  color: PrimaryColor
}

export const CardDecoration = ({ className, color }: Props) => {
  const colorStyles: Record<PrimaryColor, string> = {
    '10-purple': 'from-10-purple/0 via-10-purple/75 to-10-purple/0',
    '20-light-purple': 'from-20-light-purple/0 via-20-light-purple/75 to-20-light-purple/0',
    '30-blue': 'from-30-blue/0 via-30-blue/75 to-30-blue/0'
  }

  return (
    <div
      className={cn(
        'absolute h-1 w-full top-0 left-0 bg-linear-to-r group-hover:scale-x-150 transition-transform duration-500',
        colorStyles[color],
        className
      )}
    />
  )
}
