import type { globalConfig } from 'payload'

export const About: globalConfig = {
  slug: 'about',
  fields: [
    {
      name: 'fullname',
      label: 'Full Name',
      type: 'text',
      required: true,
    },
    {
      name: 'designation',
      label: 'Designation',
      type: 'text',
      required: true,
    },
    {
      name: 'profileImage',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      required: true,
    },

    {
      name: 'phone',
      label: 'Phone Number',
      type: 'number',
      required: true,
    },
    {
      name: 'address',
      label: 'Address',
      type: 'text',
      required: true,
    },
    {
      name: 'description_heading',
      label: 'Description Heading',
      type: 'text',
      required: true,
    },
    { name: 'description', label: 'Content', type: 'textarea', required: true },
    {
      name: 'total_clients',
      label: 'Total no of Clients',
      type: 'number',
      required: true,
    },
    {
      name: 'total_experience',
      label: 'Total years of Experience',
      type: 'number',
      required: true,
    },
    {
      name: 'experience',
      label: 'Experience',
      type: 'array',
      fields: [
        { name: 'start_date', label: 'Start Date', type: 'text' },
        { name: 'end_date', label: 'End Date', type: 'text' },
        { name: 'role', label: 'Designation / Role', type: 'text' },
        { name: 'company', label: 'Company Name', type: 'text' },
        { name: 'order', label: 'order', type: 'number' },
      ],
      minRows: 1,
      // maxRows: 5,
      required: true,
    },
    {
      name: 'social_link',
      label: 'Social Link',
      type: 'array',
      fields: [
        { name: 'label', label: 'Label', type: 'text' },
        { name: 'link', label: 'Link', type: 'text' },
      ],
      minRows: 1,
      maxRows: 5,
      required: true,
    },
  ],
}
