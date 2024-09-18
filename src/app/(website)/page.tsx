import ServicesServer from '@/blocks/home/Services/Server'
import React from 'react'
import { Transition, TextReveal } from '@/blocks/ui'
import Link from 'next/link'
import HeroServer from '@/blocks/home/Hero/Server'
import AboutClient from '@/blocks/home/About/About'
import { About } from '@/blocks/home/About/Server'

export default function page() {
  return (
    <section>
      <HeroServer />
      <ServicesServer />
      <About />
    </section>
  )
}

