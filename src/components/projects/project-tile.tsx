'use client'

import { CardDecoration, TechnologyBadges } from '@components'
import { ProjectLinks } from '@components/projects'
import { useResponsiveness } from '@hooks'
import type { PrimaryColor, Project } from '@types'
import { cn, getCardColorStyles, kebabCase } from '@utils'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'

interface Props {
  project: Project
  horizontal?: boolean
  className?: string
  color: PrimaryColor
  imageSize?: {
    width: number
    height: number
  }
}

export const ProjectTile = ({ project, horizontal, className, color, imageSize }: Props) => {
  const { title, technologies, overview, code, preview, images, metrics } = project
  const titleKebab = useMemo(() => kebabCase.to(title), [title])

  const { media } = useResponsiveness()

  const imageSrc = useMemo(() => {
    const hasImages = images && images.length > 0
    if (!hasImages) return '/projects/studymate/1.webp' // Default image if none provided

    return `/projects/${titleKebab}/${images[0]}`
  }, [titleKebab, images])

  const horizontalStyles =
    horizontal && media.lg
      ? { link: 'flex-row-reverse', img: 'w-1/2', main: 'md:py-12 sm:py-8 py-4 md:pl-12 sm:pl-8 pl-4' }
      : { link: 'flex-col', img: 'w-full h-64', main: 'md:pb-12 sm:pb-8 pb-4 md:px-12 sm:px-8 px-4' }

  const maskImageGradient =
    media.lg && horizontal
      ? 'linear-gradient(to right, transparent, white 50%)'
      : 'linear-gradient(to bottom, white 50%, transparent)'

  return (
    <article className={cn('relative', className)} aria-label={`Project card for ${title}`}>
      <Link
        href={`/projects/${titleKebab}`}
        className={cn('flex w-full base-card group', horizontalStyles.link, getCardColorStyles(color))}
      >
        <Image
          width={imageSize?.width ?? 600}
          height={imageSize?.height ?? 500}
          alt={`Preview of ${title}`}
          src={imageSrc}
          className={cn('object-cover', horizontalStyles.img)}
          draggable={false}
          style={{
            WebkitMaskImage: maskImageGradient,
            maskImage: maskImageGradient
          }}
        />

        {/* Main content */}
        <div className={cn('flex flex-col gap-2.5 w-full', horizontalStyles.main)}>
          <h3 className='font-poppins font-bold text-4xl'>{title}</h3>
          <TechnologyBadges technologies={technologies} className='mb-1' />

          {/* Paragraphs (splitted by newline) */}
          <div className='flex flex-col gap-2'>
            {overview.split('\n').map((line, i) => (
              <p
                className='font-plus text-lg font-light text-white/75 group-hover:text-white/85 transition'
                key={i}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Virtual space for link buttons */}
          {(code || preview) && <div className='min-h-10 mt-2 w-full' />}

          {/* Metrics */}
          {metrics && (
            <div className='flex gap-2 mt-4'>
              {metrics.map((metric, i) => (
                <div
                  key={i}
                  className={cn(
                    'flex flex-col items-start font-poppins rounded-xl px-3 py-1 border border-white/10 bg-linear-to-r from-10-purple/10 via-20-light-purple/10 to-30-blue/10 pointer-events-none'
                  )}
                >
                  <span className='font-semibold text-lg text-white/85'>{metric.value}</span>
                  <span className='text-xs font-light uppercase text-nowrap text-bluish-gray'>
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Decorative line at start */}
        <CardDecoration color={color} />
      </Link>

      {/* Link buttons, positioned absolutely to avoid hydration issues */}
      <ProjectLinks
        code={code}
        preview={preview}
        className={cn(
          'absolute md:left-12 sm:left-8 left-4 z-10',
          metrics?.length ? 'md:bottom-34 sm:bottom-28 bottom-24' : 'md:bottom-12 sm:bottom-8 bottom-4'
        )}
      />
    </article>
  )
}
