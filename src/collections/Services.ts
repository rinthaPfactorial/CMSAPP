import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  fields: [
    {
      name: 'service_name',
      label: 'Heading',
      type: 'text',
      required: true,
    },
    {
      name: 'service_desc',
      label: 'subHeading',
      type: 'textarea',
      required: true,
    },
    {
      name: 'service_icon',
      label: 'Icon',
      type: 'upload',
      relationTo: 'media',
    //   required: true,
    },
    {
        name: 'hover_img',
        label: 'Image',
        type: 'upload',
        relationTo: 'media',
        // required: true,
      },
      {
        name: 'order',
        label: 'order by',
        type: 'number',
        required: true,
      },

 
   
  ],
}
