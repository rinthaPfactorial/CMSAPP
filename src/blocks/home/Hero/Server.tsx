import React, { ReactNode } from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Image from 'next/image'
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import wideimage from "../../../assets/portfolio_bg01.jpg";
import { SlideIn,TextReveal,Transition } from '@/blocks/ui';


export default async function HeroServer() {
  const payload = await getPayloadHMR({ config })
  const about = await payload.findGlobal({
    slug: 'about',

  })
  
  return (
    <section
    className="lg:h-[80vh] w-dvw overflow-hidden relative bg-cover bg-center px-8 z-0 pt-20"
    style={{ backgroundImage: `url(${wideimage.src})` }}
>    {/* Overlay */}
    <div className="absolute inset-0 bg-paceBlue opacity-40 z-10"></div>
    <>
        <div className="relative h-full w-full flex lg:flex-row flex-col items-center justify-between xl:container xl:mx-auto md:px-20 z-20">
            {/* Left Side: Text Content */}
            <div className="flex flex-col justify-center h-full lg:pt-0 pt-10 pb-10 lg:w-1/2 w-full text-white/80 z-30">
                <div className="py-6">
                    <h2 className="md:text-7xl text-4xl font-bold overflow-hidden">
                        <SlideIn>{about.fullname}</SlideIn>
                    </h2>
                    <h1 className="md:text-xl text-xl overflow-hidden">
                        <SlideIn>{about.designation}</SlideIn>
                    </h1>
                </div>
                <Transition viewport={{ once: true }}>
                    <Link
                        href={"#contact"}
                        className="px-5 py-3 mt-4 rounded-full border border-black/50 bg-white flex items-center gap-4 group text-black"
                        style={{ display: 'inline-flex' }}
                    >
                        <TextReveal className="inline-flex">Let&apos;s talk</TextReveal>
                        <ArrowRight
                            size={20}
                            className="group-hover:rotate-90 transition-transform inline-flex"
                        />
                    </Link>
                </Transition>
            </div>

            {/* Right Side: CEO Image */}
            <div className="flex justify-center items-center h-full lg:pt-20  lg:w-1/2 w-full z-30">
                <SlideIn>
                    <Image
                        src={about.profileImage.url}
                        alt="CEO Image"
                        className="max-w-full h-auto"
                        width={900}
                        height={500}
                    />
                </SlideIn>
            </div>
        </div>
    </>

</section>
  )
}