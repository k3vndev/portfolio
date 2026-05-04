'use client'

import { useParallax } from '@hooks'

export const GridBG = () => {
  const bgTop = useParallax()

  const color = '#ffffff08'
  const thickness = '2px'
  const size = '4rem'
  const offset = '2.5rem'

  return (
    <div className='absolute size-full top-0 left-0 -z-10 pointer-events-none'>
      <div
        className='size-full'
        style={{
          backgroundImage: `linear-gradient(to right, ${color} ${thickness}, transparent ${thickness}), linear-gradient(to bottom, ${color} ${thickness}, transparent ${thickness})`,
          backgroundSize: `${size} ${size}`,
          backgroundPosition: `${offset} ${bgTop}px`
        }}
      />
    </div>
  )
}
