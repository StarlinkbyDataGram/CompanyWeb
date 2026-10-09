# Lighthouse b4

Generated 2026-10-09T12:42:13.815Z

- Build: `PERF_SKIP_BUILD=1 (existing dist/spa)`
- Form factor: mobile, simulated throttling (Lighthouse default Slow 4G, 4x CPU)
- Runs per URL: 3
- Numeric values are the median of the runs. The LCP element is taken from the run whose performance score is the median.

| URL | Perf | LCP | FCP | TBT | CLS | SI | TTFB | Transfer | JS | CSS | Images | Fonts | Req | DOM |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `/` | 41 | 7036 ms | 2946 ms | 2150 ms | 0.000 | 25572 ms | 53 ms | 890 KB | 280 KB | 15 KB | 521 KB | 71 KB | 15 | 1020 |
| `/starlink-offshore-maritime-installation` | 31 | 7152 ms | 3068 ms | 6028 ms | 0.000 | 27723 ms | 50 ms | 676 KB | 280 KB | 15 KB | 258 KB | 71 KB | 13 | 674 |
| `/starlink-installation-lagos` | 45 | 5085 ms | 2935 ms | 1086 ms | 0.000 | 10047 ms | 54 ms | 784 KB | 280 KB | 15 KB | 416 KB | 71 KB | 14 | 505 |
| `/blog` | 32 | 7427 ms | 2660 ms | 6045 ms | 0.000 | 29289 ms | 46 ms | 1221 KB | 280 KB | 15 KB | 801 KB | 71 KB | 19 | 1775 |
| `/blog/how-much-is-starlink-nigeria-price-naira-2026` | 37 | 6746 ms | 3485 ms | 487 ms | 0.217 | 10071 ms | 27 ms | 812 KB | 305 KB | 15 KB | 369 KB | 71 KB | 15 | 480 |
| `/our-work` | 62 | 5513 ms | 2911 ms | 241 ms | 0.000 | 9788 ms | 22 ms | 1032 KB | 280 KB | 15 KB | 614 KB | 71 KB | 17 | 619 |
| `/products` | 62 | 6028 ms | 2929 ms | 168 ms | 0.000 | 10477 ms | 28 ms | 1201 KB | 280 KB | 15 KB | 783 KB | 71 KB | 20 | 512 |

## LCP elements

- `/`: `div.relative > div.relative > div.relative > img.absolute` <img src="/images/products/starlink-gen3v4/StandardDish1.jpeg" alt="Professional installation — DataGram Starlink installation Nigeria" class="absolute inset-0 h-full w-full object-cover transition-opacity duration-70…" loading="eager" width="1200" height="800" style="object-position: center top;">
- `/starlink-offshore-maritime-installation`: `section.relative > div.absolute > div.aspect-[16/9] > img` <img src="/images/maritime2.jpeg" alt="Starlink dish installed on tanker deck in the open ocean, Nigeria offshore" data-dg-image="maritime2.jpeg" data-dg-placement="wide cinematic shot of tanker deck with Starlink dish, open ocean horizon …" style="width: 100%; height: 100%; object-fit: cover;">
- `/starlink-installation-lagos`: `section.relative > div.absolute > div.aspect-[16/9] > img` <img src="/images/starlinkSetup.jpeg" alt="Starlink dish on commercial building in Lagos, DataGram installation" width="1920" height="1080" data-dg-image="starlinkSetup.jpeg" data-dg-placement="commercial building with active construction in background reads as Lagos …" style="width: 100%; height: 100%; object-fit: cover; object-position: center top;">
- `/blog`: `div.grid > div.rounded-lg > div.aspect-[16/9] > img.h-full` <img src="/images/starlinkInstallation.jpeg" alt="Starlink dish installation in Nigeria — DataGram" loading="lazy" data-dg-image="starlinkInstallation.jpeg" class="h-full w-full transition-transform duration-300 group-hover:scale-105" style="object-fit: cover; object-position: center top; width: 100%; height: 100%;">
- `/blog/how-much-is-starlink-nigeria-price-naira-2026`: `div.grid > article.min-w-0 > div.mt-8 > img` <img src="/images/datagram-starlink-unboxing-kit-contents.jpg" alt="Starlink kit contents unboxed, including the dish cable and router, for th…" data-dg-image="datagram-starlink-unboxing-kit-contents.jpg" data-dg-placement="IMAGE: datagram-starlink-unboxing-kit-contents.jpg — DataGram photo of an …" style="width: 100%; height: 100%; object-fit: cover; object-position: center top;">
- `/our-work`: `div.bg-white > section.relative > div.absolute > img.h-full` <img src="/images/installations/hp-kit--naval-vessel--sagbama/photo-1.jpeg" alt="DataGram Starlink installations across Nigeria" class="h-full w-full object-cover opacity-30">
- `/products`: `div > article.group > div.overflow-hidden > img.h-48` <img src="/images/products/starlink-gen3v4/StandardDish1.jpeg" alt="Starlink Gen3 v4 Standard Dish" class="h-48 w-full object-cover transition-transform duration-500 group-hover:sca…" style="object-position: center center;">

## On-disk JS and CSS

- `assets/index-BBy_c0_C.js` raw 1036 KB, gzip 291 KB, brotli 233 KB
- `assets/vendor-khI0NAQz.js` raw 162 KB, gzip 53 KB, brotli 46 KB
- `assets/trending-b-C76QOUrA.js` raw 102 KB, gzip 36 KB, brotli 31 KB
- `assets/evergreen-b-BLktXqct.js` raw 84 KB, gzip 30 KB, brotli 25 KB
- `assets/evergreen-a-BqgL0zx-.js` raw 84 KB, gzip 30 KB, brotli 26 KB
- `assets/trending-a-CosGodXR.js` raw 89 KB, gzip 29 KB, brotli 25 KB
- `assets/august-2026-sprint-CNtyyzdU.js` raw 61 KB, gzip 19 KB, brotli 16 KB
- `assets/index-0rFw8N-Y.css` raw 111 KB, gzip 19 KB, brotli 15 KB
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
