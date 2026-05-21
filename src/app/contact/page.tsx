'use client'

import { CardWrapper, Chip, Icon, Section } from '@components'
import { ContactForm } from '@components/contact-form'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function ContactPage() {
  const [justCopied, setJustCopied] = useState(false)
  const copyTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const email = 'kevinrpolo13@gmail.com'

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email)
    setJustCopied(true)

    if (copyTimeoutRef.current) {
      clearTimeout(copyTimeoutRef.current)
    }

    copyTimeoutRef.current = setTimeout(() => {
      setJustCopied(false)
    }, 999)
  }

  // Clear timeouts on unmount
  useEffect(() => {
    return () => {
      copyTimeoutRef.current && clearTimeout(copyTimeoutRef.current)
    }
  }, [])

  return (
    <>
      <Section className='mt-(--app-mt) md:mb-16 sm:mb-12 mb-8 pb-0'>
        <Chip color='20-light-purple'>Get in Touch</Chip>
        <h1 className='font-poppins font-bold md:text-6xl sm:text-5xl text-4xl max-w-2xl [&>strong]:text-gradient'>
          Let’s <strong>build</strong> your next <strong>project</strong> together
        </h1>

        <h3 className='font-plus text-bluish-gray sm:text-2xl text-xl mt-1'>
          Got a question or a project idea? Send a message or reach out directly at{' '}
          <button
            className='text-low-gradient font-semibold inline-flex items-center gap-1.5 hover:brightness-110 cursor-pointer active:brightness-90 disabled:brightness-90 transition select-text'
            onClick={copyEmailToClipboard}
            disabled={justCopied}
          >
            {email}
            <Icon
              name={justCopied ? 'check' : 'copy'}
              className='text-[#a8ceff] sm:size-5 size-4 sm:min-w-5 min-w-4'
            />
          </button>
        </h3>
      </Section>

      <Section className='pt-0'>
        <CardWrapper
          color='20-light-purple'
          className='p-0 flex items-center not-lg:flex-col-reverse not-lg:gap-4'
        >
          <ContactForm />

          <Image
            className='lg:mask-r-from-transparent lg:mask-r-to-white not-lg:mask-t-from-transparent not-lg:mask-t-to-white not-lg:w-full lg:size-full sm:h-64 h-48 object-cover'
            src='/contact.gif'
            alt='An animated gif showing my personal project Pixi Paint being used to create pixel art.'
            draggable={false}
            width={500}
            height={300}
          />
        </CardWrapper>
      </Section>
    </>
  )
}
