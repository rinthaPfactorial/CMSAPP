import React, { ReactNode, cache } from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Testimonials from './Testimonial'
import { Testimonial } from '@/payload-types'

const querySevices = cache(async () => {
    const payload = await getPayloadHMR({ config })
    const result = await payload.find({
        collection: 'testimonials',
    })
    return result.docs || [] // Return all docs
})

export default async function TestimonialServer() {
    const Testimonialdata: Testimonial[] = await querySevices()
    // console.log("Testimonial data", Testimonialdata)


    return (
        <>
            <Testimonials data={Testimonialdata} speed="normal" pauseOnHover />
            <Testimonials data={Testimonialdata} pauseOnHover
                speed="normal"
                direction="left" />
        </>

    )
}