'use client'

import { EVENTS } from '@consts'
import { cn } from '@utils'
import { useEffect, useRef, useState } from 'react'

interface Props {
  label: string
  name: string
  textarea?: boolean
}

export const ContactInput = ({ label, name, textarea = false }: Props) => {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)

  const recalculateHeight = () => {
    if (!inputRef.current || !textarea) return
    const input = inputRef.current as HTMLTextAreaElement
    const [min, max] = [64, 192]

    input.style.overflowY = 'scroll'
    input.style.height = '0px'
    const { scrollHeight } = input
    const newScrollHeight = scrollHeight < min ? min : scrollHeight > max ? max : scrollHeight
    input.style.height = `${newScrollHeight}px`
    input.style.overflowY = newScrollHeight >= max ? 'auto' : 'hidden'
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (textarea) recalculateHeight()
    setValue(e.target.value)
  }

  const props = {
    ref: inputRef,
    value,
    onChange: handleChange,
    name,
    className:
      'px-3 py-1.5 outline-none bg-20-light-purple/10 focus:bg-20-light-purple/15 rounded-lg border border-20-light-purple/25 focus:border-20-light-purple/50 text-zinc-300 transition'
  }

  useEffect(() => {
    const handleFormSubmit = () => setValue('')
    document.addEventListener(EVENTS.FORM_SUBMIT, handleFormSubmit)
    return () => document.removeEventListener(EVENTS.FORM_SUBMIT, handleFormSubmit)
  }, [])

  return (
    <label className='flex flex-col gap-1.5 sm:mb-8 mb-4 w-full'>
      <div className='text-white font-poppins md:text-2xl sm:text-xl text-lg flex items-center gap-0.5'>
        {label}
        <span className='font-semibold text-gradient'>*</span>
      </div>

      {textarea ? (
        <textarea
          {...props}
          className={cn(props.className, 'resize-none min-w-full overflow-hidden h-16')}
          style={{ scrollbarColor: 'white' }}
        />
      ) : (
        <input {...props} />
      )}
    </label>
  )
}
