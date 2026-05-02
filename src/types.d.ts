import type { getIconsMap } from '@components'

export type IconName = keyof ReturnType<typeof getIconsMap>

export interface Social {
  icon: IconName
  href: string
  label: string
}
