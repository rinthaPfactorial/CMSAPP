import React,{ReactNode} from 'react'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config  from '@payload-config'
import Image from 'next/image'
import Link from 'next/link'

export default async function HeaderServer() {
    const payload = await getPayloadHMR({config})
    const header = await payload.findGlobal({
        slug:'header',
        
    })
  return (
    <div>
      <div className='relative w-64 h-20 flex justify-center items-center'>
        <Image src={header.logo.url} fill className='object-contain' alt={header.logo.alt}/>
        <div>
            {header.nav?.map((item,index)=>{
                return(<Link key={index} href={item.link} className='text-black text-lg mx-4'>{item.label}</Link>)
            })}
        </div>
      </div>
    </div>
  )
}
