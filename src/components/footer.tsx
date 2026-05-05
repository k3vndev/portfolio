import { Cat, Icon, Section } from '@components'
import { SOCIALS } from '@consts'
import Link from 'next/link'

export const Footer = () => {
  const socials = [SOCIALS.LINKEDIN, SOCIALS.GITHUB]

  return (
    <Section className='pb-8 pt-16 mt-auto'>
      <footer className='mb-12 flex flex-col-reverse gap-5 md:flex-row justify-between xl:gap-24 md:gap-12 mt-auto'>
        <aside className='flex gap-8 items-center justify-between md:justify-start'>
          <div className='flex gap-4'>
            {socials.map(({ icon, href }) => (
              <Link key={href} href={href} target='_blank' rel='noopener'>
                <Icon name={icon} className='size-8 aspect-square min-w-8' />
              </Link>
            ))}
          </div>
          <small className='text-xs font-light font-plus text-zinc-400 sm:text-nowrap'>
            Cat sprites borrowed from{' '}
            <Link
              className='text-zinc-200 hover:underline'
              aria-label='Stardew Valley website'
              href='https://www.stardewvalley.net'
              target='_blank'
              rel='noopener'
            >
              Stardew Valley
            </Link>
          </small>
        </aside>
        <div className='w-full relative'>
          <Cat />
        </div>
      </footer>
    </Section>
  )
}
