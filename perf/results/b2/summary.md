# Lighthouse b2

Generated 2026-10-09T13:16:22.719Z

- Build: `ANALYZE=1 npm run build`
- Form factor: mobile, simulated throttling (Lighthouse default Slow 4G, 4x CPU)
- Runs per URL: 3
- Numeric values are the median of the runs. The LCP element is taken from the run whose performance score is the median.

| URL | Perf | LCP | FCP | TBT | CLS | SI | TTFB | Transfer | JS | CSS | Images | Fonts | Req | DOM |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `/` | 37 | 6705 ms | 3101 ms | 1284 ms | 0.000 | 14459 ms | 28 ms | 890 KB | 280 KB | 15 KB | 471 KB | 71 KB | 15 | 1022 |
| `/starlink-offshore-maritime-installation` | 44 | 4588 ms | 2947 ms | 1488 ms | 0.000 | 14669 ms | 22 ms | 626 KB | 280 KB | 15 KB | 208 KB | 71 KB | 12 | 676 |
| `/starlink-installation-lagos` | 50 | 5115 ms | 2627 ms | 750 ms | 0.000 | 10156 ms | 27 ms | 784 KB | 280 KB | 15 KB | 366 KB | 71 KB | 14 | 507 |
| `/blog` | 33 | 8578 ms | 2536 ms | 9344 ms | 0.000 | 29698 ms | 31 ms | 1171 KB | 280 KB | 15 KB | 751 KB | 71 KB | 18 | 1777 |
| `/blog/how-much-is-starlink-nigeria-price-naira-2026` | 23 | 8259 ms | 3737 ms | 1300 ms | 0.223 | 22270 ms | 39 ms | 762 KB | 305 KB | 15 KB | 319 KB | 71 KB | 14 | 482 |
| `/our-work` | 43 | 5381 ms | 2553 ms | 1135 ms | 0.000 | 16764 ms | 31 ms | 982 KB | 280 KB | 15 KB | 564 KB | 71 KB | 16 | 621 |
| `/products` | 42 | 6532 ms | 2461 ms | 1177 ms | 0.000 | 13678 ms | 31 ms | 1151 KB | 280 KB | 15 KB | 733 KB | 71 KB | 19 | 514 |

## LCP elements

- `/`: `div.relative > div.relative > div.relative > img.absolute` <img src="/images/products/starlink-gen3v4/StandardDish1.jpeg" alt="Professional installation — DataGram Starlink installation Nigeria" class="absolute inset-0 h-full w-full object-cover transition-opacity duration-70…" loading="eager" fetchpriority="high" width="1200" height="800" style="object-position: center top;">
- `/starlink-offshore-maritime-installation`: `section.relative > div.absolute > div.aspect-[16/9] > img` <img src="/images/maritime2.jpeg" alt="Starlink dish installed on tanker deck in the open ocean, Nigeria offshore" fetchpriority="high" loading="eager" data-dg-image="maritime2.jpeg" data-dg-placement="wide cinematic shot of tanker deck with Starlink dish, open ocean horizon …" style="width: 100%; height: 100%; object-fit: cover;">
- `/starlink-installation-lagos`: `section.relative > div.absolute > div.aspect-[16/9] > img` <img src="/images/starlinkSetup.jpeg" alt="Starlink dish on commercial building in Lagos, DataGram installation" width="1920" height="1080" fetchpriority="high" loading="eager" data-dg-image="starlinkSetup.jpeg" data-dg-placement="commercial building with active construction in background reads as Lagos …" style="width: 100%; height: 100%; object-fit: cover; object-position: center top;">
- `/blog`: `div.grid > div.rounded-lg > div.aspect-[16/9] > img.h-full` <img src="/images/starlinkInstallation.jpeg" alt="Starlink dish installation in Nigeria — DataGram" loading="eager" fetchpriority="high" data-dg-image="starlinkInstallation.jpeg" class="h-full w-full transition-transform duration-300 group-hover:scale-105" style="object-fit: cover; object-position: center top; width: 100%; height: 100%;">
- `/blog/how-much-is-starlink-nigeria-price-naira-2026`: `div.grid > article.min-w-0 > div.mt-8 > img` <img src="/images/datagram-starlink-unboxing-kit-contents.jpg" alt="Starlink kit contents unboxed, including the dish cable and router, for th…" fetchpriority="high" loading="eager" data-dg-image="datagram-starlink-unboxing-kit-contents.jpg" data-dg-placement="IMAGE: datagram-starlink-unboxing-kit-contents.jpg — DataGram photo of an …" style="width: 100%; height: 100%; object-fit: cover; object-position: center top;">
- `/our-work`: `div.bg-white > section.relative > div.absolute > img.h-full` <img src="/images/installations/hp-kit--naval-vessel--sagbama/photo-1.jpeg" alt="DataGram Starlink installations across Nigeria" class="h-full w-full object-cover opacity-30" fetchpriority="high" loading="eager">
- `/products`: `div > article.group > div.overflow-hidden > img.h-48` <img src="/images/products/starlink-gen3v4/StandardDish1.jpeg" alt="Starlink Gen3 v4 Standard Dish" class="h-48 w-full object-cover transition-transform duration-500 group-hover:sca…" style="object-position: center center;">

## On-disk JS and CSS

- `assets/index-CvWFvkcH.js` raw 1037 KB, gzip 291 KB, brotli 233 KB
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
