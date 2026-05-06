import { cn } from '@utils'

interface Props extends React.PropsWithChildren<React.HTMLAttributes<HTMLElement>> {
  bordered?: boolean
}

/**
 * The section element to use for each section of the page. It already contins the necessary styles while allowing customization through the className prop.
 *
 * Its child is wrapped in a div that already handles the layout and spacing, edit its styles with `[&>.inner]:` or `**:[.inner]:` in the className prop.
 */
export const Section = ({ children, className, bordered = false, ...props }: Props) => (
  <section
    className={cn(
      'relative w-screen px-4 sm:px-8 lg:px-16 xl:px-0 py-24',
      bordered && 'border-y-4 border-dashed border-white/10',
      className
    )}
    {...props}
  >
    <div className='xl:max-w-275 w-full flex flex-col gap-4 mx-auto inner'>{children}</div>
  </section>
)
