import { Button, Icon } from '@components'
import { EVENTS } from '@consts'
import { CONTACT_FORM_ERRORS, ContactFormSchema } from '@schemas'
import type { ContactFormError, IconName } from '@types'
import { useEffect, useRef, useState } from 'react'
import z from 'zod'
import { cn } from '@/utils'
import { ContactInput } from './contact-input'

export const ContactForm = () => {
  const [submitState, setSubmitState] = useState<'idle' | 'sending' | 'sent'>('idle')

  const [displayingError, setDisplayingError] = useState<ContactFormError>({
    error: false,
    message: '',
    names: []
  })
  const submitTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const errorTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (submitState !== 'idle') {
      return
    }

    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    try {
      const { name, email, message } = ContactFormSchema.parse({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
      })

      setSubmitState('sending')

      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })

      if (!response.ok || !(await response.json()).success) {
        throw new Error()
      }

      // -- Form submission was successful! --

      // Clear any existing errors and send the form submitted event
      displayError({ error: false })
      setSubmitState('sent')

      submitTimeoutRef.current && clearTimeout(submitTimeoutRef.current)
      submitTimeoutRef.current = setTimeout(() => {
        setSubmitState('idle')
      }, 1500)

      document.dispatchEvent(new CustomEvent(EVENTS.FORM_SUBMITTED))
    } catch (error) {
      setSubmitState('idle')

      if (!(error instanceof z.ZodError) || !error.issues.length) {
        displayError({ error: true, message: 'An unexpected error occurred', names: [] })
        return
      }

      if (error.issues.length > 1) {
        // Handle multiple errors case with a generic message
        const names = error.issues.map(
          issue => CONTACT_FORM_ERRORS[issue.message as keyof typeof CONTACT_FORM_ERRORS].name
        )
        displayError({ error: true, message: 'Many fields are missing or invalid', names })
      } else {
        // Handle single error case with a more specific message
        const [issue] = error.issues
        const errorInfo = CONTACT_FORM_ERRORS[issue.message as keyof typeof CONTACT_FORM_ERRORS]
        displayError({ error: true, message: errorInfo.display, names: [errorInfo.name] })
      }
    }
  }

  const displayError = (error: Partial<ContactFormError>) => {
    setDisplayingError(prev => ({ ...prev, ...error }))

    // Clear previous timeout if it exists and set a new one to hide the error after a few seconds
    errorTimeoutRef.current && clearTimeout(errorTimeoutRef.current)
    errorTimeoutRef.current = setTimeout(() => {
      setDisplayingError(prev => ({ ...prev, error: false }))
    }, 5000)
  }

  // Clear timeouts on unmount to prevent issues
  useEffect(() => {
    return () => {
      submitTimeoutRef.current && clearTimeout(submitTimeoutRef.current)
      errorTimeoutRef.current && clearTimeout(errorTimeoutRef.current)
    }
  }, [])

  const buttonMap: Record<'sending' | 'sent' | 'idle', { text: string; icon: IconName }> = {
    idle: { text: 'Send Message', icon: 'mail' },
    sending: { text: 'Sending Message', icon: 'loading' },
    sent: { text: 'Message Sent!', icon: 'check' }
  }

  return (
    <form onSubmit={handleSubmit} className='w-full'>
      <div className='flex flex-col gap-0 lg:min-w-1/2 lg:py-(--card-p) lg:pl-(--card-p) not-lg:px-(--card-p) not-lg:pb-(--card-p) w-full'>
        <div className='flex items-center gap-x-8 w-full not-sm:flex-col'>
          <ContactInput name='name' error={displayingError} />
          <ContactInput name='email' error={displayingError} />
        </div>
        <ContactInput name='message' error={displayingError} textarea />

        <div className='flex md:items-center not-md:flex-col-reverse gap-4'>
          <Button
            icon={buttonMap[submitState].icon}
            type='submit'
            disabled={submitState !== 'idle'}
            className={submitState === 'sending' ? '**:[svg]:animate-spin' : ''}
          >
            {buttonMap[submitState].text}
          </Button>

          <small
            className={cn(
              'flex items-center text-red-400 relative z-10 transition-opacity',
              !displayingError.error && 'opacity-0 duration-700'
            )}
          >
            <Icon name='cross' className='size-4' />
            <span className='text-sm absolute text-nowrap left-5'>{displayingError.message}</span>
          </small>
        </div>
      </div>
    </form>
  )
}
