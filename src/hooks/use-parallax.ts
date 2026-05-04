import { useEffect, useState } from 'react'

export const useParallax = (parallaxFactor = 0.33) => {
  const [bgTop, setBgTop] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setBgTop(window.scrollY * parallaxFactor)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [parallaxFactor])

  return bgTop
}
