import { objectType } from 'nexus'

export const Position = objectType({
  name: 'Position',
  definition(t) {
    t.id('id')
    t.string('title')
    t.string('company')
    t.date('startDate', { resolve: (position) => new Date(position.startDate) })
    t.date('endDate', {
      resolve: (position) =>
        position.endDate ? new Date(position.endDate) : null,
    })
    t.string('employmentType')
    t.string('location')
    t.list.string('achievements')
  },
})
