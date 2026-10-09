# Lighthouse b3

Generated 2026-10-09T10:30:48.383Z

- Build: `ANALYZE=1 npm run build`
- Form factor: mobile, simulated throttling (Lighthouse default Slow 4G, 4x CPU)
- Runs per URL: 3
- Numeric values are the median of the runs. The LCP element is taken from the run whose performance score is the median.

| URL | Perf | LCP | FCP | TBT | CLS | SI | TTFB | Transfer | JS | CSS | Images | Fonts | Req | DOM |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `/` | 32 | 7289 ms | 3132 ms | 22053 ms | 0.000 | 25503 ms | 27 ms | 1398 KB | 663 KB | 16 KB | 582 KB | 47 KB | 28 | 1775 |
| `/starlink-offshore-maritime-installation` | 4 | 11434 ms | 8368 ms | 1886 ms | 0.814 | 12324 ms | 25 ms | 690 KB | 233 KB | 16 KB | 258 KB | 131 KB | 16 | 674 |
| `/starlink-installation-lagos` | 15 | 9089 ms | 4675 ms | 842 ms | 0.814 | 10037 ms | 28 ms | 765 KB | 233 KB | 16 KB | 416 KB | 47 KB | 17 | 505 |
| `/blog` | 6 | 7997 ms | 3204 ms | 3868 ms | 0.814 | 14383 ms | 23 ms | 1971 KB | 194 KB | 16 KB | 1576 KB | 131 KB | 26 | 1775 |
| `/blog/how-much-is-starlink-nigeria-price-naira-2026` | 18 | 5139 ms | 3028 ms | 1345 ms | 1.030 | 9029 ms | 29 ms | 785 KB | 217 KB | 16 KB | 369 KB | 131 KB | 17 | 480 |
| `/our-work` | 12 | 6091 ms | 3140 ms | 1959 ms | 0.814 | 9299 ms | 29 ms | 789 KB | 194 KB | 16 KB | 479 KB | 47 KB | 16 | 619 |
| `/products` | 14 | 5968 ms | 2904 ms | 1717 ms | 0.814 | 9787 ms | 23 ms | 1090 KB | 191 KB | 16 KB | 783 KB | 47 KB | 22 | 512 |

## LCP elements

- `/`: `div.relative > div.relative > div.relative > img.absolute` <img src="/images/products/starlink-gen3v4/StandardDish1.jpeg" alt="Professional installation — DataGram Starlink installation Nigeria" class="absolute inset-0 h-full w-full object-cover transition-opacity duration-70…" loading="eager" width="1200" height="800" style="object-position: center top;">
- `/starlink-offshore-maritime-installation`: `section.relative > div.absolute > div.aspect-[16/9] > img` <img src="/images/maritime2.jpeg" alt="Starlink dish installed on tanker deck in the open ocean, Nigeria offshore" data-dg-image="maritime2.jpeg" data-dg-placement="wide cinematic shot of tanker deck with Starlink dish, open ocean horizon …" style="width: 100%; height: 100%; object-fit: cover;">
- `/starlink-installation-lagos`: `section.relative > div.absolute > div.aspect-[16/9] > img` <img src="/images/starlinkSetup.jpeg" alt="Starlink dish on commercial building in Lagos, DataGram installation" width="1920" height="1080" data-dg-image="starlinkSetup.jpeg" data-dg-placement="commercial building with active construction in background reads as Lagos …" style="width: 100%; height: 100%; object-fit: cover; object-position: center top;">
- `/blog`: `div.grid > div.rounded-lg > div.aspect-[16/9] > img.h-full` <img src="/images/starlinkInstallation.jpeg" alt="Starlink dish installation in Nigeria — DataGram" loading="lazy" data-dg-image="starlinkInstallation.jpeg" class="h-full w-full transition-transform duration-300 group-hover:scale-105" style="object-fit: cover; object-position: center top; width: 100%; height: 100%;">
- `/blog/how-much-is-starlink-nigeria-price-naira-2026`: `div.grid > article.min-w-0 > div.mt-8 > img` <img src="/images/datagram-starlink-unboxing-kit-contents.jpg" alt="Starlink kit contents unboxed, including the dish cable and router, for th…" data-dg-image="datagram-starlink-unboxing-kit-contents.jpg" data-dg-placement="IMAGE: datagram-starlink-unboxing-kit-contents.jpg — DataGram photo of an …" style="width: 100%; height: 100%; object-fit: cover; object-position: center top;">
- `/our-work`: `div.bg-white > section.relative > div.absolute > img.h-full` <img src="/images/installations/hp-kit--naval-vessel--sagbama/photo-1.jpeg" alt="DataGram Starlink installations across Nigeria" class="h-full w-full object-cover opacity-30">
- `/products`: `div > article.group > div.overflow-hidden > img.h-48` <img src="/images/products/starlink-gen3v4/StandardDish1.jpeg" alt="Starlink Gen3 v4 Standard Dish" class="h-48 w-full object-cover transition-transform duration-500 group-hover:sca…" style="object-position: center center;">

## On-disk JS and CSS

- `assets/index-Di8oWpoY.js` raw 582 KB, gzip 169 KB, brotli 142 KB
- `assets/vendor-Dtv7QYqu.js` raw 162 KB, gzip 53 KB, brotli 46 KB
- `assets/LandingRoutePages-Dmdoovmr.js` raw 197 KB, gzip 52 KB, brotli 43 KB
- `assets/trending-b-C76QOUrA.js` raw 102 KB, gzip 36 KB, brotli 31 KB
- `assets/evergreen-b-BLktXqct.js` raw 84 KB, gzip 30 KB, brotli 25 KB
- `assets/evergreen-a-BqgL0zx-.js` raw 84 KB, gzip 30 KB, brotli 26 KB
- `assets/trending-a-CosGodXR.js` raw 89 KB, gzip 29 KB, brotli 25 KB
- `assets/august-2026-sprint-CNtyyzdU.js` raw 61 KB, gzip 19 KB, brotli 16 KB
- `assets/index-C2d43Jiy.css` raw 110 KB, gzip 19 KB, brotli 15 KB
- `assets/geo-a-BjvTIBpo.js` raw 57 KB, gzip 18 KB, brotli 16 KB
- `assets/geo-b-U_by-rrl.js` raw 58 KB, gzip 18 KB, brotli 15 KB
- `assets/future-a-DFP7vGfc.js` raw 49 KB, gzip 17 KB, brotli 14 KB
- `assets/future-b-BuRh59o4.js` raw 43 KB, gzip 16 KB, brotli 13 KB
- `assets/enterprise-maritime-b2b-final-CUbeNSyz.js` raw 35 KB, gzip 13 KB, brotli 11 KB
- `assets/phase1-rOF-DRhh.js` raw 27 KB, gzip 10 KB, brotli 9 KB
- `assets/enterprise-maritime-b2b-Ct9kzsJz.js` raw 26 KB, gzip 10 KB, brotli 8 KB
- `assets/legacy-B23IWtJn.js` raw 26 KB, gzip 10 KB, brotli 8 KB
- `assets/Terms-Dw87qV8q.js` raw 27 KB, gzip 8 KB, brotli 7 KB
- `assets/ServiceDetail-nP5QQlMd.js` raw 19 KB, gzip 8 KB, brotli 6 KB
- `assets/enterprise-maritime-b2b-more-DmvE2uT9.js` raw 18 KB, gzip 7 KB, brotli 6 KB
- `assets/select-BJI3eNbU.js` raw 21 KB, gzip 7 KB, brotli 7 KB
- `assets/Combination-CypamtaS.js` raw 17 KB, gzip 6 KB, brotli 6 KB
- `assets/stage3-batch1-CtXrlAmh.js` raw 16 KB, gzip 6 KB, brotli 5 KB
- `assets/StarlinkGuideNigeria-DnPngnZo.js` raw 13 KB, gzip 6 KB, brotli 4 KB
- `assets/OurWork-In4-PStX.js` raw 20 KB, gzip 5 KB, brotli 5 KB
- `assets/roaming-priority-H_zoXsNw.js` raw 15 KB, gzip 5 KB, brotli 4 KB
- `assets/FaqPage-BRKwDzVe.js` raw 11 KB, gzip 5 KB, brotli 4 KB
- `assets/About-BYF-ENfx.js` raw 18 KB, gzip 4 KB, brotli 4 KB
- `assets/Contact-DKrQoazW.js` raw 13 KB, gzip 4 KB, brotli 4 KB
- `assets/september-2026-sprint-VxmiiXF4.js` raw 11 KB, gzip 4 KB, brotli 3 KB
- `assets/Blog-BIPJkO2c.js` raw 13 KB, gzip 4 KB, brotli 3 KB
- `assets/Services-nkFdJsXT.js` raw 10 KB, gzip 4 KB, brotli 3 KB
- `assets/dialog-C-e0Y-El.js` raw 8 KB, gzip 3 KB, brotli 3 KB
- `assets/Privacy-DuIBexHk.js` raw 7 KB, gzip 3 KB, brotli 2 KB
- `assets/locations-B5jYdaWN.js` raw 6 KB, gzip 3 KB, brotli 2 KB
- `assets/AdminTestimonials-BxiMa-0Y.js` raw 7 KB, gzip 3 KB, brotli 2 KB
- `assets/AdminProducts-BB8oISgb.js` raw 8 KB, gzip 3 KB, brotli 2 KB
- `assets/BlogPost-B0U28Ue5.js` raw 6 KB, gzip 2 KB, brotli 2 KB
- `assets/AdminBlog-Drt81flh.js` raw 7 KB, gzip 2 KB, brotli 2 KB
- `assets/LocationDetail-BEB2diki.js` raw 5 KB, gzip 2 KB, brotli 2 KB
- `assets/ProductDetail-UkqHpZ6u.js` raw 5 KB, gzip 2 KB, brotli 1 KB
- `assets/AdminFAQ-Dt40Aasj.js` raw 4 KB, gzip 2 KB, brotli 1 KB
- `assets/AdminDashboard-B2HYbqQx.js` raw 5 KB, gzip 2 KB, brotli 1 KB
- `assets/locations-all-BXQgY9Zq.js` raw 4 KB, gzip 2 KB, brotli 1 KB
- `assets/Gallery-Cm1SCWZx.js` raw 3 KB, gzip 2 KB, brotli 1 KB
- `assets/Products-vIc85-xz.js` raw 3 KB, gzip 1 KB, brotli 1 KB
- `assets/LocationsIndex-DHpnEAJj.js` raw 3 KB, gzip 1 KB, brotli 1 KB
- `assets/AdminLogin-DTc7c5UP.js` raw 2 KB, gzip 1 KB, brotli 1 KB
- `assets/LocationsAll-OsVpBwsG.js` raw 2 KB, gzip 1 KB, brotli 1 KB
- `assets/ScrollReveal-vKOxFsME.js` raw 1 KB, gzip 1 KB, brotli 1 KB
- `assets/landing-classes-CE4W1zSC.js` raw 1 KB, gzip 0 KB, brotli 0 KB
- `assets/Support-3jvyYgTL.js` raw 1 KB, gzip 0 KB, brotli 0 KB
- `assets/zap-UI2cPwML.js` raw 1 KB, gzip 0 KB, brotli 0 KB
- `assets/NotFound-Cm0xy26k.js` raw 1 KB, gzip 0 KB, brotli 0 KB
- `assets/label-CEN8qWgg.js` raw 1 KB, gzip 0 KB, brotli 0 KB
- `assets/arrow-up-BfYRwHRA.js` raw 1 KB, gzip 0 KB, brotli 0 KB
- `assets/arrow-left-CImpzOCE.js` raw 0 KB, gzip 0 KB, brotli 0 KB
- `assets/article-types-BsyN4mYn.js` raw 0 KB, gzip 0 KB, brotli 0 KB
- `assets/storage-sHHite1Y.js` raw 0 KB, gzip 0 KB, brotli 0 KB
- `assets/blog-DEAez-X0.js` raw 0 KB, gzip 0 KB, brotli 0 KB
