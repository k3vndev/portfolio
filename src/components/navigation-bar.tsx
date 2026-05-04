'use client'

import { Icon } from '@components'
import type { IconName } from '@types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { cn } from '@/utils'

export const NavigationBar = () => {
  const pathName = usePathname()

  const routes: Route[] = [
    { name: 'Home', href: '/', icon: 'home' },
    { name: 'All Projects', href: '/projects', icon: 'code' },
    { name: 'Contact', href: '/contact', icon: 'mail' }
  ]

  const selectedRoute = useMemo(() => {
    return routes.find(route => route.href === pathName)
  }, [pathName])

  return (
    <nav className='fixed top-6 left-1/2 -translate-x-1/2 rounded-full p-0.5 overflow-clip z-99999 backdrop-blur-md'>
      <div className='bg-linear-to-r from-10-purple via-20-light-purple to-30-blue absolute top-1/2 left-1/2 -translate-1/2 w-3/2 aspect-square animate-spin -z-10 opacity-25' />

      <ul className='flex md:gap-16 gap-8 md:px-16 px-8 py-2 rounded-full bg-black/65'>
        {routes.map(({ name, href, icon }) => (
          <li key={name}>
            <Link
              href={href}
              className={cn(
                'flex items-center md:gap-2 gap-1',
                selectedRoute?.name === name ? 'text-white pointer-events-none' : 'text-white/60'
              )}
            >
              <Icon name={icon} />
              <span className='font-poppins text-xl font-medium text-nowrap'>{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

interface Route {
  name: string
  href: string
  icon: IconName
}
