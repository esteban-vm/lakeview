import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import localFont from 'next/font/local'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Lakeview Club',
  description: 'Lakeview Country Club - A Great Lifestyle',
}

const lora = localFont({
  variable: '--font-lora',
  display: 'swap',
  fallback: ['serif'],
  src: [
    { path: '../../public/fonts/lora-regular.woff2', style: 'normal' },
    { path: '../../public/fonts/lora-italic.woff2', style: 'italic' },
  ],
})

const satisfy = localFont({
  variable: '--font-satisfy',
  src: '../../public/fonts/satisfy-regular.woff2',
  display: 'swap',
  style: 'normal',
  weight: '400',
  fallback: ['cursive'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${lora.variable} ${satisfy.variable}`}>{children}</body>
    </html>
  )
}
