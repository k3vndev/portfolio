import { cn } from '@utils'

/**
 * The section element to use for each section of the page. It already contins the necessary styles while allowing customization through the className prop.
 *
 * Its child is wrapped in a div that already handles the layout and spacing, edit its styles with `[&>div]:` in the className prop.
 */
export const Section = ({
  children,
  className,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLElement>>) => (
  <section
    className={cn('relative flex justify-center w-screen px-4 sm:px-8 lg:px-16 xl:px-0 py-32', className)}
    {...props}
  >
    <div className='xl:max-w-6xl w-full flex flex-col gap-4'>{children}</div>
  </section>
)
