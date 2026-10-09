# Performance log

Lab method: production `vite build` output served locally with Brotli for text. Lighthouse 13 mobile defaults (simulated Slow 4G, 4x CPU). No visual or content changes in this stage.

## Baseline — deployed shell (what Vercel serves today)

`perf/results/shell`. One run per URL. The live site returns the same 5.3 KB HTML shell for every route (`<div id="root"></div>` empty). Local document transfer was 1.6 KB Brotli.

| URL | Perf | LCP | FCP | TBT | CLS | Transfer | JS | Images |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `/` | 26 | 8.9 s | 5.2 s | 4.8 s | 0.000 | 1097 KB | 454 KB | 521 KB |
| `/starlink-offshore-maritime-installation` | 31 | 6.7 s | 3.7 s | 3.3 s | 0.000 | 896 KB | 439 KB | 258 KB |
| `/starlink-installation-lagos` | 32 | 6.2 s | 3.9 s | 2.2 s | 0.000 | 961 KB | 439 KB | 416 KB |
| `/blog` | 30 | 7.9 s | 3.7 s | 2.2 s | 0.000 | 1097 KB | 439 KB | 458 KB |
| `/blog/how-much-is-starlink-nigeria-price-naira-2026` | 40 | 5.5 s | 3.7 s | 1.1 s | 0.000 | 1007 KB | 439 KB | 369 KB |
| `/our-work` | 37 | 6.1 s | 3.6 s | 1.3 s | 0.000 | 1034 KB | 439 KB | 479 KB |
| `/products` | 42 | 4.4 s | 3.7 s | 1.5 s | 0.000 | 1337 KB | 439 KB | 783 KB |

On-disk entry chunk from that build: `assets/index-DGml0GbA.js` 1,863 KB raw, **566 KB gzip**, 439 KB Brotli. CSS 114 KB raw, 19 KB gzip. One JavaScript chunk. No dynamic imports.

LCP on every URL was an image (or, on `/products`, a CSS `background-image`) that was **not in the initial HTML**. Resource load delay was 7.4–15.5 s. The image file itself then downloaded in 4–137 ms.

## Prerendered HTML (local only — not what Vercel deploys)

`scripts/prerender-spa.mjs` skips itself when `VERCEL=1`. Locally it writes 33 routes. It does **not** include `/products` or `/blog/how-much-is-starlink-nigeria-price-naira-2026`. Those URLs fall through to `index.html`. After prerender, `index.html` is the homepage, so those URLs are served the homepage document.

Where prerender was real (document size confirmed):

| URL | Runs | Perf | LCP | TBT | Transfer | What changed vs shell |
| --- | ---: | ---: | ---: | ---: | ---: | --- |
| `/` | 3 | 28 | 14.8 s | 10.4 s | 2157 KB | Image is in the HTML, but queued behind the 460 KB Elfsight widget and other images. LCP got worse. |
| `/starlink-offshore-maritime-installation` | 3 | 28 | 8.5 s | 2.5 s | 1149 KB | Discoverable, no `fetchpriority`. Load duration 11–22 s. LCP worse than the shell. |
| `/starlink-installation-lagos` | 3 | 34 | 8.2 s | 1.0 s | 950 KB | Same pattern. One run spiked to 20 s. |
| `/blog` | 1, then Chrome crashed | 29 | 6.7 s | 28.2 s | **37 MB** | 111 images, 36.9 MB. LCP image is `loading="lazy"`, so discovery delay stayed 14.5 s. |

Home LCP subparts (representative prerendered run): time to first byte ~0.5 s, resource load delay ~0.05 s, resource load duration 11–25 s, element render delay ~2.4 s. The hero file is 45 KB (`StandardDish1.jpeg`). It is not slow to transfer once it has the network. It does not have `fetchpriority="high"`. The preloaded image is `/starlinklogo.png` (50 KB), which is not the LCP element.

## Not a fix

No application code was changed to improve these numbers. Prerender was only run locally for measurement.

## B3 — blog bodies leave the first load

Before: one entry chunk, 1,863 KB raw, **566 KB gzip**.

After: entry `assets/index-6O3kh_Cw.js`, 1,231 KB raw, **354 KB gzip** (286 KB Brotli). Article bodies are 18 extra chunks (4–37 KB gzip each) and load only when that post is opened. The blog index in the entry is 168 KB raw / 45 KB gzip (116 posts: title, excerpt, image, first-block search text). Homepage and `/blog` no longer download post bodies.

Lighthouse for this step is recorded at the end of the B3 group, against the empty-shell baseline.

## B3 — routes other than the homepage load on demand

Before this step the entry was **354 KB gzip**.

After: entry `assets/index-CkYKogpm.js`, 762 KB raw, **228 KB gzip** (193 KB Brotli). Landing page copy is `LandingRoutePages-D-QhllxV.js`, 53 KB gzip, and is not in the homepage chunk. The prerender browser identifies itself as `ReactSnap` and waits for the current route's chunk (and the article body on `/blog/:slug`) before it snapshots.

## B3 — React and the router in their own file

Before: one entry chunk, **228 KB gzip**.

After: `assets/index-DMJzXxm1.js` 174 KB gzip plus `assets/vendor-Dtv7QYqu.js` 54 KB gzip. First load is **228 KB gzip** combined (194 KB Brotli). The build target is ES2020. Splitting React out did not shrink the first download; it lets the React file stay cached when page code changes. Icons were already imported one component at a time. `ogl`, `recharts`, and `pdfkit` are not in the client bundle (`ogl` and `recharts` are only imported by files nothing else loads; `pdfkit` is a script), so removing those packages would not change this number.
