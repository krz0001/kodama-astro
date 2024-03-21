//import { useSanityClient } from "@sanity/astro";
import {createClient} from '@sanity/client'
import groq from "groq";

const projectId = import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_STUDIO_DATASET;

const client = createClient(
    {
        "projectId": projectId,
        "dataset": dataset,
        "apiVersion": "2024-03-18",
    }
)

export async function getReleases() {
    return await client.fetch(groq `*[_type == "release" && defined(slug.current)] | order(_createdAt desc)`);
}
export async function getRelease(slug) {
    return await client.fetch(groq `*[_type == "release" && slug.current == $slug][0]`, {
        slug,
    });
}
