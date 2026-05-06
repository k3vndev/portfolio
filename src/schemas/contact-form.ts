import z from 'zod'

export const CONTACT_FORM_ERRORS = {
  NAME_REQUIRED: {
    display: 'Name is required',
    name: 'name'
  },
  NAME_TOO_SHORT: {
    display: 'Name must be at least 3 characters',
    name: 'name'
  },
  NAME_TOO_LONG: {
    display: 'Name is too long!',
    name: 'name'
  },
  EMAIL_INVALID: {
    display: 'Email missing or invalid',
    name: 'email'
  },
  MESSAGE_REQUIRED: {
    display: 'Message is required',
    name: 'message'
  },
  MESSAGE_TOO_LONG: {
    display: 'Message is too long!',
    name: 'message'
  }
} as const

// Parse into "key: key" pairs
const ERR = Object.fromEntries(Object.entries(CONTACT_FORM_ERRORS).map(([key]) => [key, key])) as Record<
  keyof typeof CONTACT_FORM_ERRORS,
  string
>

export const ContactFormSchema = z.object({
  name: z
    .string({ error: ERR.NAME_REQUIRED })
    .min(3, { error: ERR.NAME_TOO_SHORT })
    .max(99, { error: ERR.NAME_TOO_LONG })
    .trim(),
  email: z.email({ error: ERR.EMAIL_INVALID }).trim(),
  message: z
    .string({ error: ERR.MESSAGE_REQUIRED })
    .min(1, { error: ERR.MESSAGE_REQUIRED })
    .max(2999, { error: ERR.MESSAGE_TOO_LONG })
    .trim()
})
