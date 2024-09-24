import { CollectionConfig } from "payload";

export const Skills: CollectionConfig = {
  slug: "skills",
  fields: [
    {
      name: 'skills',
      label: 'Skills',
      type: 'array',
      labels: {
        singular: 'Skill',
        plural: 'Skills',
      },
      fields: [
        {
          type: 'text',
          name: 'skill',
          label: 'Skill',
          required: true,
        }, 
        {
          type: 'number',
          name: 'order',
          label: 'Order',
          required: true,
        }
      ],
      minRows: 5,
      maxRows: 10,
      required: true,
    }
  ],
};

export default Skills;
