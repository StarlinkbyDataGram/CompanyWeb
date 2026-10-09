# Lighthouse b5

Generated 2026-10-09T14:04:10.266Z

- Build: `ANALYZE=1 npm run build`
- Form factor: mobile, simulated throttling (Lighthouse default Slow 4G, 4x CPU)
- Runs per URL: 3
- Numeric values are the median of the runs. The LCP element is taken from the run whose performance score is the median.

| URL | Perf | LCP | FCP | TBT | CLS | SI | TTFB | Transfer | JS | CSS | Images | Fonts | Req | DOM |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `/` | 35 | 9090 ms | 2823 ms | 1560 ms | 0.000 | 13142 ms | 298 ms | 1406 KB | 280 KB | 15 KB | 971 KB | 71 KB | 22 | 1022 |
| `/starlink-offshore-maritime-installation` | 44 | 6400 ms | 3241 ms | 794 ms | 0.000 | 16814 ms | 268 ms | 910 KB | 280 KB | 15 KB | 479 KB | 71 KB | 15 | 676 |
| `/starlink-installation-lagos` | 50 | 6045 ms | 2803 ms | 533 ms | 0.000 | 11323 ms | 207 ms | 795 KB | 280 KB | 15 KB | 366 KB | 71 KB | 14 | 507 |
| `/blog` | 35 | 7616 ms | 2448 ms | 2110 ms | 0.000 | 13471 ms | 23 ms | 1171 KB | 280 KB | 15 KB | 751 KB | 71 KB | 18 | 1777 |
| `/blog/how-much-is-starlink-nigeria-price-naira-2026` | 41 | 8074 ms | 5033 ms | 1077 ms | 0.000 | 11236 ms | 296 ms | 775 KB | 305 KB | 15 KB | 319 KB | 71 KB | 14 | 482 |
| `/our-work` | 44 | 6676 ms | 2962 ms | 747 ms | 0.000 | 10967 ms | 304 ms | 1193 KB | 280 KB | 15 KB | 766 KB | 71 KB | 18 | 644 |
| `/products` | 35 | 6287 ms | 2779 ms | 1918 ms | 0.000 | 15645 ms | 753 ms | 1160 KB | 280 KB | 15 KB | 733 KB | 71 KB | 19 | 514 |

## LCP elements

- `/`: `div.relative > div.relative > div.relative > img.absolute` <img src="/images/products/starlink-gen3v4/StandardDish1.jpeg" alt="Professional installation — DataGram Starlink installation Nigeria" class="absolute inset-0 h-full w-full object-cover transition-opacity duration-70…" loading="eager" fetchpriority="high" width="1200" height="800" style="object-position: center top;">
- `/starlink-offshore-maritime-installation`: `section.relative > div.absolute > div.aspect-[16/9] > img` <img src="/images/maritime2.jpeg" alt="Starlink dish installed on tanker deck in the open ocean, Nigeria offshore" fetchpriority="high" loading="eager" data-dg-image="maritime2.jpeg" data-dg-placement="wide cinematic shot of tanker deck with Starlink dish, open ocean horizon …" style="width: 100%; height: 100%; object-fit: cover;">
- `/starlink-installation-lagos`: `section.relative > div.absolute > div.aspect-[16/9] > img` <img src="/images/starlinkSetup.jpeg" alt="Starlink dish on commercial building in Lagos, DataGram installation" width="1920" height="1080" fetchpriority="high" loading="eager" data-dg-image="starlinkSetup.jpeg" data-dg-placement="commercial building with active construction in background reads as Lagos …" style="width: 100%; height: 100%; object-fit: cover; object-position: center top;">
- `/blog`: `div.grid > div.rounded-lg > div.aspect-[16/9] > img.h-full` <img src="/images/starlinkInstallation.jpeg" alt="Starlink dish installation in Nigeria — DataGram" loading="eager" fetchpriority="high" data-dg-image="starlinkInstallation.jpeg" class="h-full w-full transition-transform duration-300 group-hover:scale-105" style="object-fit: cover; object-position: center top; width: 100%; height: 100%;">
- `/blog/how-much-is-starlink-nigeria-price-naira-2026`: `div.grid > article.min-w-0 > div.mt-8 > img` <img src="/images/datagram-starlink-unboxing-kit-contents.jpg" alt="Starlink kit contents unboxed, including the dish cable and router, for th…" fetchpriority="high" loading="eager" data-dg-image="datagram-starlink-unboxing-kit-contents.jpg" data-dg-placement="IMAGE: datagram-starlink-unboxing-kit-contents.jpg — DataGram photo of an …" style="width: 100%; height: 100%; object-fit: cover; object-position: center top;">
- `/our-work`: `div.bg-white > section.relative > div.absolute > img.h-full` <img src="/images/installations/hp-kit--naval-vessel--sagbama/photo-1.jpeg" alt="DataGram Starlink installations across Nigeria" class="h-full w-full object-cover opacity-30" fetchpriority="high" loading="eager">
- `/products`: `div > article.group > div.overflow-hidden > img.h-48` <img src="/images/products/starlink-gen3v4/StandardDish1.jpeg" alt="Starlink Gen3 v4 Standard Dish" class="h-48 w-full object-cover transition-transform duration-500 group-hover:sca…" style="object-position: center center;">

## On-disk JS and CSS

- `assets/index-D0VJrJNW.js` raw 1037 KB, gzip 291 KB, brotli 233 KB
- `assets/vendor-khI0NAQz.js` raw 162 KB, gzip 53 KB, brotli 46 KB
- `assets/trending-b-C76QOUrA.js` raw 102 KB, gzip 36 KB, brotli 31 KB
- `assets/evergreen-b-BLktXqct.js` raw 84 KB, gzip 30 KB, brotli 25 KB
- `assets/evergreen-a-BqgL0zx-.js` raw 84 KB, gzip 30 KB, brotli 26 KB
- `assets/trending-a-CosGodXR.js` raw 89 KB, gzip 29 KB, brotli 25 KB
- `assets/august-2026-sprint-CNtyyzdU.js` raw 61 KB, gzip 19 KB, brotli 16 KB
- `assets/index-Dmu4sGeU.css` raw 111 KB, gzip 19 KB, brotli 15 KB
- `assets/geo-a-BjvTIBpo.js` raw 57 KB, gzip 18 KB, brotli 16 KB
- `assets/geo-b-U_by-rrl.js` raw 58 KB, gzip 18 KB, brotli 15 KB
- `assets/future-a-DFP7vGfc.js` raw 49 KB, gzip 17 KB, brotli 14 KB
- `assets/future-b-BuRh59o4.js` raw 43 KB, gzip 16 KB, brotli 13 KB
- `assets/enterprise-maritime-b2b-final-CUbeNSyz.js` raw 35 KB, gzip 13 KB, brotli 11 KB
- `assets/phase1-rOF-DRhh.js` raw 27 KB, gzip 10 KB, brotli 9 KB
- `assets/enterprise-maritime-b2b-Ct9kzsJz.js` raw 26 KB, gzip 10 KB, brotli 8 KB
- `assets/legacy-B23IWtJn.js` raw 26 KB, gzip 10 KB, brotli 8 KB
- `assets/enterprise-maritime-b2b-more-DmvE2uT9.js` raw 18 KB, gzip 7 KB, brotli 6 KB
- `assets/stage3-batch1-CtXrlAmh.js` raw 16 KB, gzip 6 KB, brotli 5 KB
- `assets/roaming-priority-H_zoXsNw.js` raw 15 KB, gzip 5 KB, brotli 4 KB
- `assets/september-2026-sprint-VxmiiXF4.js` raw 11 KB, gzip 4 KB, brotli 3 KB
- `assets/article-types-BsyN4mYn.js` raw 0 KB, gzip 0 KB, brotli 0 KB
