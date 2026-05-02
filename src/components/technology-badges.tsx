import { Icon } from '@components'
import type { Technology } from '@types'
import { cn } from '@utils'
import { TECHNOLOGIES_MAP } from '@/consts'

interface Props {
  technologies: Technology[]
  className?: string
}

export const TechnologyBadges = ({ technologies, className }: Props) => (
  <ul className={cn('flex flex-wrap gap-2', className)}>
    {technologies.map(iconName => {
      const displayName = TECHNOLOGIES_MAP[iconName]

      return (
        <li
          className='flex gap-1 items-center bg-white/5 rounded-full px-2 py-1 h-fit border border-white/5'
          key={iconName}
        >
          <Icon name={iconName} className='size-3.5 min-w-3.5 aspect-square' />
          <span className='text-white text-xs font-plus'>{displayName}</span>
        </li>
      )
    })}
  </ul>
)
