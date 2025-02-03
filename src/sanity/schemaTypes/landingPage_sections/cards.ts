// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Card Section',
    name: 'cards',
    type: 'object',
    fields: [
      {
        title: 'Card Section Main Heading',
        name: 'cardsMainHeading',
        type: 'string',
      },
      {
        title: 'Cards',
        name: 'cards',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { title: 'Card Image', name: 'cardImg', type: 'image' },
              { title: 'Card Heading', name: 'cardHeading', type: 'string' },
              { title: 'Card SubHeading', name: 'cardSubHeading', type: 'string' },
              { title: 'Card Price', name: 'cardPrice', type: 'number' },
              { title: 'Card Old Price', name: 'cardOldPrice', type: 'number' },
            ],
          },
        ],
      },
    ],
  };
  