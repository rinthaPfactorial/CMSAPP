import React, { ReactNode, cache } from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import type { Service as ServiceType } from '../../../payload-types'
import { Waypoints } from 'lucide-react'
import { Service } from '@/utils/interfaces'

interface ServiceProps {
    ServiceData: ServiceType;
  }  


const querySevices = cache(async () => {
    const payload = await getPayloadHMR({ config })
    const result = await payload.find({
        collection: 'services',
    })
    return result.docs || [] // Return all docs 
})

export default async function ServicesCardServer({ServiceData}:ServiceProps) {
    const services: ServiceType[] = await querySevices()

    // Sort services by the `order` field
    const sortedServices = services.sort((a, b) => a.order - b.order)
    const two_Services = sortedServices.slice(0, 2);

    return (
        <section
            className="grid md:grid-cols-3 gap-24 pt-10 px-4 relative -mt-20  md:px-24 "
            id="Service"
        >
            {two_Services.map((service) => (
                <div className="bg-white px-12 py-10  shadow-md  flex flex-col" key={service.id}>
                    <Waypoints size={50} className="text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-3 text-paceBlue">{service.service_name}</h3>
                    <p className="text-paceBlue/60  text-sm">{service.service_desc}</p>
                </div>
            ))}
            <div className="bg-paceBlue px-12 py-10  shadow-md  flex flex-col" >
                <Waypoints size={50} className="text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-3 text-white">and much more!</h3>
                <p className="text-white/60 text-sm" >Quisque ac augue vitae lorem mollis tempor. Vivamus laoreet, dolor et commodo molestie.</p>
            </div>
        </section>
    )
}
