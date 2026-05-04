import type { Metadata } from 'next'
import './globals.css'
import { Footer, NavigationBar } from '@components'
import { BlursBG } from '@components/backgrounds'
import { APP_FONTS_VARIABLES } from '@consts'
import Head from 'next/head'

export const metadata: Metadata = {
  title: "Kevin's Portfolio — Fullstack Developer | Next.js, TypeScript, Web Applications",
  description:
    'I build full-stack web applications with Next.js and TypeScript. From dashboards to AI tools, I focus on shipping usable products.',
  icons: {
    icon: '/favicon.svg'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${APP_FONTS_VARIABLES} h-full antialiased`}>
      <Head>
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <body className='min-h-full flex flex-col bg-[#02020A] overflow-x-hidden'>
        {children}

        <BlursBG />
        <Footer />
        <NavigationBar />
      </body>
    </html>
  )
}
