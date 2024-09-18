import React, { ReactNode, cache } from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import type { Service as ServiceType } from '../../../payload-types'
import { Waypoints } from 'lucide-react'

const querySevices = cache(async () => {
    const payload = await getPayloadHMR({ config })
    const result = await payload.find({
        collection: 'services',
    })
    return result.docs || [] // Return all docs
})

export default async function ServicesCardServer() {
    const services: ServiceType[] = await querySevices()

    // Sort services by the `order` field
    const sortedServices = services.sort((a, b) => a.order - b.order)
    const two_Services = sortedServices.slice(0, 2);

    return (
        <section
            className="grid md:grid-cols-3 gap-20 pt-10 px-4 relative -mt-20  md:px-24 "
            id="about"
        >
            {two_Services.map((service) => (
                <div className="bg-white px-12 py-10 rounded-md shadow-md  flex flex-col" key={service.id}>
                    <Waypoints size={50} className="text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-paceBlue">{service.service_name}</h3>
                    <p className="text-paceBlue/60">{service.service_desc}</p>
                </div>
            ))}
        </section>
    )
}
