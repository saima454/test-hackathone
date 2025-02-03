import { type SchemaTypeDefinition } from 'sanity';

import hero from './landingPage_sections/hero';
import cards from './landingPage_sections/cards';

;
import landingPage from './landingPage';
import { product } from './product';
import { userSchema } from './user';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,landingPage, hero, cards,userSchema],
};
