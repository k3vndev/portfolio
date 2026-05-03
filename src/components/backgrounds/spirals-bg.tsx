'use client'

import { useEffect, useState } from 'react'

export const SpiralsBG = () => {
  const [bgTop, setBgTop] = useState(0)

  useEffect(() => {
    const parallaxFactor = 0.33

    const handleScroll = () => {
      setBgTop(window.scrollY * parallaxFactor)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
