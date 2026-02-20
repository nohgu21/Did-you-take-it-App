import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Smart Checklist',
  description: 'Never forget your essentials',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}