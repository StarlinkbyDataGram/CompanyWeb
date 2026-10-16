# Stage A — DIAGNOSIS REPORT (16 Oct 2026)

No application fixes in this stage. STOP after this report.

## Baseline table

### A. Authoritative field evidence (PageSpeed Insights, 13 Oct 2026) — label reference `psi-live`

| Metric | Value |
| --- | ---: |
| Performance | 83 |
| FCP | 3.2 s |
| LCP | 3.4 s |
| Speed Index | 5.0 s |
| TBT | 0 ms |
| CLS | 0 |
| First-load JS (entry) | 294.77 KiB (`index-CvWFvkcH.js`) |
| Initial HTML transferred | 2.24 KiB |
| LCP resource load delay | 770 ms |
| LCP element render delay | 2,050 ms |
| Render-blocking saving | ~600 ms (CSS) |
| Console errors | `/api/faqs` 500 |

### B. Local Lighthouse on live origin (3 runs, median) — this machine

| Metric | Median |
| --- | ---: |
| Performance | 33 |
| FCP | 3.0 s |
| LCP | 7.1 s |
| Speed Index | 8.7 s |
| TBT | 7.9 s |
| CLS | 0 |

**Cannot reproduce PSI Perf 83 / LCP 3.4 s within ~10%.** Same asset hashes and empty shell confirmed. Divergence attributed to lab environment (MacBook Air CPU + Puppeteer Chrome 148 vs PSI HeadlessChromium 153). Section 1 remains the score baseline for acceptance; local runs confirm structure.

### C. Local production shell (empty `#root`, same architecture as live)

Valid runs: Perf 31–33, FCP ~3.0 s, LCP 6.5–7.9 s, TBT 2.7–5.0 s, JS transfer ~286 KiB (local `index-DUJNEo5d.js` + vendor; index hash differs from live because local tree drifted).

### D. Local prerendered `/` (one run)

Perf 33, LCP 6.4 s, TBT 2.6 s. LCP discovery **all pass** (including discoverable in initial document). Resource load delay **29 ms** (vs 770 ms+ on shell). Element render delay still **2.8 s** (page fade / main thread).

## RC verdicts

| RC | Verdict | Evidence |
| --- | --- | --- |
| RC1 Hero starts hidden / late paint | **CONFIRMED (refined)** | Slider first slide uses `opacity-100` when `idx===0` (`Index.tsx` Hero). Not a slider fade-from-zero on first slide. Blank filmstrip is empty shell (RC2). After JS: `motion.div initial={{opacity:0}}` + `.page-animate` (opacity 0→1, 300–420 ms) wrap all routes — delays LCP paint. PSI: element render delay 2,050 ms; local prerender still 2,781 ms render delay. |
| RC2 Home not prerendered on live | **CONFIRMED** | Live HTML 5,047 B / 1.8 KiB br, empty `#root`. Local prerender writes 158 KB with hero img + H1. `reactSnap.source` is `dist/spa` (correct). Real prerender is `scripts/prerender-spa.mjs` (react-snap Puppeteer too old). Live does not ship snapshots — likely `SKIP_PRERENDER` on Vercel and/or build artifact only has shell. `vercel.json` falls unknown URLs to `/spa.html`. |
| RC3 Large unused JS | **CONFIRMED** | Live entry 294.77 KiB br. Local first-load gzip 353.6 KB (`index`+`vendor`). Top entry modules: `blog-index.json` 43.4 KB gzip, `industry-pages.ts` 34.6 KB gzip, framer-motion projection ~13.6 KB. Blog **bodies** already dynamic chunks (17). Routes still statically imported in `App.tsx`. |
| RC4 CSS→font chain | **CONFIRMED** | Render-blocking `index-*.css` ~19 KiB. Network tree: HTML→CSS→Inter 600/700 WOFF2 (longest path). Only Inter **400** is preloaded in `index.html`; above-fold uses `font-extrabold`/`font-semibold` (700/600). `font-display: swap` set. |
| RC5 Real-user TTFB | **CONFIRMED (hosting)** | CrUX TTFB 1.6 s p75. Lab TTFB low. Host **Vercel fra1**. Live `Cache-Control: public, max-age=0, must-revalidate` even on `/assets/*` and `/fonts/*` despite `vercel.json` immutable rules — headers not taking effect under current `builds`/`routes` setup. |
| RC6 `/api/faqs` 500 | **CONFIRMED** | Live `HTTP/2 500` + `FUNCTION_INVOCATION_FAILED`. Handler: `server/routes/faqs.ts` reads `server/data/faqs.json` via Express on `api/serverless.ts`. Home FAQ already seeds from `@/data/faq` and falls back on failure — call not needed for first paint; causes console error. |
| RC7 Reflow / animations / unsized images | **PARTIALLY CONFIRMED** | Forced reflow: live/local top frame `vendor-khI0NAQz.js:25:1909` (React); sources in entry chunk (layout reads: `LogoLoop` getBoundingClientRect, `ProductsTeaser`/`BlogTeaser` offsetWidth). Non-composited: PSI found 2; local run items empty — likely `transition-all` on hero panel width (`panelExpanded`) and/or reveal/scale. Unsized images: local audit clean; prior B5 work present. Image delivery: local AVIF pass; PSI 156 KiB saving still on live session. No source maps in dist (cannot map exact bytecode column). |
| RC8 a11y / SEO / agent | **CONFIRMED** | Header `role="navigation"` on `<header>` (`Header.tsx:188`). Footer FB/IG icon links lack `aria-label`. Section pills `bg-primary/10`; carousel Next `bg-green-500` (`HowToGetDevice`/`Contact`); designer link `hover:text-foreground/70`. BlogTeaser "Read More" without sr-only title. `llms.txt` 200 text but INI-style, no markdown links. `ai-catalog.json` and unknown `*.txt` return **200 HTML shell** (soft-404). |

## Proposed fix order (unchanged, with notes)

1. **B1** Ship prerender to Vercel (critical path). Ensure `index.html` snapshots deploy; keep `spa.html` for unknown routes; return real 404 for missing static files.
2. **B2** Remove first-paint opacity gate (`page-animate` / framer initial opacity on first load); keep slider crossfade for later slides; preload hero image in home head.
3. **B3** Cut entry further (lazy non-home routes with ReactSnap UA; trim `industry-pages` / blog-index from first paint).
4. **B4** Preload Inter 600/700 (or only weights used ATF); reduce render-blocking CSS.
5. **B5** Confirm live serves AVIF/srcset; finish remaining image audit savings.
6. **B6** Batch/remove layout thrash; transform/opacity-only animations; widgets already deferred — verify.
7. **B7** Fix or remove `/api/faqs` runtime call; keep FAQPage JSON-LD synced.
8. **B8** Make asset cache headers apply; soft-404 → 404; OWNER CDN/TTFB.
9. **B9** Contrast, names, heading order, llms.txt links, no fake ai-catalog.

## OWNER ACTIONS

- Confirm Vercel project: region, whether `SKIP_PRERENDER=1` (or equivalent) is set, and whether the build log shows `prerender-spa` succeeding.
- Confirm why `vercel.json` `Cache-Control` immutable rules for `/assets` and `/fonts` are not visible on live responses (`max-age=0` observed).
- Check Vercel function logs for `/api/faqs` `FUNCTION_INVOCATION_FAILED` (cold start / missing files / OOM).
- CrUX TTFB 1.6 s: consider Cloudflare (or Vercel’s CDN already — verify edge POP for NG users) and HTML caching strategy after prerender ships.
- Hosting identified from headers: **Vercel** (not cPanel). CDN: Vercel edge (`x-vercel-cache: HIT`, `fra1`).

## Next step

Await **continue** to begin **B1** (prerender actually deployed / working on production artifact).
