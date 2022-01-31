import { objectType } from 'nexus'
import { differenceInYears, differenceInMonths } from 'date-fns'

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
    t.int('years', {
      description: 'Number of years at this position',
      resolve: ({ endDate, startDate }) =>
        differenceInYears(
          endDate ? new Date(endDate) : new Date(),
          new Date(startDate)
        ),
    })
    t.int('months', {
      resolve: ({ endDate, startDate }) =>
        differenceInMonths(
          endDate ? new Date(endDate) : new Date(),
          new Date(startDate)
        ) % 12,
    })
  },
})
