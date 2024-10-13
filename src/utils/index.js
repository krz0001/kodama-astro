import { sanityClient } from "sanity:client";
import imageUrlBuilder from "@sanity/image-url";

export const imageBuilder = imageUrlBuilder(sanityClient);

export function urlForImage(source) {
  return imageBuilder.image(source);
}

export function urlForVideo(source) {
  if (source && source.asset && source.asset._ref) {
    const assetRef = source.asset._ref;
    const [, id, extension] = assetRef.split('-');
    return `https://cdn.sanity.io/files/${sanityClient.config().projectId}/${sanityClient.config().dataset}/${id}.${extension}`;
  } else {
    console.error("Invalid video source", source);
    return null;
  }
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatBirthDate(date) {
  const options = { month: 'long', day: 'numeric' };
  const formattedDate = new Date(date).toLocaleDateString("en-US", options);
  const day = formattedDate.split(' ')[1];
  let suffix = 'th';
  if (day === '1' || day === '21' || day === '31') {
      suffix = 'st';
  } else if (day === '2' || day === '22') {
      suffix = 'nd';
  } else if (day === '3' || day === '23') {
      suffix = 'rd';
  }
  return formattedDate + suffix;
}

export function getWebsiteName(url) {
  // Check if the URL includes a specific string to determine the music related website
  switch (true) {
    case url.includes("youtube.com"):
      return "YouTube";
    case url.includes("music.youtube.com"):
      return "YouTube Music";
    case url.includes("spotify.com"):
      return "Spotify";
    case url.includes("apple.com"):
      return "Apple Music";
    case url.includes("soundcloud.com"):
      return "SoundCloud";
    case url.includes("bandcamp.com"):
      return "Bandcamp";
    case url.includes("vgmdb.net"):
      return "VGMdb";
    case url.includes("thwiki.cc"):
      return "THB Wiki";
    case url.includes("booth.pm"):
      return "BOOTH";
    case url.includes("deezer.com"):
      return "Deezer";
  }
}

export function getWebsiteIcon(url) {
  // Check if the URL includes a specific string to determine the music related website
  switch (true) {
    case url.includes("youtube.com"):
      return "youtube";
    case url.includes("music.youtube.com"):
      return "youtube";
    case url.includes("spotify.com"):
      return "spotify";
    case url.includes("apple.com"):
      return "apple";
    case url.includes("soundcloud.com"):
      return "soundcloud";
    case url.includes("bandcamp.com"):
      return "bandcamp";
    case url.includes("vgmdb.net"):
      return "vgmdb";
    case url.includes("thwiki.cc"):
      return "thwiki";
    case url.includes("booth.pm"):
      return "booth";
    case url.includes("deezer.com"):
      return "deezer";
    case url.includes("twitter.com"):
      return "x";
    case url.includes("x.com"):
      return "x";
    default:
      return "globe";
  }
}

export function isWebsiteStore(url) {
  switch (true) {
    case url.includes("music.youtube.com"):
    case url.includes("spotify.com"):
    case url.includes("apple.com"):
    case url.includes("deezer.com"):
    case url.includes("soundcloud.com"):
    case url.includes("bandcamp.com"):
    case url.includes("booth.pm"):
      return true;
    default:
      return false;
  }
}

export function isStreaming(url) {
  switch (true) {
    case url.includes("music.youtube.com"):
    case url.includes("spotify.com"):
    case url.includes("apple.com"):
    case url.includes("deezer.com"):
    case url.includes("soundcloud.com"):
      return true;
    default:
      return false;
  }
}

export function isPurchase(url) {
  switch (true) {
    case url.includes("bandcamp.com"):
    case url.includes("booth.pm"):
      return true;
    default:
      return false;
  }
}

