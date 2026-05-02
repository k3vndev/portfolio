import type { iconsMap } from '@components'

export type IconName = keyof typeof iconsMap

export interface Social {
  icon: IconName
  href: string
  label: string
}
