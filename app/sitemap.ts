import type { MetadataRoute } from "next";

const BASE_URL = "https://www.amaranadi.com";

// Single-page site: all sections (#about, #why, #services, #benefits,
// #coming-soon, #faq, #contact) live on the homepage, so the sitemap lists
// the canonical root URL. Crawlers ignore hash fragments as separate pages.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-04");

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
