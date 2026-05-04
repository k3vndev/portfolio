import { LinkButton, ProjectTile, Section, SectionHeader, TimelineEntry } from '@components'
import { GridBG, SpiralsBG } from '@components/backgrounds'
import { GAMEDEV_PROJECT, PROJECTS, SOCIALS, TIMELINE_ENTRIES } from '@consts'
import { getPrimaryColor } from '@utils'
import { useMemo } from 'react'

export default function Home() {
  const socials = useMemo(() => Object.values(SOCIALS), [])

  const projects = useMemo(() => {
    const maxTechnologies = 3

    return PROJECTS.slice(0, 3).map((project, index) => ({
      project: {
        ...project,
        technologies: project.technologies.slice(0, maxTechnologies)
      },
      color: getPrimaryColor(index)
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
      <Section bordered>
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

        <div className='flex flex-col gap-6'>
          {TIMELINE_ENTRIES.map((entry, index) => (
            <TimelineEntry key={index} index={index} {...entry} />
          ))}
        </div>
      </Section>

      <Section bordered>
        <SectionHeader
          title='Game Development'
          icon='gamepad'
          overview='My experience here has strengthened my ability to design and manage complex systems, handle state-driven logic, and structure large interactive projects from scratch.'
          chip={{
            color: '30-blue',
            label: 'System Design'
          }}
        />

        <ProjectTile
          className='**:[img]:h-110'
          project={GAMEDEV_PROJECT}
          color='30-blue'
          imageSize={{ width: 900, height: 500 }}
        />

        <GridBG />
      </Section>

      <Section>
        <SectionHeader
          title='About Me'
          icon='user'
          chip={{
            color: '10-purple',
            label: 'Builder Mindset'
          }}
          className='mb-0'
        />

        <div className='flex flex-col gap-4 text-bluish-gray text-xl font-plus font-medium **:[strong]:text-low-gradient **:[strong]:font-bold'>
          <p>
            I’m Kevin Rodríguez, a full-stack developer focused on building scalable web applications with
            <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>Supabase</strong>. I turn ideas
            into production-ready products with strong technical foundations.
          </p>
          <p>
            I focus on <strong>system design</strong>, <strong>clean architecture</strong>, and creating
            intuitive, reliable user experiences. My background in game development helps me manage{' '}
            <strong>complex logic</strong> and structure large applications. I’ve worked on personal and
            freelance projects, delivering real-world solutions involving
            <strong>authentication</strong>, <strong>performance optimization</strong>, and{' '}
            <strong>AI integration</strong>.
          </p>
        </div>

        <LinkButton href='/contact' icon='mail' className='mt-4'>
          Contact Me
        </LinkButton>
      </Section>
    </>
  )
}
