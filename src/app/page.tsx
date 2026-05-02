import { GithubIcon, LinkButton, LinkedInIcon, ResumeIcon, Section } from '@components'

export default function Home() {
  const socials = [
    {
      icon: <ResumeIcon />,
      href: '/curriculum-vitae.pdf',
      label: 'Resume'
    },
    {
      icon: <GithubIcon />,
      href: 'https://github.com/k3vndev',
      label: 'GitHub'
    },
    {
      icon: <LinkedInIcon />,
      href: 'https://www.linkedin.com/in/kevinrdev/',
      label: 'LinkedIn'
    }
  ]

  return (
    <Section className='lg:pt-64 md:pt-48 pt-32'>
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
          <LinkButton key={label} href={href} newTab>
            {icon}
            {label}
          </LinkButton>
        ))}
      </div>
    </Section>
  )
}
