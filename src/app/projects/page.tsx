'use client'

import { Section, SectionHeader } from '@components'
import { ProjectTile } from '@components/projects'
import { GAMEDEV_PROJECT, PROJECTS } from '@consts'
import { useResponsiveness } from '@hooks'
import type { Project } from '@types'
import { getPrimaryColor } from '@utils'
import { useMemo } from 'react'

export default function ProjectsPage() {
  // Split projects into two lists for a staggered layout
  const { media } = useResponsiveness()

  const allProjects = useMemo(() => [...PROJECTS, GAMEDEV_PROJECT], [])

  const [projectsSplitA, projectsSplitB] = useMemo(() => {
    const a: Project[] = []
    const b: Project[] = []

    for (let i = 0; i < allProjects.length; i++) {
      if (i % 2 === 0) {
        a.push(allProjects[i])
      } else {
        b.push(allProjects[i])
      }
    }

    return [a, b]
  }, [allProjects])

  return (
    <Section className='sm:mt-16 mt-12'>
      <SectionHeader
        title='Explore my best work'
        overview='From full-scale applications to focused experiments, these projects reflect how I design, build, and ship real products.'
        chip={{
          label: 'Built & Shipped',
          color: '10-purple'
        }}
      />

      <main className='flex gap-8 w-full'>
        {media.lg ? (
          <>
            <ProjectsList projects={projectsSplitA} />
            <ProjectsList projects={projectsSplitB} />
          </>
        ) : (
          <ProjectsList projects={allProjects} />
        )}
      </main>
    </Section>
  )
}

interface ProjectsListProps {
  projects: Project[]
}

const ProjectsList = ({ projects }: ProjectsListProps) => (
  <div className='flex flex-col gap-8 w-full'>
    {projects.map((project, index) => (
      <ProjectTile key={project.title} project={project} color={getPrimaryColor(index)} />
    ))}
  </div>
)
