import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schema} from './schema'

const projectId = import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_STUDIO_DATASET;

export default defineConfig({
  name: 'default',
  title: 'kodama',

  projectId: projectId,
  dataset: dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schema,
  },
})
