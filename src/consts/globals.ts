import type { PrimaryColor, Social, TimelineEntry } from '@types'

export const SOCIALS: Record<string, Social> = {
  RESUME: {
    icon: 'resume',
    href: '/curriculum-vitae.pdf',
    label: 'Resume'
  },
  GITHUB: {
    icon: 'github',
    href: 'https://github.com/k3vndev',
    label: 'GitHub'
  },
  LINKEDIN: {
    icon: 'linked-in',
    href: 'https://www.linkedin.com/in/kevinrdev/',
    label: 'LinkedIn'
  }
}

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    year: '2025-2026',
    title: 'Freelance Work',
    overview:
      'Worked on real client projects involving redesigns, performance improvements, SEO, and feature development for production websites in active use.',
    chip: 'Production & Client Work'
  },
  {
    year: '2024-2025',
    title: 'Full-stack Projects & AI Tools',
    overview:
      'Developed full-stack web applications with React and Next.js, focusing on scalable architecture, UI systems, and independent product development from idea to implementation.',
    chip: 'Full-Stack Product Building'
  },
  {
    year: '2023',
    title: 'Game Development',
    overview:
      'Built interactive games in Unity and C#, learning core programming concepts, system design, and state-driven logic through hands-on game mechanics.',
    chip: 'Project & Systems Design'
  }
]

export const PRIMARY_COLORS_MAP: Record<PrimaryColor, string> = {
  '10-purple': '#8086ff',
  '20-light-purple': '#a584ff',
  '30-blue': '#56a0ff'
}
