import { useId } from 'react'

export const StarredGradientStar = () => {
  // Generate a unique ID for the gradient to prevent conflicts when multiple stars are rendered
  const gradientId = `star-gradient-${useId()}`

  return (
    <div className="right-3 size-8 min-w-8 top-4 absolute z-10 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-black before:blur-lg flex items-center justify-center before:scale-200 before:-z-10 before:pointer-events-none">
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        className='size-full z-30 brightness-125 group-hover:brightness-140 group-hover:scale-110 transition-transform'
      >
        <defs>
          <linearGradient id={gradientId} x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#8e63f3'></stop>
            <stop offset='100%' stopColor='#5d6bff'></stop>
          </linearGradient>
        </defs>

        <path stroke='none' d='M0 0h24v24H0z' fill='none'>
          {' '}
        </path>
        <path
          d='M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z'
          fill={`url(#${gradientId})`}
        ></path>
      </svg>
    </div>
  )
}
