import config  from "@payload-config";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import React, { cache } from "react";
import type { Page as PageType } from '../../../payload-types'
import { notFound } from "next/navigation";
import { RenderBlocks } from "@/utils/RenderBlocks";

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
    const parsedSlug = decodeURIComponent(slug)
    const payload = await getPayloadHMR({ config })
    const result = await payload.find({
        collection: 'pages',
        draft:false,
        limit: 1000 ,
        where: { slug: { equals: parsedSlug, }, },
    })
    return result.docs?.[0] || null
})

export default async function Page({ params: { slug = 'index' } }) {
    let page: PageType | null
    page = await queryPageBySlug({ slug, })
 
    // if (!page) {
    //     return notFound()
    // }

    return(
        <article>
            {/* <RenderBlocks blocks={page.layout} /> */}
        </article>
    )
}