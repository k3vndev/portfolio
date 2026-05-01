import { cn } from '@utils'

/**
 * A React component that renders text with the application's main gradient effect. It accepts children and any HTML attributes for a span element.
 */
export const GradientText = ({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLSpanElement>>) => (
  <span
    className={cn(
      'bg-linear-to-r from-10-purple via-20-light-purple to-30-blue bg-clip-text text-transparent',
      className
    )}
    {...props}
  >
    {children}
  </span>
)
