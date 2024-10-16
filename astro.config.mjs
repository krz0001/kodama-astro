import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";
const {
  PUBLIC_SANITY_STUDIO_PROJECT_ID,
  PUBLIC_SANITY_STUDIO_DATASET
} = loadEnv(import.meta.env.MODE, process.cwd(), "");
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import tailwind from "@astrojs/tailwind";
import liciousI18n from "@astrolicious/i18n";
import icon from "astro-icon";
const projectId = PUBLIC_SANITY_STUDIO_PROJECT_ID;
const dataset = PUBLIC_SANITY_STUDIO_DATASET;


// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [sanity({
    projectId: projectId,
    dataset: dataset,
    studioBasePath: "/admin",
    useCdn: true,
    // `false` if you want to ensure fresh data
    apiVersion: "2024-03-18" // Set to date of setup to use the latest API version
  }), react() // Required for Sanity Studio
  , tailwind(), liciousI18n({
    defaultLocale: "en",
    locales: ["en", "jp"],
    strategy: "prefixExceptDefault",
    client: {
      data: true
    }
  }), icon()],
  adapter: netlify(),
  image: {
    domains: ["cdn.sanity.io"]
  }
});