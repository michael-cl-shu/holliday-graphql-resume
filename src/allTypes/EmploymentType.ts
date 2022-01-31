import { enumType } from 'nexus'
export const EmploymentType = enumType({
  name: 'EmploymentType',
  members: ['FULL_TIME', 'PART_TIME', 'CONSTRACT', 'INTERNSHIP'],
})
