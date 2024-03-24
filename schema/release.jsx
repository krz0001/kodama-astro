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
            name: "links",
            title: "Links",
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
            name: 'circleName',
            title: 'Circle Name',
            type: 'string',
            group: 'metadata',
        }),

        defineField({
            name: 'circleUrl',
            title: 'Circle URL',
            type: 'url',
            group: 'metadata',
        }),

        defineField({
            name: 'specification',
            title: 'Specification',
            type: 'string',
            list: ['Original Work', 'Cover Album', 'Remix Album', 'Collaboration Album', 'Compilation Album', 'Single'],
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

        // catalog number
        // price
        // links


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
            name: 'background',
            title: 'Background',
            type: 'image',
            options: {
                hotspot: true,
            },
            group: 'metadata',
        }),

        defineField({
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [
                {
                    type: 'url'
                }
            ],
            group: 'links',
        }),

        defineField({
            name: 'tracklist',
            title: 'Tracklist',
            type: 'array',
            of: [
                {
                    type: "object",
                    name: "track",
                    fields: [
                        { type: "string", name: "titleEn" },
                        { type: "string", name: "artist", description: "WILL BE TRANSFORMED INTO A REFERENCE FIELD TO EASILY REFERENCE ARTISTS" },
                        { type: "blockContent", name: "description", description: "WILL BE INTERNATIONALIZED" }
                    ],
                    preview: {
                        select: {
                            title: 'titleEn',
                            artist: 'artist'
                        },
                        prepare(selection) {
                            const { title, artist } = selection
                            // generate a unique hue (an int from 0 to 360) based on the title
                            const color = Math.abs(title.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0)) % 360

                            return {
                                title: title,
                                subtitle: artist,
                                media: <div style={{ backgroundColor: `hsl(${color}, 50%, 50%)`, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <span style={{ filter: 'brightness(0)' }}>🎵</span>
                                </div>
                            }
                        }
                    }
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