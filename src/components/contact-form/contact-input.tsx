'use client'

import { EVENTS } from '@consts'
import type { ContactFormError } from '@types'
import { cn } from '@utils'
import { useEffect, useMemo, useRef, useState } from 'react'

interface Props {
  name: string
  textarea?: boolean
  error: ContactFormError
}

export const ContactInput = ({ name, textarea = false, error }: Props) => {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)

  const isOnError = useMemo(() => {
    if (!error.error) return false
    return error.names.includes(name)
  }, [error])

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
    className: cn(
      'px-3 py-1.5 outline-none bg-20-light-purple/10 focus:bg-20-light-purple/15 rounded-lg  text-zinc-300 transition-all border',
      isOnError
        ? 'border-red-400/40 focus:border-red-500/70'
        : 'focus:border-20-light-purple/50 border-20-light-purple/25'
    )
  }

  useEffect(() => {
    const handleFormSubmit = () => setValue('')
    document.addEventListener(EVENTS.FORM_SUBMITTED, handleFormSubmit)
    return () => document.removeEventListener(EVENTS.FORM_SUBMITTED, handleFormSubmit)
  }, [])

  const label = name.charAt(0).toUpperCase() + name.slice(1)

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
