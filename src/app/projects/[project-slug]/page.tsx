'use client'

import { ProjectLinks, Section, SectionHeader, TechnologyBadges } from '@components'
import { GAMEDEV_PROJECT, PROJECTS } from '@consts'
import { Carousel, CarouselItem, NavigationDots } from '@k3vndev/react-carousel'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

export default function ProjectDetailsPage() {
  const params = useParams()
  const projectSlug = params['project-slug']

  const project = useMemo(() => {
    if (typeof projectSlug !== 'string') return null

    return (
      [...PROJECTS, GAMEDEV_PROJECT].find(
        p => p.title.toLowerCase().replace(/\s+/g, '-') === projectSlug.toLowerCase()
      ) || null
    )
  }, [params])

  if (!project) {
    // TODO: Add a more user-friendly 404 page
    return <h1>Project Not Found</h1>
  }

  const images = Array(7).fill(project.images[0])
  console.log(images)

  return (
    <Section className='mt-12 pb-0 **:[.inner]:gap-0'>
      <SectionHeader
        title={project.title}
        overview={project.overview}
        className='mb-4'
        chip={{
          color: '30-blue',
          label: 'Selected Project'
        }}
      />
      <TechnologyBadges technologies={project.technologies} />

      <ProjectLinks code={project.code} preview={project.preview} className='mt-6' />

      <Carousel
        className='max-w-full mt-8 rounded-3xl mb-32'
        itemsCount={images.length}
        gap={16}
        visibleItems={2}
        infiniteScroll
        autoScroll={{
          slideInterval: 7000
        }}
        navigationHandler={
          <NavigationDots className='[&>.active]:bg-linear-to-br [&>.active]:from-10-purple [&>.active]:via-20-light-purple [&>.active]:to-30-blue' />
        }
      >
        {images.map((img, index) => (
          <CarouselItem key={index} className='h-72 rounded-3xl bg-white/10 overflow-clip'>
            <Image
              src={`/projects/${projectSlug}/${img}`}
              alt={`Project image ${index + 1}`}
              width={500}
              height={400}
              className='size-full object-cover rounded-3xl border-y border-white/10'
            />
          </CarouselItem>
        ))}
      </Carousel>
    </Section>
  )
}
