'use client'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { PropsWithChildren } from 'react'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="container">
      <Header />
      <main className="flex h-screen w-screen items-center justify-center bg-white">
        {children}
      </main>
      <Footer />
    </div>
  )
}
