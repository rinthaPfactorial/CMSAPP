import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import FooterClient from "./Footer"

export  async function FooterServer() {
    const payload = await getPayloadHMR({ config })
    const footer = await payload.findGlobal({
      slug: 'about',
  
    })
  return (
<div>
  <FooterClient footerData={footer}/>
</div>  );
};
