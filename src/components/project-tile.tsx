'use client'

import { LinkButton, TechnologyBadges } from '@components'
import { useResponsiveness } from '@hooks'
import type { PrimaryColor, Project } from '@types'
import { cn } from '@utils'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'

interface Props {
  project: Project
  horizontal?: boolean
  className?: string
  color: PrimaryColor
}

export const ProjectTile = ({ project, horizontal, className, color }: Props) => {
  const { title, technologies, overview, code, preview, images } = project
  const imageSize = 500

  const titleKebab = useMemo(() => title.toLowerCase().replace(/\s+/g, '-'), [title])

  const { media } = useResponsiveness()

  const colorStyles: Record<PrimaryColor, { link: string; line: string }> = {
    '10-purple': {
      link: 'from-10-purple/10 hover:border-10-purple/40 border-10-purple/20',
      line: 'from-10-purple/0 via-10-purple/75 to-10-purple/0'
    },
    '20-light-purple': {
      link: 'from-20-light-purple/10 to hover:border-20-light-purple/40 border-20-light-purple/20',
      line: 'from-20-light-purple/0 via-20-light-purple/75 to-20-light-purple/0'
    },
    '30-blue': {
      link: 'from-30-blue/10 hover:border-30-blue/40 border-30-blue/20',
      line: 'from-30-blue/0 via-30-blue/75 to-30-blue/0'
    }
  }

  const horizontalStyles =
    horizontal && media.md
      ? { link: 'flex-row-reverse', img: 'w-1/2' }
      : { link: 'flex-col', img: 'w-full h-64' }

  return (
    <article className={cn('relative', className)} aria-label={`Project card for ${title}`}>
      <Link
        href={`/projects/${titleKebab}`}
        className={cn(
          'flex w-full bg-linear-to-br to-white/10 border transition rounded-[1.25rem] overflow-clip group/project relative',
          horizontalStyles.link,
          colorStyles[color].link
        )}
      >
        <Image
          width={imageSize}
          height={imageSize}
          alt={`Preview of ${title}`}
          src={images[0]}
          className={cn('object-cover', horizontalStyles.img)}
          draggable={false}
          style={{
            maskImage:
              media.md && horizontal
                ? 'linear-gradient(to right, transparent, white 50%)'
                : 'linear-gradient(to bottom, white 50%, transparent)'
          }}
        />

        {/* Main content */}
        <div className='flex flex-col gap-2.5 py-12 pl-12'>
          <h3 className='font-poppins font-bold text-4xl'>{title}</h3>
          <TechnologyBadges technologies={technologies} className='mb-1' />

          {/* Paragraphs (splitted by newline) */}
          <div className='flex flex-col gap-2'>
            {overview.split('\n').map((line, i) => (
              <p className='font-plus text-lg font-light' key={i}>
                {line}
              </p>
            ))}
          </div>

          {/* Virtual space for link buttons */}
          <div className='min-h-10 mt-2 w-full' />
        </div>

        {/* Decorative line at start */}
        <div
          className={cn(
            'absolute h-1 w-full top-0 left-0 bg-linear-to-r group-hover/project:scale-x-150 transition-transform',
            colorStyles[color].line
          )}
        />
      </Link>

      {/* Link buttons, positioned absolutely to avoid hydration issues */}
      <div className='flex items-center gap-2 mt-3 absolute bottom-12 left-12'>
        <LinkButton icon='github' href={code} newTab small>
          Code
        </LinkButton>
        <LinkButton icon='preview' href={preview} newTab small>
          Preview
        </LinkButton>
      </div>
    </article>
  )
}
