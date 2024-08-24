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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'joinDate',
      title: 'Join Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hasLeft',
      title: 'Has Left',
      type: 'boolean',
    }),
    defineField({
      name: 'leaveText',
      title: 'Leave Text',
      type: 'string',

    }),
    defineField({
      name: 'collaborator',
      title: 'Collaborator',
      type: 'reference',
      to: [{ type: 'collaborator' }],
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
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
      role: 'role',
      media: 'photo',
    },
    prepare(selection) {
      const { title, role, media } = selection;
      return {
        title: title,
        subtitle: role[0].value,
        media: media,
      }
    },
  }
})
