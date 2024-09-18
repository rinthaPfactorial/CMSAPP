import ServicesCardServer from '@/blocks/home/Services/Server'
import React from 'react'
import { Transition, TextReveal,SectionHeading,SlideIn } from '@/blocks/ui'
import Link from 'next/link'
import HeroServer from '@/blocks/home/Hero/Server'
import AboutClient from '@/blocks/home/About/About'
import { About } from '@/blocks/home/About/Server'
import ServicesServer from '@/blocks/home/Services/ServiceServer'

export default function page() {
  return (
    <section>
      <HeroServer />
      <ServicesCardServer />
      <SectionHeading className="md:pl-16 overflow-hidden md:px-24 pt-20">
        <SlideIn className="text-paceBlue">Want to know</SlideIn> <br />
        <SlideIn className='' >About me</SlideIn>
      </SectionHeading>
      <About />
      <ServicesServer/>
    </section>
  )
}

