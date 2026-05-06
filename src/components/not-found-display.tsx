import { CardWrapper, Chip, Icon, LinkButton, Section } from '@components'
import { SpiralsBG } from './backgrounds'

interface Props {
  message: string
  action: {
    label: string
    href: string
  }
}

export const NotFoundDisplay = ({ message, action }: Props) => (
  <Section className='lg:mt-32 sm:mt-24 mt-40 not-sm:py-8 mb-8' bordered>
    <SpiralsBG />

    <div className='flex flex-col items-center w-full gap-4 my-auto'>
      <h1 className='md:text-[14rem] sm:text-[10rem] text-[6rem] font-black leading-[100%] scale-110 text-gradient font-poppins'>
        404
      </h1>

      <CardWrapper className='md:px-20 px-(--card-p) w-full' color='20-light-purple'>
        <Chip color='20-light-purple'>Ooops!</Chip>

        <h2 className='md:text-4xl sm:text-2xl text-xl text-bluish-gray text-pretty font-medium font-poppins mt-2'>
          {message}
        </h2>
      </CardWrapper>

      <LinkButton href={action.href}>
        <Icon name='arrow' />
        {action.label}
      </LinkButton>
    </div>
  </Section>
)
