// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Landing Page',
  name: 'landingPage',
  type: 'document',
  fields: [
    {
      title: 'Sections',
      name: 'sections',
      type: 'array',
      of: [
        { type: 'hero' },
        { type: 'cards' },
      ],
    },
  ],
};
