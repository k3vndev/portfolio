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
  const { title, technologies, overview, code, preview, images, metrics } = project
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

  const imageSrc = (() => {
    const hasImages = images && images.length > 0
    if (!hasImages) return '/studymate/1.webp' // Default image if none provided

    return `/${titleKebab}/${images[0]}`
  })()

  const horizontalStyles =
    horizontal && media.lg
      ? { link: 'flex-row-reverse', img: 'w-1/2', main: 'md:py-12 sm:py-8 py-4 md:pl-12 sm:pl-8 pl-4' }
      : { link: 'flex-col', img: 'w-full h-64', main: 'md:pb-12 sm:pb-8 pb-4 md:px-12 sm:px-8 px-4' }

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
          src={imageSrc}
          className={cn('object-cover', horizontalStyles.img)}
          draggable={false}
          style={{
            maskImage:
              media.lg && horizontal
                ? 'linear-gradient(to right, transparent, white 50%)'
                : 'linear-gradient(to bottom, white 50%, transparent)'
          }}
        />

        {/* Main content */}
        <div className={cn('flex flex-col gap-2.5 w-full', horizontalStyles.main)}>
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

          {/* Metrics */}
          {metrics && (
            <div className='flex gap-2 mt-4'>
              {metrics.map((metric, i) => (
                <div
                  key={i}
                  className={cn(
                    'flex flex-col items-start font-poppins rounded-xl px-3 py-1 border bg-linear-to-br to-white/5 pointer-events-none',
                    colorStyles[color].link
                  )}
                >
                  <span className='font-semibold text-lg'>{metric.value}</span>
                  <span className='text-xs font-light uppercase text-nowrap text-bluish-gray'>
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          )}
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
      <div
        className={cn(
          'flex items-center gap-2 mt-3 absolute md:left-12 sm:left-8 left-4',
          metrics?.length ? 'md:bottom-34 sm:bottom-28 bottom-24' : 'md:bottom-12 sm:bottom-8 bottom-4'
        )}
      >
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
