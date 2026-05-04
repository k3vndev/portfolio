'use client'

import { useParallax } from '@hooks'

export const SpiralsBG = () => {
  const bgTop = useParallax()

  return (
    <div className='absolute size-full top-0 left-0 bg-black pointer-events-none'>
      <div
        className='size-full invert opacity-1.5'
        style={{
          backgroundImage: "url('/backgrounds/spiral-pattern.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: '48rem',
          backgroundPosition: `0px ${bgTop}px`
        }}
      />
    </div>
  )
}
