import { objectType } from 'nexus'

export const Bio = objectType({
  name: 'Bio',
  definition(t) {
    t.string('name')
    t.string('tagline')
    t.string('email')
    t.url('github', { resolve: (bio) => new URL(bio.github) })
    t.url('website', { resolve: (bio) => new URL(bio.website) })
    t.url('linkedin', { resolve: (bio) => new URL(bio.linkedin) })
    t.string('objective')
  },
})
