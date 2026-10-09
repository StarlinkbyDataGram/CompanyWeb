# DataGram performance proof pack (Stage C)

Generated 2026-10-09 from `npm run perf -- final` (label `final`) compared with Stage A `baseline`.

Lab: Lighthouse 13 mobile, simulated Slow 4G, 4× CPU, median of 3 runs. Harness serves `dist/spa` with `Cache-Control: no-store`.

---

## 1. Baseline → final (per URL)

Percent change is `(final − baseline) / |baseline|`. Negative is an improvement for time and byte metrics.

| URL | Perf | LCP | FCP | TBT | CLS | Transfer | JS | Images | DOM |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `/` | 28→32 (+14%) | 14.8s→7.1s (−52%) | 3.7s→3.3s (−11%) | 10.4s→4.4s (−58%) | 0→0 | 2157→492 KB (−77%) | 914→286 KB (−69%) | 1033→63 KB (−94%) | 1777→1067 |
| Offshore | 32→39 (+22%) | 6.1s→5.1s (−16%) | 3.7s→3.6s (−2%) | 2.5s→1.6s (−38%) | 0→0 | 897→462 KB (−48%) | 440→286 KB (−35%) | 258→37 KB (−86%) | 674→694 |
| Lagos | 30→44 (+47%) | 6.7s→4.6s (−32%) | 4.1s→3.0s (−26%) | 2.5s→1.1s (−57%) | 0→0 | 972→510 KB (−48%) | 440→286 KB (−35%) | 416→87 KB (−79%) | 505→522 |
| `/blog` | 29→38 (+31%) | 8.9s→6.1s (−32%) | 3.7s→2.6s (−30%) | 3.5s→2.2s (−36%) | 0→0 | 1442→559 KB (−61%) | 440→286 KB (−35%) | 801→135 KB (−83%) | 1775→573 |
| Price post | 35→42 (+20%) | 7.4s→9.1s (+24%) | 4.2s→6.1s (+44%) | 2.4s→0.6s (−77%) | 0→0 | 1008→478 KB (−53%) | 440→312 KB (−29%) | 369→27 KB (−93%) | 480→492 |
| `/our-work` | 34→61 (+79%) | 6.5s→4.5s (−31%) | 3.8s→2.5s (−33%) | 2.7s→0.4s (−85%) | 0→0 | 1036→807 KB (−22%) | 442→286 KB (−35%) | 479→386 KB (−19%) | 619→663 |
| `/products` | 36→69 (+92%) | 5.9s→3.8s (−35%) | 3.7s→3.0s (−20%) | 1.4s→0.3s (−77%) | 0→0 | 1340→559 KB (−58%) | 442→286 KB (−35%) | 783→138 KB (−82%) | 512→547 |

Full metric dump: `npm run perf:compare -- baseline final` (also saved under `perf/results/final/compare-baseline.md` when regenerated).

### Homepage bytes saved (category)

| Category | Baseline | Final | Saved |
| --- | ---: | ---: | ---: |
| Transfer | 2157 KB | 492 KB | **1665 KB** |
| Images | 1033 KB | 63 KB | **969 KB** |
| JS | 914 KB | 286 KB | **627 KB** |
| CSS | 16 KB | 15 KB | ~1 KB |
| Fonts | 47 KB | 71 KB | −24 KB (self-hosted Inter; was Google CSS + subsets) |

On-disk first-load JS (gzip of `index` + `vendor` modulepreload): **353.6 KB**.

---

## 2. Fixes and commits

| Group | What | Commit(s) | Lab effect (high level) |
| --- | --- | --- | --- |
| B3 | Blog bodies as async chunks; React vendor chunk; route-level lazy reverted | `1d519a9`, `0893b65`, `537f185` (reverted), `54df180` | First-load JS 566→~352 KB gzip; page components stay in entry |
| B4 | Self-hosted Inter; defer Elfsight / chat / WhatsApp | `b8f5688`, `45b6c05`, `8b30a57` | No Google Fonts CSS; widgets off critical path |
| B2 | Hero `fetchpriority`; drop logo preload; products CSS bg → `<img>` | `e73a98e`, `7bf5f5b` | LCP discoverable once HTML exists |
| B5 | Prerender all sitemap URLs; `spa.html` 404 fallback | `62fa4a7` | Resource load delay ~15s→~35ms; HTML complete |
| B1 | AVIF/WebP srcset; originals in `media-originals/`; `/blog` prerendered | `2f49afa`, `f7b78b0` | Home transfer 1406→492 KB; images 971→63 KB |
| B7 | `Cache-Control: immutable` for `/assets/*` and `/fonts/*` | `fc5efdd` | Lab unchanged (`no-store` harness); repeat visits after deploy |
| B6 | Menu without framer-motion; Load more on `/blog` and `/locations/all` | `605e873`, `319b4ab` | Menu long tasks ~10s→~0–90ms; blog DOM 2131→573 |
| B8 | Hydrate posts from `#prerender-article-data`; aside with body | `b1b070f` / `ee5b233`, `cae5db4` | Price-post CLS ~0.22→0.000 |

Detailed before/after tables: `perf/PERFORMANCE_LOG.md`.

---

## 3. Pass / fail vs Section 0 targets

| Target | Result | Notes |
| --- | --- | --- |
| LCP ≤ 2.5 s (field later) | **FAIL** | Best lab LCP ~3.8 s (`/products`); home 7.1 s. Hard floor &lt;4 s met on products/our-work only |
| TBT ≤ 200 ms | **FAIL** | Best ~317 ms (`/products`); home still ~4.4 s |
| CLS ≤ 0.1 | **PASS** | 0.000 on all 7 URLs × 3 runs |
| Home transfer ≤ 1.0 MB | **PASS** | 492 KB |
| Other pages ≤ 1.5 MB | **PASS** | Max 807 KB (`/our-work`) |
| Blog posts ≤ 0.8 MB | **PASS** | 478 KB |
| First-load JS ≤ 200 KB gzip | **FAIL** | 353.6 KB gzip (`index` 300.8 + `vendor` 52.8) |
| Mobile hero ≤ 150 KB (B1 budget tighter) | **PASS** | Home LCP `StandardDish1.w768.avif` ~11 KB |
| Lighthouse 90+ home / 80+ others | **FAIL** | Home 32; best other 69 (`/products`) |
| Image files in `public/` ≤ 250 KB | **PASS** | `scripts/check-image-budget.mjs` in `prebuild` |
| First-load JS ≤ 250 KB gzip (regression guard) | **FAIL (guard active)** | `scripts/check-js-budget.mjs` after `vite build`. Use `SKIP_JS_BUDGET=1` only until under budget |

---

## 4. Screenshots

Before (Stage A empty-shell era) and after (final prerendered) at 390px and 1440px:

| URL | Final 390 | Final 1440 |
| --- | --- | --- |
| `/` | `perf/screenshots/final/home-390.png` | `perf/screenshots/final/home-1440.png` |
| Offshore | `perf/screenshots/final/starlink-offshore-maritime-installation-390.png` | `…-1440.png` |
| Lagos | `perf/screenshots/final/starlink-installation-lagos-390.png` | `…-1440.png` |
| `/blog` | `perf/screenshots/final/blog-390.png` | `…-1440.png` |
| Price post | `perf/screenshots/final/blog_how-much-is-starlink-nigeria-price-naira-2026-390.png` | `…-1440.png` |
| `/our-work` | `perf/screenshots/final/our-work-390.png` | `…-1440.png` |
| `/products` | `perf/screenshots/final/products-390.png` | `…-1440.png` |

Baseline-era captures (where retained): `perf/screenshots/` from earlier labels. Live production as of this report still serves the ~5 KB shell (`perf/seo-baseline.json`).

---

## 5. SEO integrity

**Live (before deploy):** every test URL returned the same 5037-byte shell title (`Starlink by DataGram: Professional Starlink Installation…`) with no per-page canonical/H1 in HTML — documented in `perf/seo-baseline.json`.

**Final build (after):** `node perf/seo-check.mjs` → `perf/seo-final.json`.

| URL | Title (final) | Canonical | H1 in `#root` |
| --- | --- | --- | --- |
| `/` | Starlink by DataGram: Professional Starlink Installation Across Lagos… | `https://www.datagram.ng/` | Professional Starlink installation across Nigeria |
| Offshore | Starlink Offshore Installation Nigeria \| At Sea \| DataGram | `…/starlink-offshore-maritime-installation` | Starlink Offshore & Maritime Installation Nigeria |
| Lagos | Starlink Installation Lagos \| Island, Mainland & Suburbs \| DataGram | `…/starlink-installation-lagos` | Starlink Installation Lagos |
| `/blog` | Starlink Nigeria Guides & Tips \| DataGram Blog | `…/blog` | Insights & Resources |
| Price post | Starlink Price in Nigeria (2026) \| DataGram | `…/blog/how-much-is-starlink-nigeria-price-naira-2026` | How Much is Starlink in Nigeria Today?… |
| `/our-work` | Our Work — Real Starlink Installations Across Nigeria \| DataGram | `…/our-work` | Our Work |
| `/products` | Starlink Devices & Accessories in Nigeria \| Starlink Products | `…/products` | Products |

Each page has JSON-LD (LocalBusiness / WebSite / page schema). Copy, prices, and routes were not rewritten for performance. Titles/descriptions match the existing `<Seo>` props in the page components. Main content and H1 are present in prerendered HTML (176/176 sitemap routes).

---

## 6. Interactions (final, 4× CPU)

| Interaction | Wall | Long tasks | DOM |
| --- | ---: | ---: | ---: |
| Services dropdown (desktop) | 197 ms | 150 ms | 1103→1103 |
| Mobile menu | 87 ms | 0 ms | 1103→1203 |
| Our-work filter | 114 ms | 58 ms | 699→526 |
| Project lightbox | 336 ms | 133 ms | 526→558 |
| Blog scroll | 444 ms | 403 ms | 609→609 |

Baseline mobile menu was wall 4410 ms / long tasks 10295 ms.

---

## 7. Remaining issues

1. **First-load JS ~354 KB gzip** (target 200 KB, guard 250 KB). Further cuts need route-level or above-fold splitting without repeating the B3 LCP regression, or thinner page modules in the entry file. Builds fail the new JS budget unless `SKIP_JS_BUDGET=1`.
2. **Lab LCP still 3.8–9.1 s** on Slow 4G because the hero shares the pipe with ~350 KB of JS even when discoverable. Field LCP after deploy should improve from HTML-in-document + small AVIF; lab floor &lt;2.5 s needs a leaner critical path.
3. **Price-post lab LCP** can look worse than the empty-shell baseline while transfer and images improve — Lighthouse queues the small AVIF behind the script.
4. **TBT / INP lab** still high on content-heavy pages; menu is fixed, but main-thread JS remains large.
5. **Cache headers** apply only after Vercel picks up `vercel.json` — confirm with `curl -sI` on a hashed asset.
6. **Naira ₦** is outside the Inter Latin subset (pre-existing).

---

## 8. Regression guards

| Check | Hook | Limit |
| --- | --- | --- |
| Images in `public/` | `prebuild` → `scripts/check-image-budget.mjs` | 250 KB / file |
| First-load JS | `build:client` → `scripts/check-js-budget.mjs` | 250 KB gzip (`index` + `modulepreload` scripts) |
| Manual | `npm run check:budgets` | both |

---

## 9. Proposed real-user monitoring (do not install yet)

Minimal `web-vitals` attribution (~1–2 KB gzip if tree-shaken) reporting LCP, INP, and CLS to the existing analytics endpoint (GA4 if `VITE_GA_MEASUREMENT_ID` is set, or a tiny first-party `/api/vitals` beacon).

```ts
// sketch only — not in the bundle
import { onLCP, onINP, onCLS } from "web-vitals/attribution";
function send(metric) {
  navigator.sendBeacon?.("/api/vitals", JSON.stringify({
    name: metric.name,
    value: metric.value,
    id: metric.id,
    nav: performance.getEntriesByType("navigation")[0]?.type,
  }));
}
onLCP(send); onINP(send); onCLS(send);
```

Cost: ~1–2 KB JS + one beacon per metric. Useful before Search Console p75 moves (~28 days after Validate Fix).

---

## 10. Owner deployment checklist

1. Deploy this branch to Vercel. Confirm the build log shows `Prerendered 176 of 176` (not a prerender skip). If the JS budget check blocks the build, set `SKIP_JS_BUDGET=1` temporarily and plan a follow-up to get under 250 KB gzip.
2. Purge any CDN cache if one sits in front of Vercel.
3. Verify headers: `curl -sI https://www.datagram.ng/assets/index-*.js` → `cache-control: public, max-age=31536000, immutable`.
4. Verify HTML is prerendered: View Source on `/` and `/products` should show the H1 inside `#root`, not an empty root.
5. Run PageSpeed Insights (mobile) on the 7 URLs; compare with this report’s final column.
6. In Search Console, open LCP and INP issues and click **Validate Fix** only after lab looks healthy on the live URLs. Validation takes ~28 days.
7. Expect CrUX charts to move slowly; low-traffic URLs may show “no data”. Check weekly.

---

## 11. How to reproduce

```bash
SKIP_JS_BUDGET=1 PERF_REQUIRE_PRERENDER=1 PERF_RUNS=3 npm run perf -- final
npm run perf:compare -- baseline final
node perf/seo-check.mjs
node scripts/check-js-budget.mjs   # currently exits 1 at ~354 KB
```
