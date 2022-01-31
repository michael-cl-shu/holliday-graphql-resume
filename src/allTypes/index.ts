import { decorateType } from 'nexus'
import { GraphQLDate, GraphQLURL } from 'graphql-scalars'

export const GQLDate = decorateType(GraphQLDate, {
  sourceType: 'Date',
  asNexusMethod: 'date',
})

export const GQLURL = decorateType(GraphQLURL, {
  sourceType: 'URL',
  asNexusMethod: 'url',
})

export * from './Query'
export * from './Bio'
