import { Chip, Icon } from '@components'
import type { IconName, PrimaryColor } from '@types'
import { cn } from '@utils'

interface Props {
  title: string
  icon?: IconName
  overview?: string
  chip?: {
    label: string
    color: PrimaryColor
  }
  className?: string
}

export const SectionHeader = ({ title, icon, overview, chip, className }: Props) => (
  <header className={cn('z-10 mb-10', className)}>
    {chip && (
      <Chip color={chip.color} className='mb-4'>
        {chip.label}
      </Chip>
    )}

    <div className='flex items-center gap-2'>
      {icon && <Icon name={icon} className='sm:size-12 sm:min-w-12 size-8 min-w-8 mb-3' />}
      <h2 className='text-gradient font-poppins md:text-6xl sm:text-5xl text-4xl font-bold pb-3'>{title}</h2>
    </div>

    {overview && (
      <h3 className='font-plus text-bluish-gray md:text-2xl sm:text-xl text-lg font-light max-w-4xl'>
        {overview}
      </h3>
    )}
  </header>
)
