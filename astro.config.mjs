import { defineConfig } from 'astro/config'
import { sanityIntegration as sanity } from "@sanity/astro";
import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: "4b15qvbk",
    dataset: "production",
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