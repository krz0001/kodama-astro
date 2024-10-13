import { defineField, defineType } from "sanity";

export default defineType({
  name: "cd",
  title: "CD",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "string",
      description: 'Color associated with this CD. Use hex value without #. Example: "F5A623".',
      validation: (Rule) => Rule.min(3).max(6),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
