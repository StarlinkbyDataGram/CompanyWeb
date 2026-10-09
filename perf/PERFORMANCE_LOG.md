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

## B3 — route split reverted

Loading every route except the homepage on demand made the empty-shell lab worse. The offshore page's performance score fell from 31 to a median of 4 (LCP 6.7 s to 11.4 s) because the page component arrived in a second download after the entry file. That change is reverted. Page components are in the first download again. Article bodies stay separate.

## B3 group result (empty shell, same method as the baseline)

First-load JavaScript: **566 KB gzip → 352 KB gzip** (`index-DFTRBLJQ.js` 298 KB + `vendor-khI0NAQz.js` 54 KB). Document HTML is still the 5.4 KB shell.

Median of 3 mobile Lighthouse runs, except the baseline column which is the single Stage A shell run.

| URL | Perf before → after | LCP | TBT | Transfer |
| --- | --- | --- | --- | --- |
| `/` | 26 → 32 | 8.9 s → 7.2 s | 4.8 s → 6.4 s | 1097 KB → 1488 KB |
| `/starlink-offshore-maritime-installation` | 31 → 35 | 6.7 s → 6.0 s | 3.3 s → 2.2 s | 896 KB → 736 KB |
| `/starlink-installation-lagos` | 32 → 40 | 6.2 s → 5.4 s | 2.2 s → 1.4 s | 961 KB → 811 KB |
| `/blog` | 30 → 31 | 7.9 s → 9.3 s | 2.2 s → 6.4 s | 1097 KB → 938 KB |
| `/blog/how-much-is-starlink-nigeria-price-naira-2026` | 40 → 26 | 5.5 s → 7.9 s | 1.1 s → 1.1 s | 1007 KB → 873 KB |
| `/our-work` | 37 → 43 | 6.1 s → 5.5 s | 1.3 s → 0.8 s | 1034 KB → 875 KB |
| `/products` | 42 → 40 | 4.4 s → 6.3 s | 1.5 s → 1.2 s | 1337 KB → 1178 KB |

Prerendered HTML for a post that uses headings and FAQs (`/blog/starlink-vs-fibre-internet-lagos`) still contains the H1, those headings, the FAQ questions, a canonical link, and JSON-LD. The snapshot waits until `data-article-ready="true"`.

## B4 — self-hosted Inter

Before: `fonts.googleapis.com` was a second render-blocking stylesheet, about **950 ms** on the homepage (940 / 955 / 961 ms across three runs). Poppins was in the stack and was not used by any element.

After: Inter Latin WOFF2 at weights 400, 600, and 700, `font-display: swap`, with only the 24 KB regular file preloaded. The Google stylesheet is gone. The only render-blocking file left is the site CSS. Homepage first paint stayed about 2.9 s, because the empty HTML still waits on JavaScript. Two valid runs: performance 31 and 31, LCP 8.7 s and 9.3 s, total blocking time 3.2 s and 4.5 s, transfer 955 KB and 1,424 KB. A third run did not paint. The three font files together are 73 KB and come from the same origin.

## B4 — reviews, chat, and WhatsApp wait

The Google reviews script loads when that section is near the viewport. The chat and WhatsApp buttons mount after the page has loaded and the browser is idle, or on the first tap or keypress. The reviews block already keeps 280 px of height. The buttons are fixed, so they do not move the page when they appear.

Homepage lab run after this change does not request `elfsight` or `fonts.googleapis.com`. Tailwind’s CSS stayed 19 KB gzip, so the content globs were left as they are.

Median of three empty-shell runs, compared with the B3 group. Homepage uses the two runs that painted. Lagos uses the one run that painted.

| URL | Perf | LCP | TBT | Transfer |
| --- | --- | --- | --- | --- |
| `/` | 32 → 38 | 7.2 s → 6.9 s | 6.4 s → 1.6 s | 1488 KB → 890 KB |
| Offshore | 35 → 31 | 6.0 s → 7.2 s | 2.2 s → 6.0 s | 736 KB → 676 KB |
| Lagos (1 run) | 40 → 45 | 5.4 s → 5.1 s | 1.4 s → 1.1 s | 811 KB → 784 KB |
| `/blog` | 31 → 32 | 9.3 s → 7.4 s | 6.4 s → 6.0 s | 938 KB → 1221 KB |
| Price post | 26 → 37 | 7.9 s → 6.7 s | 1.1 s → 0.5 s | 873 KB → 812 KB |
| `/our-work` | 43 → 62 | 5.5 s → 5.5 s | 0.8 s → 0.2 s | 875 KB → 1032 KB |
| `/products` | 40 → 62 | 6.3 s → 6.0 s | 1.2 s → 0.2 s | 1178 KB → 1201 KB |

Offshore’s median was pulled up by one run with 18.6 s of blocking. The other two offshore runs were 1.8 s and 6.0 s.

## B2 — hero images requested first

The logo preload is gone. The only preload left in the shell is the 24 KB Inter file. The homepage hero, the offshore and Lagos heroes, the our-work hero, the blog post hero, and the first blog card are `loading="eager"` and `fetchpriority="high"`. Later slides and later cards stay lazy. On `/products`, the full-bleed photo is an `<img>` (`/homeImg/seven.avif`) with the same cover crop, instead of a CSS background. Document HTML is still the 5.0 KB shell, so none of these images are in the first HTML.

Empty-shell medians, compared with the B4 medians above. Blog uses the two runs that painted. Lagos in B4 was one run.

| URL | Perf | LCP | TBT | Transfer |
| --- | --- | --- | --- | --- |
| `/` | 41 → 37 | 7.0 s → 6.7 s | 2.2 s → 1.3 s | 890 KB → 890 KB |
| Offshore | 31 → 44 | 7.2 s → 4.6 s | 6.0 s → 1.5 s | 676 KB → 626 KB |
| Lagos | 45 → 50 | 5.1 s → 5.1 s | 1.1 s → 0.8 s | 784 KB → 784 KB |
| `/blog` | 32 → 33 | 7.4 s → 8.6 s | 6.0 s → 9.3 s | 1221 KB → 1171 KB |
| Price post | 37 → 23 | 6.7 s → 8.3 s | 0.5 s → 1.3 s | 812 KB → 762 KB |
| `/our-work` | 62 → 43 | 5.5 s → 5.4 s | 0.2 s → 1.1 s | 1032 KB → 982 KB |
| `/products` | 62 → 42 | 6.0 s → 6.5 s | 0.2 s → 1.2 s | 1201 KB → 1151 KB |

Image bytes fell by 50 KB on every URL, which is one copy of `starlinklogo.png`. The homepage LCP file is still `StandardDish1.jpeg`, now with `fetchpriority="high"`, and its resource load delay is still 15.2 s. The file itself then arrives in 7 ms. Offshore’s delay fell to 9.1 s. `/products` LCP stayed the first product card, not the background photo. The price-post run that scored 15 had a stalled machine (LCP 13.6 s); the other two were 7.5 s and 8.3 s. Layout shift on that post was already 0.22 before this change.

The markup is kept. On the empty shell the browser cannot see the hero until JavaScript runs, so priority cannot remove that wait. It is what the prerendered HTML will need.

## B5 — pages are in the HTML

The build snapshots every public URL in the sitemap (175 routes). `/blog` stays the empty shell, because that index still requests every card image. The Vite shell is kept as `spa.html`. `/` is the homepage snapshot. A URL with no snapshot is served `spa.html`, so it renders the 404 page instead of the homepage.

Snapshots are taken after the page fade reaches full opacity. Chat and WhatsApp are absent from the snapshot and from the first hydrated render, then appear after idle. The reviews script is not in the saved HTML. Styles are not copied into each file.

Empty-shell medians from B2, compared with these snapshots. `/blog` is still the shell.

| URL | Perf | LCP | TBT | Transfer |
| --- | --- | --- | --- | --- |
| `/` | 37 → 35 | 6.7 s → 9.1 s | 1.3 s → 1.6 s | 890 KB → 1406 KB |
| Offshore | 44 → 44 | 4.6 s → 6.4 s | 1.5 s → 0.8 s | 626 KB → 910 KB |
| Lagos | 50 → 50 | 5.1 s → 6.0 s | 0.8 s → 0.5 s | 784 KB → 795 KB |
| `/blog` (still the shell) | 33 → 35 | 8.6 s → 7.6 s | 9.3 s → 2.1 s | 1171 KB → 1171 KB |
| Price post | 23 → 41 | 8.3 s → 8.1 s | 1.3 s → 1.1 s | 762 KB → 775 KB |
| `/our-work` | 43 → 44 | 5.4 s → 6.7 s | 1.1 s → 0.7 s | 982 KB → 1193 KB |
| `/products` | 42 → 35 | 6.5 s → 6.3 s | 1.2 s → 1.9 s | 1151 KB → 1160 KB |

The hero is in the first HTML. Homepage resource load delay fell from 15.2 s to 35 ms. The file then took 4.7 s because it shares the simulated Slow 4G link with the script. One homepage run painted in 2.0 s. Checked pages (`/`, `/products`, the price post, and an unknown URL) logged no hydration mismatch. The unknown URL showed the 404 page.

## B1 — responsive images

Every raster in use now has AVIF and WebP copies at 480, 768, 1280, and 1920 px, without upscaling, plus one recompressed fallback at the original URL. Originals live in `media-originals/` (188 files). The public folder is 1,086 rasters and 36.8 MB, down from 189 files and 54.4 MB, and no public raster is over 250 KB. Pages render `picture` with `srcset` and `sizes`. The lightbox image mounts only when the dialog opens. The header Services and Products previews mount on first hover. `/blog` is prerendered with the other 175 routes (176 of 176).

Compared with the B5 snapshots. `/blog` in B5 was still the empty shell.

| URL | Perf | LCP | TBT | Transfer | Images |
| --- | --- | --- | --- | --- | --- |
| `/` | 35 → 32 | 9.1 s → 7.3 s | 1.6 s → 2.6 s | 1406 KB → 492 KB | 971 KB → 63 KB |
| Offshore | 44 → 48 | 6.4 s → 4.6 s | 0.8 s → 1.1 s | 910 KB → 462 KB | 479 KB → 37 KB |
| Lagos | 50 → 65 | 6.0 s → 4.2 s | 0.5 s → 0.3 s | 795 KB → 509 KB | 366 KB → 87 KB |
| `/blog` | 35 → 34 | 7.6 s → 6.6 s | 2.1 s → 2.7 s | 1171 KB → 618 KB | 751 KB → 179 KB |
| Price post | 41 → 21 | 8.1 s → 10.5 s | 1.1 s → 1.8 s | 775 KB → 477 KB | 319 KB → 27 KB |
| `/our-work` | 44 → 48 | 6.7 s → 3.7 s | 0.7 s → 1.8 s | 1193 KB → 528 KB | 766 KB → 108 KB |
| `/products` | 35 → 50 | 6.3 s → 3.8 s | 1.9 s → 1.3 s | 1160 KB → 559 KB | 733 KB → 138 KB |

The homepage hero is `StandardDish1.w768.avif` (about 11 KB) with `fetchpriority="high"`. It is still queued behind the script on Slow 4G, so the lab LCP stays above 4 s. The price-post lab LCP rose even though that image fell from 171 KB to 19 KB: the AVIF was still in flight with the script, and Lighthouse simulated a 5.7 s download, while the old JPEG had already finished on localhost. That post’s transfer still fell by 298 KB. The first product card is still `loading="lazy"` and is the products LCP; the smaller file brought that LCP down anyway. Layout shift on the price post was 0.17, from the installer aside, the same shift seen before prerender. Titles and canonicals are unchanged. The homepage, products page, and blog index still show the same photographs.

## B7 — cache headers

`vercel.json` now sets `Cache-Control: public, max-age=31536000, immutable` on `/assets/*` and `/fonts/*`. Everything else stays `public, max-age=0, must-revalidate`. The lab harness forces `no-store`, so first-load Lighthouse does not measure this. After the next Vercel deploy, hashed JS/CSS and fonts should stop re-downloading on repeat visits. Confirm with `curl -sI` on a live `/assets/index-*.js` URL.

## B6 — menu interaction and list DOM

The mobile drawer no longer uses framer-motion. It mounts only while open. `/blog` shows 12 Nigeria guides and 9 other posts first, with Load more. `/locations/all` shows 6 cards first. Category and Load more updates use `startTransition`.

Compared with B1 medians for Lighthouse. Interaction before numbers are the Stage A baseline (4× CPU).

| URL | Perf | LCP | TBT | Transfer | DOM |
| --- | --- | --- | --- | --- | --- |
| `/` | 32 → 33 | 7.3 s → 6.6 s | 2.6 s → 2.2 s | 492 KB → 492 KB | 1067 → 1067 |
| Offshore | 48 → 55 | 4.6 s → 4.5 s | 1.1 s → 0.5 s | 462 KB → 462 KB | 694 → 694 |
| Lagos | 65 → 67 | 4.2 s → 3.9 s | 0.3 s → 0.3 s | 509 KB → 509 KB | 522 → 522 |
| `/blog` | 34 → 44 | 6.6 s → 5.1 s | 2.7 s → 1.1 s | 618 KB → 558 KB | 2131 → 573 |
| Price post | 21 → 29 | 10.5 s → 9.3 s | 1.8 s → 1.6 s | 477 KB → 477 KB | 491 → 491 |
| `/our-work` | 48 → 49 | 3.7 s → 4.1 s | 1.8 s → 1.3 s | 528 KB → 651 KB | 663 → 663 |
| `/products` | 50 → 61 | 3.8 s → 3.9 s | 1.3 s → 0.6 s | 559 KB → 559 KB | 547 → 547 |

| Interaction | Before (baseline) | After |
| --- | --- | --- |
| Mobile menu | wall 4410 ms, long tasks 10295 ms, DOM 1063→1167 | wall 216 ms, long tasks 90 ms, DOM 1102→1202 |
| Services dropdown (desktop) | wall 1091 ms, long tasks 699 ms | wall 189 ms, long tasks 0 ms |
| Our-work filter | (timed out in baseline) | wall 111 ms, long tasks 0 ms |
| Project lightbox | — | wall 164 ms, long tasks 66 ms |
| Blog scroll | — | wall 145 ms, long tasks 0 ms, DOM 609 |

Prerendered `/blog` HTML fell from about 392 KB to 97 KB because fewer cards are in the snapshot. Titles and canonicals are unchanged.

## B8 — layout stability

The price-post CLS came from the installer aside. The article body loads in a second chunk, so on first paint the aside sat under the hero and then jumped down when the body arrived. Prerender now writes the article JSON into `#prerender-article-data`, and the post page reads that (or the in-memory cache) for the first paint. The aside mounts only with the body. Client navigations without a cached body keep a tall placeholder and hide the aside on small screens. Elfsight’s reserved box is 360 px tall.

Compared with B6. Price-post CLS before this group was intermittently 0.17–0.22 across earlier labels.

| URL | Perf | LCP | TBT | CLS |
| --- | --- | --- | --- | --- |
| `/` | 33 → 35 | 6.6 s → 6.1 s | 2.2 s → 1.6 s | 0.000 → 0.000 |
| Offshore | 55 → 50 | 4.5 s → 4.4 s | 0.5 s → 0.8 s | 0.000 → 0.000 |
| Lagos | 67 → 58 | 3.9 s → 4.2 s | 0.3 s → 0.4 s | 0.000 → 0.000 |
| `/blog` | 44 → 41 | 5.1 s → 5.4 s | 1.1 s → 1.4 s | 0.000 → 0.000 |
| Price post | 29 → 34 | 9.3 s → 9.2 s | 1.6 s → 1.0 s | 0.217 → **0.000** (all three runs) |
| `/our-work` | 49 → 60 | 4.1 s → 4.3 s | 1.3 s → 0.5 s | 0.000 → 0.000 |
| `/products` | 61 → 59 | 3.9 s → 4.0 s | 0.6 s → 0.6 s | 0.000 → 0.000 |

Titles and canonicals are unchanged. The installer card still appears in the same place once the article is ready.
