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
  unity: 'Unity',
  blender: 'Blender'
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
    description:
      'Pixi Paint is a web-based pixel art platform built around a simple idea: making creative tools accessible instantly. It allows users to create, save, and share 8×8 pixel artwork directly in the browser, without requiring accounts or setup.\nThe platform focuses on removing friction from the creative process, enabling users to start drawing, export their work, or publish it to a public gallery in seconds.',
    code: 'https://github.com/k3vndev/pixi-paint',
    preview: 'https://pixi-paint.vercel.app',
    images: ['1.webp'],
    details: [
      {
        type: 'title',
        content: { text: 'Features' }
      },
      {
        type: 'paragraph',
        content:
          'Pixi Paint provides a focused environment for pixel art creation, emphasizing [simplicity] and [speed] while still delivering meaningful features.'
      },
      {
        type: 'bullets',
        content: [
          '⚡ [Instant access] with [no login required].',
          '🎨 Custom 8×8 [painting system] with smooth interactions.',
          '💾 [Save, export, and re-import] artwork seamlessly.',
          '🌍 [Share artwork] through a public, anonymous gallery.',
          '🎮 Includes [mini-games] that encourage [creativity].'
        ]
      },

      {
        type: 'title',
        content: { text: 'A Solution to a Problem' }
      },
      {
        type: 'paragraph',
        content:
          'Many creative tools introduce unnecessary barriers like accounts, complex interfaces, or slow workflows. Pixi Paint removes these by prioritizing [accessibility] and [instant interaction], allowing users to create and share without friction.'
      },

      {
        type: 'subtitle',
        content: 'Key Benefits'
      },
      {
        type: 'bullets',
        content: [
          'Reduced friction in the creative process.',
          'Encourages quick and repeated usage.',
          'Balances simplicity with functional depth.'
        ]
      },

      {
        type: 'title',
        content: { text: 'Technical Highlights' }
      },
      {
        type: 'paragraph',
        content:
          'Pixi Paint was built prioritizing a clean architecture and maintainable codebase. It is structured around reusable hand-crafted components and clear separation of concerns, with a focus on scalability and performance.'
      },
      {
        type: 'bullets',
        content: [
          'React + TypeScript for a structured frontend.',
          'Zustand for predictable state management.',
          'Zod for data validation.',
          'MongoDB for persistent data.',
          'Custom UI inspired by retro interfaces.'
        ]
      }
    ]
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
  technologies: ['unity', 'c-sharp', 'blender'],
  images: ['1.gif'],
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
