// Server component: AboutServer.tsx
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import AboutClient from './About'

export async function About() {
  const payload = await getPayloadHMR({ config })
  const about = await payload.findGlobal({
    slug: 'about',
  })
  console.log(about)
  return (
    <div>    
      <AboutClient aboutData={about} />
    </div>
  )
}
