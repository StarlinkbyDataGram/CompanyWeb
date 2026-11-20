import { promises as fs, statSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { blogPosts } from "../client/data/blog";
import { seoArticles2026 } from "../client/data/blog/articles-2026";
import { industryLandingPages } from "../client/data/landing/industry-pages";
import { regionalLandingPages } from "../client/data/landing/regional-pages";
import { products } from "../client/data/products";
import { services } from "../client/data/services";
import { serviceLocations } from "../client/data/locations";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const BASE_URL = (process.env.SITE_URL ?? "https://www.datagram.ng").replace(/\/+$/, "");
const OUTPUT_PATH = path.resolve(__dirname, "../public/sitemap.xml");

type RouteEntry = {
  path: string;
  priority?: number;
  changefreq?: string;
  lastmod?: string;
};

function normalizePath(slug: string) {
  if (!slug.startsWith("/")) {
    return `/${slug}`;
  }
  return slug;
}

/** Latest mtime among existing content source files (ISO). Falls back only if none exist. */
function contentLastmod(...relativePaths: string[]): string {
  let maxMs = 0;
  for (const rel of relativePaths) {
    try {
      const ms = statSync(path.join(ROOT, rel)).mtimeMs;
      if (ms > maxMs) maxMs = ms;
    } catch {
      /* missing optional source */
    }
  }
  if (maxMs > 0) return new Date(maxMs).toISOString();
  return new Date().toISOString();
}

function articleLastmod(date?: string, updated?: string): string {
  const raw = updated || date;
  if (!raw) return contentLastmod("client/data/blog");
  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) return contentLastmod("client/data/blog");
  return parsed.toISOString();
}

function buildUrlEntries(): RouteEntry[] {
  const staticSource = contentLastmod(
    "client/pages/Index.tsx",
    "client/pages/About.tsx",
    "client/pages/Contact.tsx",
    "client/pages/Faq.tsx",
    "client/pages/LocationsIndex.tsx",
    "client/pages/LocationsAll.tsx",
    "client/pages/OurWork.tsx",
    "client/pages/Support.tsx",
    "client/pages/Privacy.tsx",
    "client/pages/Terms.tsx",
    "client/data/faq.ts",
    "client/data/guide.ts",
  );

  const servicesLastmod = contentLastmod(
    "client/data/services.ts",
    "client/data/service-seo-content.ts",
    "client/pages/ServiceDetail.tsx",
    "client/pages/Services.tsx",
  );

  const productsLastmod = contentLastmod("client/data/products.ts", "client/pages/Products.tsx", "client/pages/ProductDetail.tsx");

  const locationsLastmod = contentLastmod(
    "client/data/locations.ts",
    "client/data/locations-all.ts",
    "client/pages/LocationDetail.tsx",
  );

  const industryLastmod = contentLastmod("client/data/landing/industry-pages.ts", "client/pages/landing/IndustryLandingPage.tsx");

  const regionalLastmod = contentLastmod(
    "client/data/landing/regional-pages.ts",
    "client/data/landing/south-east-regional-pages.ts",
    "client/pages/landing/RegionalLandingPage.tsx",
  );

  const blogHubLastmod = contentLastmod("client/pages/Blog.tsx", "client/data/blog/blog-index.json");
  const ourWorkLastmod = contentLastmod("client/data/our-work-projects.ts", "client/pages/OurWork.tsx");
  const galleryLastmod = contentLastmod("client/pages/Gallery.tsx");

  const staticRoutes: RouteEntry[] = [
    { path: "/", priority: 1, changefreq: "weekly", lastmod: contentLastmod("client/pages/Index.tsx") },
    { path: "/about", priority: 0.9, changefreq: "monthly", lastmod: contentLastmod("client/pages/About.tsx") },
    { path: "/services", priority: 0.9, changefreq: "weekly", lastmod: servicesLastmod },
    { path: "/products", priority: 0.9, changefreq: "weekly", lastmod: productsLastmod },
    { path: "/blog", priority: 0.7, changefreq: "weekly", lastmod: blogHubLastmod },
    { path: "/contact", priority: 0.7, changefreq: "monthly", lastmod: contentLastmod("client/pages/Contact.tsx") },
    { path: "/support", priority: 0.6, changefreq: "monthly", lastmod: contentLastmod("client/pages/Support.tsx") },
    { path: "/faq", priority: 0.85, changefreq: "monthly", lastmod: contentLastmod("client/data/faq.ts", "client/pages/Faq.tsx") },
    { path: "/locations", priority: 0.85, changefreq: "monthly", lastmod: locationsLastmod },
    { path: "/locations/all", priority: 0.7, changefreq: "monthly", lastmod: locationsLastmod },
    {
      path: "/guide/starlink-nigeria",
      priority: 0.9,
      changefreq: "monthly",
      lastmod: contentLastmod("client/data/guide.ts", "client/pages/Guide.tsx"),
    },
    { path: "/our-work", priority: 0.8, changefreq: "monthly", lastmod: ourWorkLastmod },
    { path: "/gallery", priority: 0.65, changefreq: "monthly", lastmod: galleryLastmod },
    { path: "/privacy", priority: 0.5, changefreq: "yearly", lastmod: contentLastmod("client/pages/Privacy.tsx") },
    { path: "/terms", priority: 0.5, changefreq: "yearly", lastmod: contentLastmod("client/pages/Terms.tsx") },
  ];

  // Avoid unused-variable noise if a page file is renamed; still prefer specific lastmods above.
  void staticSource;

  const locationRoutes: RouteEntry[] = serviceLocations.map((loc) => ({
    path: `/locations/${loc.slug}`,
    priority: 0.82,
    changefreq: "monthly",
    lastmod: locationsLastmod,
  }));

  const serviceRoutes: RouteEntry[] = services.map((service) => ({
    path: `/services/${service.slug}`,
    priority: 0.85,
    changefreq: "monthly",
    lastmod: servicesLastmod,
  }));

  const productRoutes: RouteEntry[] = products.map((product) => ({
    path: `/products/${product.slug}`,
    priority: 0.85,
    changefreq: "weekly",
    lastmod: productsLastmod,
  }));

  const blogRoutes: RouteEntry[] = blogPosts.map((post) => ({
    path: `/blog/${post.id}`,
    priority: post.featured ? 0.8 : 0.6,
    changefreq: "monthly",
    lastmod: articleLastmod(post.date, (post as { updated?: string }).updated),
  }));

  const seoArticleRoutes: RouteEntry[] = seoArticles2026
    .filter((post) => !post.draft)
    .map((post) => ({
      path: `/blog/${post.slug}`,
      priority: 0.7,
      changefreq: "monthly",
      lastmod: articleLastmod(post.date, post.updated),
    }));

  const industryRoutes: RouteEntry[] = industryLandingPages.map((page) => ({
    path: page.path,
    priority: 0.8,
    changefreq: "monthly",
    lastmod: industryLastmod,
  }));

  const regionalRoutes: RouteEntry[] = regionalLandingPages.map((page) => ({
    path: page.path,
    priority: 0.8,
    changefreq: "monthly",
    lastmod: regionalLastmod,
  }));

  const all = [
    ...staticRoutes,
    ...industryRoutes,
    ...regionalRoutes,
    ...locationRoutes,
    ...serviceRoutes,
    ...productRoutes,
    ...blogRoutes,
    ...seoArticleRoutes,
  ];

  // Deduplicate by path; first occurrence wins (static/industry/regional before blog duplicates).
  const seen = new Set<string>();
  return all.filter((entry) => {
    if (seen.has(entry.path)) return false;
    seen.add(entry.path);
    return true;
  });
}

function toAbsoluteUrl(slug: string) {
  return `${BASE_URL}${normalizePath(slug)}`;
}

function buildXml(entries: RouteEntry[]) {
  const xmlEntries = entries
    .map((entry) => {
      const loc = toAbsoluteUrl(entry.path);
      const changefreq = entry.changefreq ?? "monthly";
      const priority = entry.priority?.toFixed(1) ?? "0.5";
      const lastmod = (entry.lastmod ?? new Date().toISOString()).split("T")[0];

      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        `    <lastmod>${lastmod}</lastmod>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xmlEntries}\n</urlset>\n`;
}

async function generate() {
  const entries = buildUrlEntries();
  const xml = buildXml(entries);

  await fs.writeFile(OUTPUT_PATH, xml, "utf8");
  console.log(`✅ Sitemap generated with ${entries.length} URLs at ${OUTPUT_PATH}`);
}

generate().catch((err) => {
  console.error("Failed to generate sitemap:", err);
  process.exitCode = 1;
});
