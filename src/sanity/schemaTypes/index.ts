import { type SchemaTypeDefinition } from 'sanity'
// import product from './productMock'
import product from './productHackathon'
import product2 from './productHackathon'
import productMock from './productMock'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ product2 ,productMock],
}
