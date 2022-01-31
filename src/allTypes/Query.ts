import { queryType } from 'nexus'
import { data } from 'src/data'
import { Bio } from './index'
import { Position } from './Position'

export const Query = queryType({
  definition(t) {
    t.field('bio', {
      type: Bio,
      resolve: () => data.bio,
    })
    t.list.field('positions', {
      type: Position,
      resolve: () => data.positions,
    })
  },
})
