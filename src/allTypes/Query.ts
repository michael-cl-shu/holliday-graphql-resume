import { queryType } from 'nexus'
import { data } from 'src/data'
import { Bio } from './index'

export const Query = queryType({
  definition(t) {
    t.field('bio', {
      type: Bio,
      resolve: () => data.bio,
    })
  },
})
