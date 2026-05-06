import { ContactFormSchema } from '@schemas'
import { type NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import type Mail from 'nodemailer/lib/mailer'

const { FROM_EMAIL, TO_EMAIL, EMAIL_PASSWORD } = process.env

export const POST = async (request: NextRequest) => {
  let name: string, email: string, message: string
  try {
    const formData = ContactFormSchema.parse(await request.json())
    name = formData.name
    email = formData.email
    message = formData.message
  } catch {
    // Error UX is handled on the client. A bad request shouldn't happen, so we can just return a generic error message here.
    return NextResponse.json({ success: false, message: 'Missing or invalid fields' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.elasticemail.com',
    port: 587,
    secure: false,
    auth: {
      user: TO_EMAIL,
      pass: EMAIL_PASSWORD
    }
  })

  const mailOptions: Mail.Options = {
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject: `Email from Portfolio — ${name}`,
    html: `
      <h1>${name} sent you a message!</h1>
      <p style="padding: 10px; border: 1px solid black; border-radius: 5px; max-width: 600px;">
        <strong>Message ✉️</strong><br>
        ${message}
      </p>
      <small>Reply to: ${email}</small>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 })
  } catch {
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 })
  }
}
