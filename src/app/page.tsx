import { LinkButton, ProjectTile, Section, SectionHeader } from '@components'
import { SpiralsBG } from '@components/backgrounds'
import { PROJECTS } from '@consts'
import type { PrimaryColor, Social } from '@types'
import { useMemo } from 'react'

export default function Home() {
  const socials: Social[] = [
    {
      icon: 'resume',
      href: '/curriculum-vitae.pdf',
      label: 'Resume'
    },
    {
      icon: 'github',
      href: 'https://github.com/k3vndev',
      label: 'GitHub'
    },
    {
      icon: 'linked-in',
      href: 'https://www.linkedin.com/in/kevinrdev/',
      label: 'LinkedIn'
    }
  ]

  const projects = useMemo(() => {
    const colors: PrimaryColor[] = ['10-purple', '20-light-purple', '30-blue']
    const maxTechnologies = 3

    return PROJECTS.slice(0, 3).map((project, index) => ({
      project: {
        ...project,
        technologies: project.technologies.slice(0, maxTechnologies)
      },
      color: colors[index]
    }))
  }, [])

  return (
    <>
      {/* Hero */}
      <Section className='lg:pt-64 md:pt-48 pt-32 md:pb-48 pb-32'>
        <div className='flex flex-col font-bold font-poppins not-sm:gap-2'>
          <h2 className='lg:text-6xl text-5xl text-white'>Hello, I'm</h2>
          <h1 className='lg:text-8xl md:text-7xl text-6xl text-gradient pb-3'>Kevin Rodríguez</h1>
        </div>

        <h2 className='font-plus text-bluish-gray lg:text-3xl text-2xl font-medium'>
          I build full-stack web applications with Next.js and TypeScript. <br />
          From dashboards to AI tools, I focus on shipping quality.
        </h2>

        <div className='flex flex-wrap items-center sm:gap-4 gap-2 mt-2'>
          {socials.map(({ icon, href, label }) => (
            <LinkButton key={label} href={href} newTab icon={icon}>
              {label}
            </LinkButton>
          ))}
        </div>
      </Section>

      {/* Web projects */}
      <Section className='[&>div]:gap-12' bordered>
        <SpiralsBG />

        <SectionHeader
          title='Featured Projects'
          icon='code'
          overview='Full-stack products built from scratch, featuring real-world logic, scalable systems, and AI integration.'
          chip={{
            color: '10-purple',
            label: 'Production Apps'
          }}
        />

        <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
          {projects.map(({ project, color }, i) => (
            <ProjectTile
              key={project.title}
              project={project}
              horizontal={!i}
              color={color}
              className='first:lg:col-[span_2]'
            />
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section>
        <SectionHeader
          title='My Experience'
          overview='My journey spans game development, full-stack projects, and freelance work, focused on building systems and shipping real products.'
          icon='briefcase'
          chip={{
            color: '20-light-purple',
            label: 'Freelance Work'
          }}
        />
      </Section>
    </>
  )
}
