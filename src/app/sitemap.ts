import type { MetadataRoute } from "next";

// The homepage now serves LP-B (content spec section 03) and is
// intentionally excluded — noindex, nofollow, paid traffic only.
export default function sitemap(): MetadataRoute.Sitemap {
  return [];
}
