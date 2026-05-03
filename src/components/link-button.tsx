import type { IconName } from '@types'
import { cn } from '@utils'
import Link from 'next/link'
import { Icon } from './icons'

interface Props {
  small?: boolean
  newTab?: boolean
  className?: string
  children: React.ReactNode
  style?: React.CSSProperties
  icon?: IconName
  href: string
}

export const LinkButton = ({ small, newTab, className, children, icon, ...props }: Props) => {
  const target = newTab
    ? {
        target: '_blank',
        rel: 'noopener noreferrer'
      }
    : {}

  return (
    <Link
      className={cn(
        'rounded-full p-0.5 relative flex items-center justify-center overflow-clip group hover:scale-102 active:scale-90 active:brightness-50 transition',
        className
      )}
      {...target}
      {...props}
    >
      <div
        className={cn(
          'flex items-center gap-2 font-plus font-normal bg-[#02020A] group-hover:bg-[#02020A]/95 rounded-full not-sm:[&>svg]:size-6 not-sm:[&>svg]:max-w-6 not-sm:text-xl not-sm:px-5 not-sm:py-1',
          small
            ? '[&>svg]:size-5 [&>svg]:max-w-5 text-lg px-5 py-1'
            : '[&>svg]:size-8 [&>svg]:max-w-8 text-2xl px-7 py-2'
        )}
      >
        {icon && <Icon name={icon} />}
        {children}
      </div>

      <div className='absolute aspect-square bg-linear-to-r from-10-purple via-20-light-purple to-30-blue w-3/2 -z-10 opacity-25 group-hover:opacity-100 group-hover:animate-spin transition' />
    </Link>
  )
}
