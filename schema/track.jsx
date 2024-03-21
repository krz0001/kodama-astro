import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'track',
  title: 'Track',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title (english)',
      type: 'string',
      description: 'WILL BE INTERNATIONALIZED',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'artist',
      title: 'Artist',
      type: 'string',
      description: 'WILL BE TRANSFORMED INTO A REFERENCE FIELD TO EASILY REFERENCE ARTISTS',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      description: 'WILL BE INTERNATIONALIZED',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      artist: 'artist'
    },
    prepare(selection) {
      const {title, artist} = selection
      // generate a unique hue (an int from 0 to 360) based on the title
      const color = Math.abs(title.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0)) % 360
      
      return {
        title: title,
        subtitle: artist,
        media: <div style={{backgroundColor: `hsl(${color}, 50%, 50%)`, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <span style={{filter: 'brightness(0)'}}>🎵</span>
        </div>
      }
    }
  },
})
