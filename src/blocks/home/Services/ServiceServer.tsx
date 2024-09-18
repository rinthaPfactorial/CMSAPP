import React, { ReactNode, cache } from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import type { Service as ServiceType } from '../../../payload-types'
import { SectionHeading, SlideIn, Transition, HoverImageLink } from '@/blocks/ui'
import bg from "../../../assets/bgservice.jpg"

const querySevices = cache(async () => {
    const payload = await getPayloadHMR({ config })
    const result = await payload.find({
        collection: 'services',
    })
    return result.docs || []
})

export default async function ServicesServer() {
    const services: ServiceType[] = await querySevices()

    const sortedServices = services.sort((a, b) => a.order - b.order)

    console.log(sortedServices)

    return (
        <section className="px-2 py-20 relative  bg-no-repeat bg-cover" id="services" style={{
            backgroundImage: `url(${bg.src})`,
        }}>
            <div className="absolute inset-0 bg-paceBlue opacity-90 z-10"></div>
            <div className="relative z-10">
                <span className="blob absolute top-[20%] right-0 w-1/3 h-5/6 blur-[100px] rotate-180 -z-10" />
                <SectionHeading className="md:pl-16 overflow-hidden md:px-20">
                    <SlideIn className="text-foreground">Here&apos;s how</SlideIn> <br />
                    <SlideIn className=" text-gamaGreen">I can help you</SlideIn>
                </SectionHeading>
                <div className="mx-auto pt-4">
                    {services.map((service) => (
                        <Transition key={service.id}>
                            <HoverImageLink
                                heading={service.service_name}
                                href=""
                                imgSrc={service.hover_img.url}
                                subheading={service.service_desc}
                            />
                        </Transition>
                    ))}
                </div>
                <Transition className="flex items-center py-10 md:hidden">
                    <div className="p-4 rounded-full border border-white/50">
                        <span>Discuss the project</span>
                    </div>
                </Transition>
            </div>
        </section>
    )
}
