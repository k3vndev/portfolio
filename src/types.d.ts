import type { iconsMap } from '@components'
import type { TECHNOLOGIES_MAP } from '@consts/projects'

export type IconName = keyof typeof iconsMap

/** Primary color options for UI elements */
export type PrimaryColor = '10-purple' | '20-light-purple' | '30-blue'

export interface Social {
  icon: IconName
  href: string
  label: string
}

export type Technology = keyof typeof TECHNOLOGIES_MAP

export interface Project {
  title: string
  technologies: Technology[]
  overview: string
  description?: string
  images: string[]
  preview?: string
  code?: string
  metrics?: Array<{
    value: string
    label: string
  }>
  details?: ProjectDetails[]
  starred?: boolean
}

export interface TimelineEntry {
  year: string
  title: string
  overview: string
  chip: string
}

export type ProjectDetails =
  | {
      type: 'title'
      content: {
        text: string
        icon?: IconName
      }
    }
  | {
      type: 'subtitle'
      content: string
    }
  | {
      type: 'paragraph'
      content: string
    }
  | {
      type: 'bullets'
      content: string[]
    }

export interface ContactFormError {
  error: boolean
  message: string
  names: string[]
}
