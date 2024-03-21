import { sanityClient } from "sanity:client";
import imageUrlBuilder from "@sanity/image-url";

export const imageBuilder = imageUrlBuilder(sanityClient);

export function urlForImage(source) {
  return imageBuilder.image(source);
}

export function formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}
