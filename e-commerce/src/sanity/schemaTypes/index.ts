import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './product'
import order from './order'
import user from './user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, order, user],
}
