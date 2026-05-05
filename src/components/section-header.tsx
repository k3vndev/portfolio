'use client'

import { Chip, Icon } from '@components'
import type { IconName, PrimaryColor } from '@types'
import { cn } from '@utils'
import { useMemo } from 'react'

interface Props {
  title: string
  icon?: IconName
  overview?: string
  chip?: {
    label: string
    color: PrimaryColor
  }
  className?: string
  titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const SectionHeader = ({ title, icon, overview, chip, className, titleTag = 'h2' }: Props) => {
  const TitleTag = titleTag

  const splitParagraphs = useMemo(
    () => (overview ? overview.split('\n').filter(p => p.trim() !== '') : []),
    [overview]
  )

  return (
    <header className={cn('z-10 mb-10', className)}>
      {chip && (
        <Chip color={chip.color} className='mb-4'>
          {chip.label}
        </Chip>
      )}

      <div className='flex items-center gap-2'>
        {icon && <Icon name={icon} className='sm:size-12 sm:min-w-12 size-8 min-w-8 mb-3' />}
        <TitleTag className='text-gradient font-poppins md:text-6xl sm:text-5xl text-4xl font-bold pb-3'>
          {title}
        </TitleTag>
      </div>

      {overview && (
        <h3 className='font-plus text-bluish-gray md:text-2xl sm:text-xl text-lg font-light max-w-4xl flex flex-col gap-4'>
          {splitParagraphs.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </h3>
      )}
    </header>
  )
}
