import type { CollectionConfig } from 'payload';

export const Works: CollectionConfig = {
    slug: 'works',
    fields: [
        {
            name: 'heading',
            label: 'Heading',
            type: 'text',
            required: true, 
        },
        {
            name: 'subHeading',
            label: 'Sub Heading',
            type: 'text',
            required: true, 
        },
        {
            name: 'description',
            label: 'Description',
            type: 'textarea',
            required: true, 
        },
        {
            name: 'image',
            label: 'Image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'technologies',
            label: 'Technologies',
            type: 'array',
            labels: {
                singular: 'Technology',
                plural: 'Technologies',
            },
            fields: [
                {
                    name: 'tech',
                    label: 'Technology',
                    type: 'text',
                    required: true,
                },
            ],
        },
        {
            name: 'redirectLink',
            label: 'Redirect Link',
            type: 'text',
            required: true,
        },
        {
            name: 'priority',
            label: 'Priority',
            type: 'number',
            required: true,
            defaultValue: 0,
        },
    ],
};

export default Works;
