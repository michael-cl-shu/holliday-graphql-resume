import { makeSchema } from 'nexus'
import * as types from './typeDefs'

export const schema = makeSchema({
  types,
})
