import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'staff',
  title: 'Staff',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'realName',
      title: 'Real Name',
      type: 'string',
    }),
    defineField({
      name: 'pronouns',
      title: 'Pronouns',
      type: 'string',
    }),
    defineField({
      name: 'dateOfBirth',
      title: 'Date of Birth',
      type: 'date',
    }),
    defineField({
      name: 'placeOfBirth',
      title: 'Place of Birth',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'internationalizedArrayBlockContent',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  }
})
