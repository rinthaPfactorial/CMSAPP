import React, { ReactNode, cache } from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import {  Work } from '@/payload-types'
import Projects from './Works'

const querySevices = cache(async () => {
    const payload = await getPayloadHMR({ config })
    const result = await payload.find({
        collection: 'works',
    })
    return result.docs || [] // Return all docs
})

export default async function WorkServer() {
    const works: Work[] = await querySevices()
    console.log("works", works)


    return (
        <>
            <Projects data={works}  />
        </>

    )
}