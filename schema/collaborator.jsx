import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'collaborator',
  title: 'Collaborator',
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
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'url' }],
    })
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare(selection) {
      const { title } = selection

      return {
        title: title,
        media: <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={`https://avatar.vercel.sh/${title}.svg?text=${title[0].toUpperCase()}`} />
        </div>
      }
    }
  }
})
