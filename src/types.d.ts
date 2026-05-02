import type { iconsMap } from '@components'

export type IconName = keyof typeof iconsMap

/** Primary color options for UI elements */
export type PrimaryColor = '10-purple' | '20-light-purple' | '30-blue'

export interface Social {
  icon: IconName
  href: string
  label: string
}
