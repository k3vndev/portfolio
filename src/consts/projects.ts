import type { IconName, Project } from '@types'

/**
 * `IconName: DisplayName` pairs for technologies used in projects
 */
export const TECHNOLOGIES_MAP = {
  react: 'React',
  'next-js': 'Next.js',
  'type-script': 'TypeScript',
  'java-script': 'JavaScript',
  'mongo-db': 'MongoDB',
  'tailwind-css': 'Tailwind CSS',
  'node-js': 'Node.js',
  python: 'Python',
  'python-white': 'Python White',
  css: 'CSS',
  zod: 'Zod',
  supabase: 'Supabase',
  'open-ai': 'OpenAI',
  leaflet: 'Leaflet',
  'c-sharp': 'C#',
  unity: 'Unity'
} as const satisfies Partial<Record<IconName, string>>

export const PROJECTS: Project[] = [
  {
    title: 'Studymate',
    technologies: ['next-js', 'supabase', 'open-ai'],
    overview:
      'AI-powered learning platform that generates and manages personalized Studyplans.\nUsers can track progress, complete structured learning paths, and interact with an AI assistant designed to guide their studies in real time.',
    code: 'https://github.com/k3vndev/studymate',
    preview: 'https://studymate-web.vercel.app',
    images: ['1.webp'],
    metrics: [
      {
        value: '7+',
        label: 'UI Screens'
      },
      {
        value: '3+',
        label: 'AI Features'
      },
      {
        value: 'Full',
        label: 'Auth System'
      }
    ]
  },
  {
    title: 'Pixi Paint',
    technologies: ['next-js', 'mongo-db', 'tailwind-css'],
    overview:
      'Web-based pixel art platform for creating and sharing 8×8 artwork.\nIncludes a public gallery and small interactive mini-games.',
    code: 'https://github.com/k3vndev/pixi-paint',
    preview: 'https://pixi-paint.vercel.app',
    images: ['1.webp']
  },
  {
    title: 'Quizzie',
    technologies: ['react', 'node-js', 'mongo-db'],
    overview:
      'Full-stack platform for creating, managing, and taking custom quizzes.\nSupports authentication, scoring, and interactive quiz experiences.',
    code: 'https://github.com/K3vnDev/quizzie',
    preview: 'https://quizzie-wb.netlify.app',
    images: ['1.webp']
  }
]

export const GAMEDEV_PROJECT: Project = {
  title: 'My Snowy Friend',
  technologies: ['unity', 'c-sharp'],
  images: ['1.png'],
  overview:
    'My Snowy Friend is a cozy adventure game where the player helps a snowman rescue a lost cat and guide it back home through a winter world filled with small puzzles and exploration.\nI designed and built the entire project solo, including gameplay systems, mechanics, and overall architecture.',
  metrics: [
    {
      value: '100%',
      label: 'Solo Dev'
    },
    {
      value: '10+',
      label: 'Unique Mechanics'
    },
    {
      value: '5+',
      label: 'Designed Levels'
    }
  ]
}
