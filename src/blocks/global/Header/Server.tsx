import React, { ReactNode } from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/globals/Header'
import HeaderUi from './Header'

export default async function HeaderServer() {
  const payload = await getPayloadHMR({ config })
  const header = await payload.findGlobal({
    slug: 'header',
  })

  const payloadAbout = await getPayloadHMR({ config })
  const about = await payloadAbout.findGlobal({
    slug: 'about',
  })
  // console.log("About for navlinks", about)


  return (
    <div>
      
      <HeaderUi social={header} socialLinks={about.social_link } />
    </div>
  )
}