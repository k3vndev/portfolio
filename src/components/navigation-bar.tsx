'use client'

import { Icon } from '@components'
import { GAMEDEV_PROJECT, PROJECTS } from '@consts'
import { useResponsiveness } from '@hooks'
import type { IconName } from '@types'
import { cn, kebabCase } from '@utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

export const NavigationBar = () => {
  const pathName = usePathname()
  const { media } = useResponsiveness()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const routes: Route[] = [
    { name: 'Home', href: '/', icon: 'home' },
    { name: 'All Projects', href: '/projects', icon: 'code' },
    { name: 'Contact', href: '/contact', icon: 'mail' }
  ]

  const selectedRoute: Route | null = useMemo(() => {
    // Extract name from '/projects/project-name' to match with '/projects'
    const regex = /^\/projects(\/.*)?$/
    const [_, projectName] = pathName.match(regex) || []

    if (projectName) {
      const allProjects = [...PROJECTS, GAMEDEV_PROJECT]
      const foundProject = allProjects.find(project => `/${kebabCase.to(project.title)}` === projectName)

      if (!foundProject) {
        return null
      }

      return {
        name: foundProject.title,
        href: `/projects/${kebabCase.to(foundProject.title)}`,
        icon: 'code'
      }
    }

    return routes.find(route => route.href === pathName) || null
  }, [pathName])

  useEffect(() => {
    if (mobileMenuOpen) setMobileMenuOpen(false)
  }, [pathName])

  useEffect(() => {
    if (media.sm) setMobileMenuOpen(false)
  }, [media.sm])

  if (mobileMenuOpen) {
    return (
      <div className='fixed inset-0 bg-black/50 backdrop-blur-lg z-99999 flex flex-col items-center justify-center gap-12'>
        {routes.map(route => (
          <RouteTile key={route.href} {...route} selected={selectedRoute?.name === route.name} />
        ))}

        {/* Close button */}
        <button className='absolute top-6 right-6 p-4' onClick={() => setMobileMenuOpen(false)}>
          <Icon name='cross' className='size-8' />
        </button>
      </div>
    )
  }

  return (
    <nav className='fixed top-6 left-1/2 -translate-x-1/2 rounded-full p-0.5 overflow-clip z-99999 backdrop-blur-md sm:w-fit w-[calc(100vw-2rem)]'>
      <ul className='flex md:gap-8 gap-4 md:px-16 px-8 rounded-full bg-black/65 not-sm:justify-between'>
        {media.sm ? (
          routes.map(route => (
            <li key={route.href}>
              <RouteTile {...route} selected={selectedRoute?.name === route.name} />
            </li>
          ))
        ) : (
          <>
            {selectedRoute ? (
              <RouteTile {...selectedRoute} selected className='text-2xl' />
            ) : (
              <span className='font-poppins font-medium py-3 text-nowrap'>404 Not Found</span>
            )}

            <button onClick={() => setMobileMenuOpen(true)}>
              <Icon name='menu' />
            </button>
          </>
        )}
      </ul>

      <div className='bg-linear-to-r from-10-purple via-20-light-purple to-30-blue absolute top-1/2 left-1/2 -translate-1/2 w-3/2 aspect-square animate-spin -z-10 opacity-25' />
    </nav>
  )
}

interface RouteTileProps extends Route {
  selected?: boolean
  className?: string
}

const RouteTile = ({ name, href, icon, selected, className }: RouteTileProps) => (
  <Link
    href={href}
    className={cn(
      'flex items-center gap-2 active:scale-95 transition-all px-4 py-2.5 sm:border-b-2',
      selected
        ? 'text-white pointer-events-none border-white/40 duration-500'
        : 'text-white/50 hover:text-white/80 active:text-white/50 border-transparent',
      className
    )}
  >
    <Icon name={icon} className='sm:size-7 size-8' />
    <span className='font-poppins text-xl font-medium text-nowrap'>{name}</span>
  </Link>
)

interface Route {
  name: string
  href: string
  icon: IconName
}
