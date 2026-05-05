import { Icon, ParsedText } from '@components'
import type { IconName, ProjectDetails as ProjectDetailsType } from '@types'
import { useMemo } from 'react'

export const ProjectDetails = ({ type, content }: ProjectDetailsType) => {
  if (type === 'title') {
    return <Title content={content} />
  }

  if (type === 'subtitle') {
    return <SubtitleTitle content={content} />
  }

  if (type === 'paragraph') {
    return <Paragraph content={content} />
  }

  if (type === 'bullets') {
    return <Bullets content={content} />
  }

  return null
}

interface TitleProps {
  content: {
    text: string
    icon?: IconName
  }
}

const Title = ({ content }: TitleProps) => (
  <h2 className='flex items-center gap-2 mt-10'>
    {content.icon && <Icon name={content.icon} className='size-8 min-w-8 aspect-square' />}
    <span className='text-low-gradient font-poppins font-bold sm:text-5xl text-4xl pb-2'>{content.text}</span>
  </h2>
)

interface SubtitleTitleProps {
  content: string
}

const SubtitleTitle = ({ content }: SubtitleTitleProps) => (
  <h2 className='flex items-center gap-2 font-poppins font-bold sm:text-3xl text-2xl text-bluish-gray brightness-140 mt-4'>
    {content}
  </h2>
)

interface ParagraphProps {
  content: string
}

const Paragraph = ({ content }: ParagraphProps) => {
  const paragraphs = useMemo(() => content.split('\n').filter(p => p.trim() !== ''), [content])

  return (
    <div className='flex flex-col gap-4'>
      {paragraphs.map((p, index) => (
        <ParsedText className='text-bluish-gray font-plus sm:text-xl text-lg' key={index}>
          {p}
        </ParsedText>
      ))}
    </div>
  )
}

interface BulletsProps {
  content: string[]
}

const Bullets = ({ content }: BulletsProps) => (
  <ul className='list-none list-inside flex flex-col gap-2'>
    {content.map((bullet, index) => (
      <li className='flex items-start gap-3 ml-5' key={index}>
        <div className='bg-linear-to-br from-10-purple via-20-light-purple to-30-blue size-3 aspect-square min-w-3 rounded-full mt-2' />
        <ParsedText className='text-bluish-gray font-plus sm:text-xl text-lg font-semibold'>
          {bullet}
        </ParsedText>
      </li>
    ))}
  </ul>
)
