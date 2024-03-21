import { defineConfig } from 'astro/config'
import { loadEnv } from "vite";
const {
  PUBLIC_SANITY_STUDIO_PROJECT_ID,
  PUBLIC_SANITY_STUDIO_DATASET
} = loadEnv(import.meta.env.MODE, process.cwd(), "");
import sanity from "@sanity/astro";
import react from "@astrojs/react";

const projectId = PUBLIC_SANITY_STUDIO_PROJECT_ID;
const dataset = PUBLIC_SANITY_STUDIO_DATASET;

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [sanity({
    projectId: projectId,
    dataset: dataset,
    studioBasePath: "/admin",
    useCdn: false,
    // `false` if you want to ensure fresh data
    apiVersion: "2024-03-18" // Set to date of setup to use the latest API version
  }), react() // Required for Sanity Studio
  ],
  redirects: {
    "/admin/[...path]" : "/admin"
  }
});