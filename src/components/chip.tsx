import type { PrimaryColor } from '@types'
import { cn } from '@utils'

interface Props {
  children: React.ReactNode
  color: PrimaryColor
  className?: string
}

export const Chip = ({ children, color, className }: Props) => {
  const colorVariant: Record<PrimaryColor, { bg: string; border: string; dot: string }> = {
    '10-purple': {
      bg: 'bg-10-purple/10',
      border: 'border-10-purple/20',
      dot: 'bg-10-purple'
    },
    '20-light-purple': {
      bg: 'bg-20-light-purple/10',
      border: 'border-20-light-purple/20',
      dot: 'bg-20-light-purple'
    },
    '30-blue': {
      bg: 'bg-30-blue/10',
      border: 'border-30-blue/20',
      dot: 'bg-30-blue'
    }
  }
  const styles = colorVariant[color]

  return (
    <small
      className={cn(
        'flex items-center gap-2 border w-fit px-4 py-0.75 rounded-full',
        styles.border,
        styles.bg,
        className
      )}
    >
      <div className={cn('size-3 rounded-full', styles.dot)} />
      <span className='text-[#C5D0DE] text-base font-plus'>{children}</span>
    </small>
  )
}
