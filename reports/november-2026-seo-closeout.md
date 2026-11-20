# DataGram November 2026 SEO close-out

Site: https://www.datagram.ng  
Repository: `CompanyWeb`  
Date: 20 November 2026  
Scope: Phase 3 (new articles and release checks), with Phase 1 recorded from `planning/skylink/datagram-seo-phase1-nov2026.md`.

No Search Console export was in the repository. This report does not include impressions, clicks, or rankings.

---

## 1. Competitor-informed improvements completed

Completed in Phase 1 on 19 November 2026. No new articles were created in that pass. Detail is in `planning/skylink/datagram-seo-phase1-nov2026.md`.

| Finding | URL | Change |
| --- | --- | --- |
| Equipment, install, activation, and VAT were being read as one price | `/blog/how-much-is-starlink-nigeria-price-naira-2026` | Section that splits those costs. `updated: 2026-11-19`. |
| Quotes need the factors that change the number | `/blog/how-much-does-starlink-installation-cost-nigeria-2026` | Structured blocks, indicative ranges kept, quotation checklist. |
| Offline and cable faults needed a repair path | `/blog/troubleshooting-starlink-offline-searching-nigeria`, `/blog/fix-starlink-cable-disconnected-error-v3-v4`, `/starlink-repair-relocation-nigeria` | Links and CTAs into repair, support, and contact. |
| Service pages overlapped | `/services/sales-installation`, `whole-premises`, `long-range`, `backup-power`, `enterprise-plans` | Distinct intros and related links. |
| Proof of work was thin on commercial pages | Price, install, location, and service pages | Contextual `/our-work` links only. No invented testimonials. |

Phase 1 did not change product prices or published naira ranges.

Pages already carrying a 20 November 2026 update when this phase started, and left in place except for the links in section 4:

- `/blog/starlink-roaming-global-priority-activation-nigeria`
- `/blog/starlink-ocean-mode-50gb-priority-limit-explained`
- `/blog/vsat-vs-starlink-roi-nigerian-offshore-operations-2026`
- `/blog/starlink-residential-sold-out-lagos-abuja-2026-options`
- `/blog/troubleshooting-starlink-offline-searching-nigeria`

---

## 2. Existing article URLs updated

These URLs were not replaced. Each gained a contextual link to a new article, and `updated` is `2026-11-20` where that field was set in this pass.

| URL | Link added |
| --- | --- |
| `/blog/starlink-ocean-mode-50gb-priority-limit-explained` | Coastal plan guide |
| `/blog/starlink-roaming-global-priority-activation-nigeria` | Coastal plan guide |
| `/blog/starlink-maritime-ships-boats-nigeria-setup` | Commissioning checklist, coastal plan guide, ship data guide |
| `/blog/configure-vlan-starlink-crew-wifi-bridge-operations` | Ship data guide |
| `/blog/starlink-data-usage-data-cap-nigeria` | Ship data guide |
| `/blog/how-to-activate-starlink-nigeria` | Address checklist |
| `/blog/cant-activate-starlink-nigeria-enterprise-maritime-solution` | Address checklist |
| `/blog/starlink-residential-sold-out-lagos-abuja-2026-options` | Address checklist |
| `/blog/transfer-starlink-ownership-nigerian-account` | Address checklist |
| `/blog/troubleshooting-starlink-offline-searching-nigeria` | Address checklist, for kits that never activated |

The 50GB / Ocean Mode article was not rewritten into the coastal plan article. The VLAN article was not rewritten into the data-planning article. The how-to-activate article was not rewritten into the address checklist.

---

## 3. New articles published

All four passed `scripts/readability-gate.ts` on 20 November 2026. None is a draft. Publication date is `2026-11-20`. Each has one self-canonical URL.

| URL | Reader question | Intended queries |
| --- | --- | --- |
| https://www.datagram.ng/blog/starlink-nigerian-coastal-vessels-plan-territorial-international-waters | Which plan fits a Nigerian vessel that works near shore and also leaves the coast? | starlink plan nigerian coastal vessel; starlink territorial waters nigeria; starlink international waters vessel; starlink ocean mode or global priority |
| https://www.datagram.ng/blog/maritime-starlink-handover-commissioning-checklist-osv | What has to be checked and handed over before an offshore support vessel sails? | starlink commissioning checklist vessel; starlink handover offshore support vessel; starlink osv installation checklist nigeria |
| https://www.datagram.ng/blog/planning-starlink-data-ship-operations-crew-wifi | How should a ship split Starlink data between operations and crew Wi-Fi? | starlink data plan ship crew wifi; starlink crew data allowance vessel; starlink operations vs crew wifi |
| https://www.datagram.ng/blog/why-starlink-will-not-activate-nigerian-address | Why will Starlink not activate at this Nigerian address, and what should be checked first? | starlink will not activate nigeria; starlink activation failed nigerian address; starlink service address unavailable nigeria; starlink kit will not transfer nigeria |

### Duplication decisions

| Proposed page | Existing page | Decision |
| --- | --- | --- |
| Coastal plan choice | `/blog/starlink-ocean-mode-50gb-priority-limit-explained` | Publish. The existing page answers “is Ocean Mode the 50GB block?”. The new page answers “which plan matches this route, and how does Nigeria’s 12-mile territorial sea differ from Starlink’s coastal line?”. |
| OSV commissioning | `/blog/starlink-maritime-ships-boats-nigeria-setup` | Publish. The existing page is the setup overview. The new page is the handover list. It does not claim a class, SOLAS, or NIMASA certificate. |
| Ship data planning | `/blog/configure-vlan-starlink-crew-wifi-bridge-operations` | Publish. The existing page is how to split the networks. The new page is how to allocate data, and it labels Starlink plan limits separately from router rules. |
| Address checklist | `/blog/how-to-activate-starlink-nigeria` and `/blog/cant-activate-starlink-nigeria-enterprise-maritime-solution` | Publish. The first is the happy path. The second is the enterprise and maritime sales path. The new page is the diagnostic list, and it tells the reader not to use a false address, a VPN, or a location trick. |

### Facts held back on purpose

- No naira or dollar Ocean Mode rate. Starlink’s Ocean Mode help page did not return body text to a plain fetch on 20 November 2026.
- Starlink’s public Roam page says Roam covers coastal and inland waters, and that international waters need Ocean Mode. A 6 October 2026 trade note of the help page treats that line as about 12 nautical miles. The article tells the reader to read the distance in the account.
- Nigeria’s territorial sea is twelve nautical miles under the Territorial Waters Act as amended in 1998 (UN DOALOS text and the FAOLEX copy). The EEZ runs out to 200 nautical miles under the 1978 decree, subject to neighbouring borders. Those legal lines are not described as Starlink’s product rule.
- The “about 3 GB an hour” HD figure is labelled a planning guess, not a Starlink meter.
- Transfer waiting periods are left on Starlink’s own transfer article. The checklist does not invent a bypass.

---

## 4. Internal linking improvements

New articles link out to the Ocean Mode guide, roaming activation guide, boat installation, offshore installation, VLAN guide, fleet management, marine networking, how-to-activate, sold-out note, transfer guide, offline guide, suspended-account guide, and the unauthorised-country risk note.

Related reading on each new article is rendered on the page from the article `related` field.

Service and landing links added:

| Page | New link |
| --- | --- |
| `/starlink-offshore-maritime-installation` | Coastal plan guide; OSV checklist |
| `/starlink-boat-installation` | Coastal plan guide; OSV checklist |
| `/starlink-marine-sdwan-integration` | Ship data guide |
| `/starlink-fleet-management-nigeria` | Ship data guide |
| `/starlink-roaming-global-priority-nigeria` | Coastal plan guide |
| `/services/global-roaming` | Coastal plan guide; boat installation |

Registry `relatedSlugs` updated for the Ocean Mode, Global Priority, and crew Wi-Fi topics, and entries 101–104 added in `content-plan/content-registry.json`.

The `/blog` card list still shows 12 guides in registry order, then “load more”. The four new posts sit after that first screen. They are in `blog-index.json`, in search, in the Maritime or Setup category, and on their own URLs. They are also linked from the older URLs above, so they are not only reachable from the first screen of `/blog`.

---

## 5. Technical SEO changes

- Blog module `november-2026` registered in `articles-2026.ts`, `load-article.ts`, and `scripts/generate-blog-index.ts`.
- Blog index regenerated: **120** posts (was 116).
- Sitemap regenerated: **180** URLs (was 176). New `lastmod` values are `2026-11-20`.
- Each new article: one canonical, `index, follow`, `datePublished` `2026-11-20`, Article + BreadcrumbList + FAQPage JSON-LD.
- No `noindex` on the new articles. `public/404.html` remains `noindex` and is copied into the production output.
- No new redirects. No URL was removed. City installation landings and `/locations/*` pairs were not consolidated.

---

## 6. Canonical and redirect decisions

| Pair or overlap | Decision |
| --- | --- |
| New article vs its closest existing article | Separate URL. See section 3. No redirect. |
| `/locations/*` and matching installation landings | Unchanged. Phase 1 found both sides self-canonical. No Search Console evidence to merge them. |
| Ocean Mode dollar rate and 50GB product note | Stay on `/blog/starlink-ocean-mode-50gb-priority-limit-explained`. Not copied into a second price URL. |

---

## 7. Validation and build results

| Check | Result |
| --- | --- |
| Readability gate, four new slugs | Pass. Grades 4.3, 3.8, 3.6, 4.8. Longest sentence 27 words. No undefined technical terms. No filler hits. |
| Internal links in the new articles and the edited link blocks | Present in the 180-URL sitemap |
| `pnpm build` | Pass. Image budget ok. JS budget ok. Client and server build ok. |
| Prerender | **180 of 180** routes. `check-prerender.mjs` ok on the 7 lab routes. |
| Prerendered article HTML | Each new URL has the H2 body text, one canonical, `index, follow`, Article and FAQPage schema, related reading, and `#prerender-article-data`. |
| `pnpm test` | 2 files, 8 tests, passed. |
| 404 | `dist/spa/404.html` exists and is `noindex`. `vercel.json` sends missing static files to that page with status 404. Other unknown paths fall through to `spa.html`, where the app route renders the in-app not-found page. Unknown URLs are not given a sitemap entry. |

---

## 8. Unresolved items

| Item | Why it is open |
| --- | --- |
| Google Search Console baseline | No export, property dump, or impression table was available in this workspace. Do not treat this report as a ranking result. |
| Ocean Mode help-page body | `https://starlink.com/support/article/9e60a46f-7585-c747-3019-03af317d39c8` did not return article text to a plain fetch on 20 November 2026. The 12-mile product line is not stated as confirmed Nigeria account text. |
| Per-GB Ocean Mode price | Not published. A secondary write-up is not a Nigeria tariff. |
| Roam day limits in coastal water | Mentioned only as unconfirmed write-ups. The account counter is the instruction. |
| Blog first screen | New posts are past the first 12 registry-order cards. Search, category, load more, sitemap, and inbound links still expose them. |
| City-pair canonical merge | Still waiting on Search Console evidence. Not done. |

---

## 9. Google Search Console baseline

Not available.

No impression, click, or average-position figures are reported. Phase 1 also noted that a baseline for the four city pairs and the two pricing URLs had not been captured. That is still true on 20 November 2026.
