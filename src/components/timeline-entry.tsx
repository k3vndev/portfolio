import { CardDecoration, Chip } from '@components'
import { PRIMARY_COLORS_MAP } from '@consts'
import type { TimelineEntry as TimelineEntryType } from '@types'
import { cn, getCardColorStyles, getPrimaryColor } from '@utils'

interface Props extends TimelineEntryType {
  index: number
}

export const TimelineEntry = ({ title, overview, index, year, chip }: Props) => {
  const color = getPrimaryColor(index)
  const cardStyle = getCardColorStyles(color)
  const colorHex = PRIMARY_COLORS_MAP[color]

  return (
    <article className='flex sm:gap-6 gap-3'>
      <div className='flex flex-col items-center'>
        <div className='sm:size-8 size-5 rounded-full aspect-square' style={{ backgroundColor: colorHex }} />
        <div
          className='h-full sm:w-2 w-1.5 -translate-y-1'
          style={{ background: `linear-gradient(${colorHex}, transparent)` }}
        />
      </div>

      <main className={cn('base-card group relative flex flex-col w-full p-12', cardStyle)}>
        <CardDecoration color={color} />

        <div className='flex items-center justify-between w-full mb-2 flex-wrap gap-x-4 gap-y-1'>
          <h4 className={cn('font-poppins md:text-xl text-lg font-bold')} style={{ color: colorHex }}>
            {year}
          </h4>
          <Chip color={color}>{chip}</Chip>
        </div>

        <h3 className='font-poppins font-bold md:text-4xl text-2xl text-white mb-2'>{title}</h3>
        <p className='font-plus md:text-xl text-lg text-bluish-gray'>{overview}</p>
      </main>
    </article>
  )
}
