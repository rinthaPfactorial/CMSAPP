import HeaderServer from '@/blocks/global/Header/Server'
import React, { ReactNode } from 'react'
import { Transition, TextReveal } from '@/blocks/ui'
import Link from 'next/link'
import '@/styles/globals.css'
import { FooterServer } from '@/blocks/global/Footer/Server'


export default function layout({ children }: { children: ReactNode }) {

  return (

    <main className="relative bg-white ">
      <Transition className="fixed md:top-8 top-6 md:left-8 left-6 z-30 hover:text-white/80 text-white/40">
        <Link href={"/"}>
          <TextReveal className="font-semibold text-sm text-transparent">.</TextReveal>
        </Link>
      </Transition>
      {children}
      <FooterServer />
    </main>
  )
}
