//import { useSanityClient } from "@sanity/astro";
import {createClient} from '@sanity/client'
import groq from "groq";
import { toHTML } from "@portabletext/to-html";

const projectId = import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_STUDIO_DATASET;

const client = createClient(
    {
        "projectId": projectId,
        "dataset": dataset,
        "apiVersion": "2024-03-18",
    }
)

//#region Posts
export async function getPosts() {
    return await client.fetch(groq `*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`);
}
export async function getPost(slug) {
    return await client.fetch(groq `*[_type == "post" && slug.current == $slug][0]`, {
        slug,
    });
}
//#endregion

//#region Projects
export async function getProjects() {
    return await client.fetch(groq `*[_type == "project" && defined(slug.current)] | order(_createdAt desc)`);
}
export async function getProject(slug) {
    return await client.fetch(groq `*[_type == "project" && slug.current == $slug][0]`, {
        slug,
    });
}
//#endregion

//#region Releases
export async function getReleases() {
    return await client.fetch(groq `*[_type == "release" && defined(slug.current)] | order(_createdAt desc)`);
}
export async function getRelease(slug) {
    return await client.fetch(groq `*[_type == "release" && slug.current == $slug][0]{
        ...,
        collaborators[]->{
            ...
        }
    }`, {
        slug,
    });
}
//#endregion

//#region Staff
export async function getStaff() {
    return await client.fetch(groq `*[_type == "staff"] | order(_createdAt desc)`);
}
export async function getStaffMember(slug) {
    return await client.fetch(groq `*[_type == "staff" && slug.current == $slug][0]`, {
        slug,
    });
}
//#endregion

export async function getRef(ref) {
    return await client.fetch(groq `*[_id == $ref][0]`, {
        ref,
    });
}


//#region Portable Text Components
export function toCalloutButton(value) {
  // get the URL and the type of content
  let url = "/projects/rules";
  let content = value.content;
  if (content === "projectSubmission") {
    url = value.googleFormUrl;
  }

  // TODO: add icon, and localize the button string
  let buttonString, iconName;
  switch (value.content) {
    case "projectSubmission":
      // envelope icon
      iconName = "envelope";
      buttonString = "Please fill in the Google Forms";
      break;
    case "rules":
      // book icon
      iconName = "book";
      buttonString = "You can check the rules & submission patterns common to all releases here.";
      break;
    default:
      // ifnformation icon
      iconName = "info";
      buttonString = "Learn more";
  }

  // yeah uhhh just reference the icon svg in the string yeah bro
  return `<a href="${url}" class="kodama_btn kodama_btn--primary kodama_btn--lg mx-auto my-2 no-underline text-xl">
    <svg width="1em" height="1em" viewBox="0 0 512 512" data-icon="${iconName}">
      <use xlink:href="#ai:local:${iconName}" />
    </svg>
    ${buttonString}
  </a>`;
}