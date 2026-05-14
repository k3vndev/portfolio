'use client'

import { NotFoundDisplay, Section, SectionHeader, TechnologyBadges } from '@components'
import { ProjectDetails, ProjectLinks } from '@components/projects'
import { GAMEDEV_PROJECT, PROJECTS } from '@consts'
import { useResponsiveness } from '@hooks'
import { Carousel, CarouselItem, NavigationDots } from '@k3vndev/react-carousel'
import { kebabCase } from '@utils'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

export default function ProjectDetailsPage() {
  const params = useParams()
  const projectSlug = params['project-slug']
  const { media, loaded } = useResponsiveness()

  const project = useMemo(() => {
    if (typeof projectSlug !== 'string') return null

    return (
      [...PROJECTS, GAMEDEV_PROJECT].find(p => kebabCase.to(p.title) === projectSlug.toLowerCase()) || null
    )
  }, [params])

  if (!project) {
    return (
      <NotFoundDisplay
        message='Sorry, the project you are looking for does not exist or may have been removed.'
        action={{
          label: 'Back to Projects',
          href: '/projects'
        }}
      />
    )
  }

  return (
    <>
      <Section className='mt-12 pb-0 **:[.inner]:gap-0'>
        <SectionHeader
          title={project.title}
          overview={project.description || project.overview}
          className='mb-4 [&>h3]:max-w-full'
          chip={{
            color: '30-blue',
            label: 'Selected Project'
          }}
        />
        <TechnologyBadges technologies={project.technologies} />

        <ProjectLinks code={project.code} preview={project.preview} className='mt-6' />

        {loaded ? (
          <Carousel
            className='max-w-full mt-8 rounded-3xl'
            itemsCount={project.images.length}
            gap={16}
            visibleItems={media.sm ? 2 : 1}
            infiniteScroll
            autoScroll={{
              slideInterval: 7000
            }}
            navigationHandler={
              <NavigationDots className='[&>.active]:bg-linear-to-br [&>.active]:from-10-purple [&>.active]:via-20-light-purple [&>.active]:to-30-blue' />
            }
          >
            {project.images.map((img, index) => (
              <CarouselItem key={index} className='h-72 rounded-3xl bg-10-purple/10 overflow-clip'>
                <Image
                  src={`/projects/${projectSlug}/${img}`}
                  alt={`Project image ${index + 1}`}
                  width={500}
                  height={400}
                  className='size-full object-cover rounded-3xl border-y border-10-purple/10'
                />
              </CarouselItem>
            ))}
          </Carousel>
        ) : (
          <div className='h-72 mt-8 rounded-3xl bg-10-purple/10 animate-pulse' />
        )}
      </Section>

      {project.details && (
        <Section className='**:[.inner]:gap-4 pt-0 mt-16'>
          {project.details.map((details, index) => (
            <ProjectDetails key={index} {...details} />
          ))}
        </Section>
      )}
    </>
  )
}
