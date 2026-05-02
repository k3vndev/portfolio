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
  leaflet: 'Leaflet'
} as const satisfies Partial<Record<IconName, string>>

export const PROJECTS: Project[] = [
  {
    title: 'Studymate',
    technologies: ['next-js', 'supabase', 'open-ai'], // Add more technologies later
    overview:
      'AI-powered learning platform that generates and manages personalized Studyplans.\nUsers can track progress, complete structured learning paths, and interact with an AI assistant designed to guide their studies in real time.',
    code: 'https://github.com/k3vndev/studymate',
    preview: 'https://studymate-web.vercel.app',
    images: ['/studymate/1.webp']
  }
]
