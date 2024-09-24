import { CollectionConfig } from "payload";

export const Testimonials: CollectionConfig = {
    slug: 'testimonials', // Slug for the testimonials collection
    fields: [
        {
            name: 'clientName',
            label: 'Client Name',
            type: 'text',
            required: true, // Make it required
        },
        {
            name: 'companyName',
            label: 'Company Name / Designation',
            type: 'text',
            required: true, // Make it required
        },
        {
            name: 'description',
            label: 'Description',
            type: 'textarea',
            required: true,
        }

    ],
};

export default Testimonials;
