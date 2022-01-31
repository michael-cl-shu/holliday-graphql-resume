import { makeSchema } from 'nexus'
import path from 'path'
import * as types from './allTypes'

export const schema = makeSchema({
  types,
  outputs: {
    schema: path.join(process.cwd(), 'src', 'schema.graphql'),
    typegen: path.join(process.cwd(), 'src', 'generated', 'nexus.ts'),
  },
  sourceTypes: {
    modules: [
      {
        module: path.join(process.cwd(), 'src', 'interfaces.ts'),
        alias: 'internal',
        typeMatch: (type) => new RegExp(`(${type}Interface)`),
      },
    ],
    mapping: {
      Date: 'Date',
      URL: 'URL',
    },
    debug: process.env.NODE_ENV !== 'production',
  },
  // contextType: {
  //   module: path.join(__dirname, 'data-sources', 'Context.ts'),
  //   export: 'Context',
  // },
  // prettierConfig: require.resolve('../../../.prettierrc'),
})
