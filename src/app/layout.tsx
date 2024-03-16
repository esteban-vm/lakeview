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
  fallback: ['sans-serif'],
  src: [
    { path: '../assets/fonts/Lora-VariableFont_wght.woff2', style: 'normal' },
    { path: '../assets/fonts/Lora-Italic-VariableFont_wght.woff2', style: 'italic' },
  ],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={lora.variable}>{children}</body>
    </html>
  )
}
