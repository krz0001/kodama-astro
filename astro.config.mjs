// Loading environment variables from .env files
// https://docs.astro.build/en/guides/configuring-astro/#environment-variables
import { loadEnv } from "vite";
const { PUBLIC_SANITY_STUDIO_PROJECT_ID, PUBLIC_SANITY_STUDIO_DATASET, } = loadEnv(import.meta.env.MODE, process.cwd(), "");

import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // Hybrid+adapter is required to support embedded Sanity Studio
  output: "hybrid",
  integrations: [sanity({
    PUBLIC_SANITY_STUDIO_PROJECT_ID,
    PUBLIC_SANITY_STUDIO_DATASET,
    studioBasePath: "/admin",
    useCdn: false,
    // `false` if you want to ensure fresh data
    apiVersion: "2023-03-20" // Set to date of setup to use the latest API version
  }), react() // Required for Sanity Studio
  ]
});