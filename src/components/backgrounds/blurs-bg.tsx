import { cn } from '@utils'

export const BlursBG = () => (
  <div className='fixed w-screen h-screen top-0 left-0 pointer-events-none z-0'>
    <Blur className='bg-[#1D176D] top-[33%] lg:left-[17%] left-99' />
    <Blur className='bg-[#3E176D] bottom-[-5%] lg:right-[10%] sm:right-0 -right-1/2' />
  </div>
)

const Blur = ({ className = '' }) => (
  <div
    className={cn(
      'size-90 rounded-full aspect-square absolute pointer-events-none z-99 blur-[190px] -translate-1/2',
      className
    )}
  />
)
