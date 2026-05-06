import type { IconName } from '@types'
import { cn } from '@utils'
import Link from 'next/link'
import { Icon } from './icons'

interface ButtonProps {
  small?: boolean
  className?: string
  children: React.ReactNode
  style?: React.CSSProperties
  icon?: IconName
  onClick?: () => void
}

interface LinkButtonProps extends ButtonProps {
  href: string
  newTab?: boolean
}

interface ButtonInnerProps {
  small?: boolean
  icon?: IconName
  children: React.ReactNode
}

const ButtonInner = ({ small, icon, children }: ButtonInnerProps) => (
  <>
    <div
      className={cn(
        'flex items-center gap-2 font-plus font-normal bg-[#02020A] group-hover:bg-[#02020A]/95 rounded-full not-sm:[&>svg]:size-6 not-sm:[&>svg]:max-w-6 text-nowrap',
        small
          ? '[&>svg]:size-5 [&>svg]:max-w-5 text-lg px-5 py-1.5'
          : '[&>svg]:size-8 [&>svg]:max-w-8 sm:text-xl text-lg sm:px-7 px-5 sm:py-2 py-1.5'
      )}
    >
      {icon && <Icon name={icon} />}
      {children}
    </div>

    <div className='absolute aspect-square bg-linear-to-r from-10-purple via-20-light-purple to-30-blue w-3/2 -z-10 opacity-25 group-hover:opacity-100 group-hover:animate-spin transition' />
  </>
)

const getBaseClassName = (className?: string) =>
  cn(
    'rounded-full w-fit p-0.5 relative flex items-center justify-center overflow-clip group hover:scale-102 active:scale-90 active:brightness-50 transition not-disabled:cursor-pointer z-20',
    className
  )

export const LinkButton = ({ small, newTab, className, children, icon, ...props }: LinkButtonProps) => {
  const target = newTab
    ? {
        target: '_blank',
        rel: 'noopener noreferrer'
      }
    : {}

  return (
    <Link className={getBaseClassName(className)} {...target} {...props}>
      <ButtonInner {...{ children, small, icon }} />
    </Link>
  )
}

export const Button = ({ children, className, icon, onClick, small, style }: ButtonProps) => (
  <button className={getBaseClassName(className)} type='button' onClick={onClick} style={style}>
    <ButtonInner {...{ children, small, icon }} />
  </button>
)
