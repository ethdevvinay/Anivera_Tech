import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/", // Hide API routes from crawlers
    },
    sitemap: "https://aniveratech.com/sitemap.xml",
  };
}
