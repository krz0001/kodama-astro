import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'release',
    title: 'Album Release',
    type: 'document',
    groups: [
        {
            name: "metadata",
            title: "Metadata",
            default: true,
        },
        {
            name: "tracklist",
            title: "Tracklist",
        }
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            group: 'metadata',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            validation: (Rule) => Rule.required(),
            options: {
                source: 'title',
                maxLength: 96,
            },
            group: 'metadata',
        }),
        defineField({
            name: 'color',
            title: 'Color',
            type: 'string',
            description: 'Color used to theme the page. Please use a hex value without the #. Example: "F5A623".',
            validation: (Rule) => Rule.required().min(3).max(6),
            options: {
                maxLength: 7
            },
            group: 'metadata',

        }),
        defineField({
            name: 'soundcloudTrackId',
            title: 'Soundcloud Track ID',
            type: 'string',
            group: 'metadata',
        }),
        defineField({
            name: 'youtubeVideoId',
            title: 'YouTube Video ID',
            type: 'string',
            group: 'metadata',
        }),

        defineField({
            name: 'releaseDate',
            title: 'Release Date',
            type: 'date',
            validation: (Rule) => Rule.required(),
            group: 'metadata',

        }),
        defineField({
            name: 'releaseDateAddendum',
            title: 'Release Date Addendum',
            type: 'string',
            description: 'Text to display after the release date. Example: "(M3-2023 Fall)"',
            group: 'metadata',
        }),

        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
            group: 'metadata',

        }),

        defineField({
            name: 'cover',
            title: 'Cover',
            type: 'image',
            options: {
                hotspot: true,
            },
            group: 'metadata',
        }),
        defineField({
            name: 'tracklist',
            title: 'Tracklist',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: { type: 'track' }
                }
            ],
            group: 'tracklist',
        }),

        defineField({
            name: 'footerCredits',
            title: 'Footer Credits',
            type: 'string',
            description: 'Text to display in the footer. Example: "All original compositions and characters respective of Mori Calliope."',
            group: 'metadata',
        }),


    ],
    preview: {
        select: {
            title: 'title',
            media: 'cover'
        }
    },
});