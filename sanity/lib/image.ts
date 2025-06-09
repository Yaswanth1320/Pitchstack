// sanity/lib/image.ts
import createImageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

import { client } from "./client"; // <-- Path to your Sanity client instance

const imageBuilder = createImageUrlBuilder(client);

export const urlForImage = (source: Image | null | undefined) => {
  if (!source) {
    return undefined; // Or return a default image URL string
  }
  return imageBuilder?.image(source)?.auto("format")?.fit("max");
  // You can chain other methods like .width(), .height(), .quality() if needed
  // but since you're using Next/image with width/height props, the core .image(source) is enough for src
};
