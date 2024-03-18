// ./sanity.config.ts
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
const { PUBLIC_SANITY_STUDIO_PROJECT_ID, PUBLIC_SANITY_STUDIO_DATASET, } = loadEnv(import.meta.env.MODE, process.cwd(), "");


export default defineConfig({
  name: "kodama",
  title: "KodamaSoft/Sounds",
  projectId: PUBLIC_SANITY_STUDIO_PROJECT_ID,
  dataset: PUBLIC_SANITY_STUDIO_DATASET,
  plugins: [deskTool()],
  schema: {
    types: [],
  },
});