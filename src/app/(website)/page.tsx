import ServicesCardServer from '@/blocks/home/Services/Server'
import React from 'react'
import { Transition, TextReveal, SectionHeading, SlideIn } from '@/blocks/ui'
import Link from 'next/link'
import HeroServer from '@/blocks/home/Hero/Server'
import AboutClient from '@/blocks/home/About/About'
import { About } from '@/blocks/home/About/Server'
import ServicesServer from '@/blocks/home/Services/ServiceServer'
import SkillsServer from '@/blocks/home/Skills/Server'
import TestimonialServer from '@/blocks/home/Testimonials/Server'
import HeaderServer from '@/blocks/global/Header/Server'
import WorkServer from '@/blocks/home/Works/Server'

export default function page() {
  return (
    <section>
      <HeaderServer />
      <HeroServer />
      <ServicesCardServer />
      <SectionHeading className="md:pl-16 overflow-hidden md:px-24 pt-20">
        <SlideIn className="text-paceBlue">Want to know</SlideIn> <br />
        <SlideIn className='' >About me</SlideIn>
      </SectionHeading>
      <About />
      <SkillsServer />
      <ServicesServer />
      <WorkServer />
      <TestimonialServer />
    </section>
  )
}

