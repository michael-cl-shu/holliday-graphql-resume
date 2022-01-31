import { queryType, idArg } from 'nexus'
import { data } from 'src/data'
import { Bio, Position } from './index'

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
    t.field('position', {
      type: Position,
      args: { id: idArg() },
      resolve: (_, { id }) => data.positions.find((p) => p.id === id),
    })
  },
})
