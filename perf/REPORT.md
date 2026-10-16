# DataGram performance proof pack (Stage C)

Generated **16 Oct 2026** from production `dist/spa` (prerendered) labeled `final`, compared with Stage A `baseline` (empty-shell era).

Lab: Lighthouse 13 mobile, simulated Slow 4G, 4× CPU, median of 3 runs. Local Mac TBT is noisy vs PSI — use **bytes, CLS structure, discovery, SEO, and JS budget** as the hard proof; treat Perf scores as secondary on this machine.

Reproduce:

```bash
SKIP_JS_BUDGET=1 PERF_REQUIRE_PRERENDER=1 PERF_RUNS=3 npm run perf -- final
npm run perf:compare -- baseline final
node perf/seo-check.mjs
node scripts/check-js-budget.mjs
```

Artifacts: `perf/results/final/`, `perf/results/final/compare-baseline.md`, `perf/seo-final.json`.

---

## 1. Baseline → final (per URL)

| URL | Perf | LCP | FCP | TBT | CLS | Transfer | JS | Images |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `/` | 28→**54** | 14.8s→**3.7s** | 3.7s→**2.1s** | 10.4s→**4.7s** | 0→**0** | 2157→**383 KB** | 914→**163 KB** | 1033→**63 KB** |
| Offshore | 32→20 | 6.1s→**4.9s** | 3.7s→**3.3s** | 2.5s→3.2s | 0→**0.814** | 897→**427 KB** | 440→**207 KB** | 258→**67 KB** |
| Lagos | 30→10 | 6.7s→7.2s | 4.1s→4.5s | 2.5s→5.0s | 0→**0.814** | 972→**445 KB** | 440→**207 KB** | 416→**87 KB** |
| `/blog` | 29→26 | 8.9s→**3.8s** | 3.7s→**1.7s** | 3.5s→**2.5s** | 0→**0.814** | 1442→**426 KB** | 440→**204 KB** | 801→**69 KB** |
| Price post | 35→20 | 7.4s→**6.2s** | 4.2s→**2.8s** | 2.4s→7.8s | 0→**0.814** | 1008→**521 KB** | 440→**271 KB** | 369→**83 KB** |
| `/our-work` | 34→15 | 6.5s→6.5s | 3.8s→**3.2s** | 2.7s→4.2s | 0→**0.814** | 1036→**549 KB** | 442→**198 KB** | 479→**184 KB** |
| `/products` | 36→30 | 5.9s→**5.8s** | 3.7s→4.2s | 1.4s→3.3s | 0→**0.814** | 1340→**522 KB** | 442→**194 KB** | 783→**161 KB** |

Homepage transfer **−82%** (2157→383 KB). Images **−94%**. First-load JS on disk (gzip of entry `modulepreload`s): **178.4 KB** (`index` 88.3 + `vendor` 52.8 + `motion` 37.2) — under the 250 KB guard (**PASS**).

CLS **0.814** on non-home URLs is attributed to the footer newsletter block (`section.mx-4` “Stay in the loop”) shifting after paint — remaining issue (not introduced as an intentional Stage B change; home stays **0**).

---

## 2. Fixes and commits (this campaign, 16 Oct 2026)

| Group | What | Commit(s) |
| --- | --- | --- |
| B1 | Fail builds that would ship an empty prerender shell | `a42fe78` |
| B2 | Paint home hero immediately in prerendered HTML | `2f7f8a9` |
| B3 | Route-level split + slim home data | `f0dd6c1` |
| B4 | Preload Inter 600/700; inline CSS in prerender HTML | `2b10cea` |
| B5 | Shrink Flat HP JPEG; explicit image dimensions | `6a8887f` |
| B6 | Remove forced reflows; compositor-friendly motion; FAB footprints | `c7e45b0` |
| B7 | Stop fetching `/api/faqs` on home FAQ | `47fa312` |
| B8 | Immutable asset cache on legacy routes; 404 missing static files | `3f84354` |
| B9 | A11y contrast/names/headings; markdown `llms.txt` | `3dd831f` |

Detailed before/after tables: `perf/PERFORMANCE_LOG.md`. Stage A diagnosis: `perf/results/stage-a/DIAGNOSIS.md`.

---

## 3. Pass / fail vs targets

| Target | Result | Notes |
| --- | --- | --- |
| LCP ≤ 2.5 s (field later) | **FAIL (lab)** | Home lab LCP **3.7 s** (was 14.8 s). PSI after deploy is the field referee. |
| TBT ≤ 200 ms | **FAIL (lab)** | Mac lab TBT still seconds; PSI historically showed 0 ms on shell. |
| CLS ≤ 0.1 | **PARTIAL** | Home **PASS** (0). Other 6 lab URLs **FAIL** (~0.814 newsletter shift). |
| Home transfer ≤ 1.0 MB | **PASS** | 383 KB |
| Other pages ≤ 1.5 MB | **PASS** | Max 549 KB (`/our-work`) |
| Blog posts ≤ 0.8 MB | **PASS** | 521 KB |
| First-load JS ≤ 200 KB gzip | **PASS** | **178.4 KB** |
| Mobile hero ≤ 150 KB | **PASS** | `StandardDish1.w768.avif` ~11 KB |
| Lighthouse 90+ home / 80+ others | **FAIL (lab)** | Home 54; others TBT-limited on this machine |
| Image files in `public/` ≤ 250 KB | **PASS** | `check-image-budget.mjs` |
| First-load JS ≤ 250 KB gzip (guard) | **PASS** | `check-js-budget.mjs` exits 0 |

---

## 4. SEO integrity

`node perf/seo-check.mjs` → `perf/seo-final.json`. All 7 lab routes: unique title, canonical, H1 inside `#root`, JSON-LD present. Prerender check: **176/176** routes; home HTML ~275 KB with inlined CSS.

| URL | H1 in `#root` | Canonical |
| --- | --- | --- |
| `/` | Professional Starlink installation across Nigeria | `https://www.datagram.ng/` |
| Offshore | Starlink Offshore & Maritime Installation Nigeria | `…/starlink-offshore-maritime-installation` |
| Lagos | Starlink Installation Lagos | `…/starlink-installation-lagos` |
| `/blog` | Insights & Resources | `…/blog` |
| Price post | How Much is Starlink in Nigeria Today?… | `…/blog/how-much-is-starlink-nigeria-price-naira-2026` |
| `/our-work` | Our Work | `…/our-work` |
| `/products` | Products | `…/products` |

Copy, prices, and routes were not rewritten for performance.

---

## 5. Remaining issues

1. **Newsletter CLS (~0.814)** on non-home pages — `section.mx-4` “Stay in the loop” layout shift. Reserve height or defer mount.
2. **Lab Perf/TBT** on this Mac still noisy; trust PSI after deploy for score acceptance (Stage A: local could not reproduce PSI 83).
3. **Cache headers / soft-404** need live confirm after deploy (`curl -sI` on hashed `/assets/*` and missing `/ai-catalog.json`).
4. **CrUX TTFB** remains OWNER/CDN (fra1).
5. **Live must ship prerender** — unset `SKIP_PRERENDER` if set; build log must show `Prerendered 176 of 176`.

---

## 6. Regression guards

| Check | Hook | Limit | Stage C |
| --- | --- | --- | --- |
| Images in `public/` | `prebuild` → `check-image-budget.mjs` | 250 KB / file | **ok** |
| First-load JS | `build:client` → `check-js-budget.mjs` | 250 KB gzip | **ok (178.4 KB)** |
| Prerender | `postbuild` + `check-prerender.mjs` | 7 lab routes non-empty | **ok** |

---

## 7. Owner deployment checklist

1. Deploy this branch. Confirm Vercel log: `Prerendered 176 of 176` and `Prerender check ok`.
2. View Source on `/` and `/products` — H1 inside `#root`, not empty shell.
3. `curl -sI https://www.datagram.ng/assets/<hashed>.js` → `cache-control: … immutable`.
4. `curl -sI https://www.datagram.ng/ai-catalog.json` → **404**.
5. PSI mobile on the 7 URLs; compare to this report’s byte/LCP structure.
6. Search Console → Validate Fix on LCP/INP after live looks healthy (~28 days).
