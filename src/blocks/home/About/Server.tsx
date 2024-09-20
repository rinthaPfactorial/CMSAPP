// Server component: AboutServer.tsx
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import AboutClient from './About'
import { Transition, TextReveal,SectionHeading,SlideIn } from '@/blocks/ui'

export async function About() {
  const payload = await getPayloadHMR({ config })
  const about = await payload.findGlobal({
    slug: 'about',
  })
  return (
    <div>    
       <SectionHeading className="md:pl-16 overflow-hidden md:px-24 pt-20">
        <SlideIn className="text-paceBlue">Want to know</SlideIn> <br />
        <SlideIn className='text-foreground' >About me</SlideIn>
      </SectionHeading>
      <AboutClient aboutData={about} />
    </div>
  )
}
