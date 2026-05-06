import type { PrimaryColor } from '@types'
import { cn } from '@utils'

interface Props {
  children: React.ReactNode
  className?: string
  color: PrimaryColor
  preventHoverEffect?: boolean
}

export const CardWrapper = ({ children, className, color, preventHoverEffect }: Props) => {
  const colorStyles = {
    '10-purple': {
      card: 'from-10-purple/10 hover:[&.animated]:border-10-purple/40 border-10-purple/20',
      line: 'from-10-purple/0 via-10-purple/75 to-10-purple/0'
    },
    '20-light-purple': {
      card: 'from-20-light-purple/10 hover:[&.animated]:border-20-light-purple/40 border-20-light-purple/20',
      line: 'from-20-light-purple/0 via-20-light-purple/75 to-20-light-purple/0'
    },
    '30-blue': {
      card: 'from-30-blue/10 hover:[&.animated]:border-30-blue/40 border-30-blue/20',
      line: 'from-30-blue/0 via-30-blue/75 to-30-blue/0'
    }
  }

  return (
    <article
      className={cn(
        'relative group/card bg-linear-to-br to-white/10 border transition rounded-[1.25rem] overflow-clip backdrop-blur-md p-(--card-p)',
        !preventHoverEffect && 'animated',
        colorStyles[color].card,
        className
      )}
    >
      {children}

      <div
        className={cn(
          'absolute h-1 w-full top-0 left-0 bg-linear-to-r transition-transform duration-500',
          !preventHoverEffect && 'group-hover/card:scale-x-150',
          colorStyles[color].line
        )}
      />
    </article>
  )
}
