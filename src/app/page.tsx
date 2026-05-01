import { GradientText, Section } from '@components'

export default function Home() {
  return (
    <Section className='[&>div]:gap-5 pt-64'>
      <div className='flex flex-col font-bold font-poppins'>
        <h2 className='text-6xl text-white'>Hello, I'm</h2>
        <h1 className='text-8xl'>
          <GradientText>Kevin Rodríguez</GradientText>
        </h1>
      </div>

      <h2 className='font-plus text-bluish-gray text-3xl font-medium'>
        I build full-stack web applications with Next.js and TypeScript. <br />
        From dashboards to AI tools, I focus on shipping usable products.
      </h2>
    </Section>
  )
}
