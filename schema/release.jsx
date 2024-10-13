import { defineField, defineType } from "sanity";

export default defineType({
  name: "release",
  title: "Album Release",
  type: "document",
  groups: [
    {
      name: "metadata",
      title: "Metadata",
      default: true,
    },
    {
      name: "links",
      title: "Links",
    },
    {
      name: "tracklist",
      title: "Tracklist",
    },
    {
      name: "credits",
      title: "Credits",
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "metadata",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
      group: "metadata",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "internationalizedArrayBlockContent",
      group: "metadata",
    }),

    defineField({
      name: "circleName",
      title: "Circle Name",
      type: "string",
      group: "metadata",
    }),

    defineField({
      name: "circleUrl",
      title: "Circle URL",
      type: "url",
      group: "metadata",
    }),

    defineField({
      name: "specification",
      title: "Specification",
      type: "string",
      list: [
        "Original Work",
        "Cover Album",
        "Remix Album",
        "Collaboration Album",
        "Compilation Album",
        "Single",
      ],
      group: "metadata",
    }),

    defineField({
      name: "releaseDate",
      title: "Release Date",
      type: "date",
      validation: (Rule) => Rule.required(),
      group: "metadata",
    }),
    defineField({
      name: "releaseDateAddendum",
      title: "Release Date Addendum",
      type: "string",
      description:
        'Text to display after the release date. Example: "(M3-2023 Fall)"',
      group: "metadata",
    }),

    // catalog number
    defineField({
      name: "catalogNumber",
      title: "Catalog Number",
      type: "string",
      group: "metadata",
    }),

    // price
    defineField({
      name: "price",
      title: "Price",
      type: "text",
      rows: 3,
      group: "metadata",
    }),

    defineField({
      name: "color",
      title: "Color",
      type: "string",
      description:
        'Color used to theme the page. Please use a hex value without the #. Example: "F5A623".',
      validation: (Rule) => Rule.required().min(3).max(6),
      options: {
        maxLength: 7,
      },
      group: "metadata",
    }),

    defineField({
      name: "soundcloudTrackId",
      title: "Soundcloud Track ID",
      type: "string",
      group: "metadata",
    }),
    defineField({
      name: "youtubeVideoId",
      title: "YouTube Video ID",
      type: "string",
      group: "metadata",
    }),

    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
      group: "metadata",
    }),

    defineField({
      name: "cover",
      title: "Cover",
      type: "image",
      options: {
        hotspot: true,
      },
      group: "metadata",
    }),

    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
      group: "metadata",
    }),

    defineField({
      name: "backgroundVideo",
      title: "Background Video",
      type: "file",
      group: "metadata",
    }),

    defineField({
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
      description:
        'Color used to theme the page. Please use a hex value without the #. Example: "F5A623".',
      validation: (Rule) => Rule.min(3).max(6),
      options: {
        maxLength: 7,
      },
      group: "metadata",
    }),

    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "url",
        },
      ],
      group: "links",
    }),


    //#region Tracklist 
    defineField({
      name: "cds",
      title: "CDs",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "cd" }],
        },
      ],
      group: "tracklist",
    }),

    defineField({
      name: "tracklist",
      title: "Tracklist",
      type: "array",
      of: [
        {
          type: "object",
          name: "track",
          fields: [
            {
              type: "internationalizedArrayString",
              name: "title",
              title: "Title",
            },
            {
              type: "internationalizedArrayString",
              name: "artist",
              title: "Artist(s)",
            },
            {
              type: "internationalizedArrayBlockContent",
              name: "description",
              title: "Description",
            },
            {
              type: "reference",
              to: [{ type: "cd" }],
              name: "cd",
              title: "CD",
            },
          ],
          preview: {
            select: {
              title: "title",
              artist: "artist",
              cdTitle: "cd.title",
            },
            prepare(selection) {
              const { title, artist, cdTitle } = selection;
              const color = Math.abs(title[0].value.split("").reduce((acc, char) => char.charCodeAt(0) + acc, 0)) % 360;

              return {
                title: title[0].value,
                subtitle: `${artist[0].value} - ${cdTitle || 'No CD'}`,
                media: (
                  <div
                    style={{
                      backgroundColor: `hsl(${color}, 50%, 50%)`,
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ filter: "brightness(0)" }}>🎵</span>
                  </div>
                ),
              };
            },
          },
        },
      ],
      group: "tracklist",
    }),

    defineField({
      name: "credits",
      title: "Credits",
      type: "array",
      of: [
        {
          type: "object",
          name: "credit",
          fields: [
            {
              type: "internationalizedArrayString",
              name: "role",
              title: "Role",
            },
            {
              type: "reference",
              to: { type: "collaborator" },
              name: "collaborator",
              title: "Collaborator",
            },
          ],
          preview: {
            select: {
              title: "collaborator.name",
              subtitle: "role",
            },
            prepare(selection) {
              const { title, subtitle } = selection;

              return {
                title: title,
                subtitle: subtitle[0].value,
                media: (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={`https://avatar.vercel.sh/${title}.svg?text=${title[0].toUpperCase()}`}
                    />
                  </div>
                ),
              };
            },
          },
        },
      ],
      group: "credits",
    }),

    defineField({
      name: "footerCredits",
      title: "Footer Credits",
      type: "string",
      description:
        'Text to display in the footer. Example: "All original compositions and characters respective of Mori Calliope."',
      group: "metadata",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "catalogNumber",
      media: "cover",
    },
  },
});
