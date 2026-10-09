# Lighthouse b8

Generated 2026-10-09T17:53:44.695Z

- Build: `ANALYZE=1 npm run build`
- Form factor: mobile, simulated throttling (Lighthouse default Slow 4G, 4x CPU)
- Runs per URL: 3
- Numeric values are the median of the runs. The LCP element is taken from the run whose performance score is the median.

| URL | Perf | LCP | FCP | TBT | CLS | SI | TTFB | Transfer | JS | CSS | Images | Fonts | Req | DOM |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `/` | 35 | 6066 ms | 3242 ms | 1643 ms | 0.000 | 10348 ms | 289 ms | 492 KB | 286 KB | 15 KB | 63 KB | 71 KB | 13 | 1067 |
| `/starlink-offshore-maritime-installation` | 50 | 4443 ms | 3330 ms | 838 ms | 0.000 | 9469 ms | 236 ms | 463 KB | 286 KB | 15 KB | 37 KB | 71 KB | 10 | 694 |
| `/starlink-installation-lagos` | 58 | 4175 ms | 2683 ms | 354 ms | 0.000 | 9817 ms | 185 ms | 510 KB | 286 KB | 15 KB | 87 KB | 71 KB | 12 | 522 |
| `/blog` | 41 | 5395 ms | 2783 ms | 1435 ms | 0.000 | 9722 ms | 177 ms | 559 KB | 286 KB | 15 KB | 135 KB | 71 KB | 16 | 573 |
| `/blog/how-much-is-starlink-nigeria-price-naira-2026` | 34 | 9248 ms | 6204 ms | 1035 ms | 0.000 | 10737 ms | 215 ms | 478 KB | 312 KB | 15 KB | 27 KB | 71 KB | 12 | 492 |
| `/our-work` | 60 | 4260 ms | 2905 ms | 535 ms | 0.000 | 8896 ms | 162 ms | 652 KB | 286 KB | 15 KB | 231 KB | 71 KB | 16 | 663 |
| `/products` | 59 | 3989 ms | 2929 ms | 643 ms | 0.000 | 8385 ms | 159 ms | 559 KB | 286 KB | 15 KB | 138 KB | 71 KB | 16 | 547 |

## LCP elements

- `/`: `div.relative > div.relative > picture.contents > img.absolute` <img src="http://127.0.0.1:4173/images/products/starlink-gen3v4/StandardDish1.w768.a…" alt="Professional installation — DataGram Starlink installation Nigeria" sizes="(min-width: 768px) 65vw, 100vw" loading="eager" decoding="async" width="1200" height="800" fetchpriority="high" class="absolute inset-0 h-full w-full object-cover transition-opacity duration-70…" style="object-position: center top;">
- `/starlink-offshore-maritime-installation`: `div.absolute > div.aspect-[16/9] > picture.contents > img` <img src="http://127.0.0.1:4173/images/maritime2.w461.avif" alt="Starlink dish installed on tanker deck in the open ocean, Nigeria offshore" sizes="(max-width: 768px) 100vw, 50vw" loading="eager" decoding="async" width="461" height="1000" fetchpriority="high" data-dg-image="maritime2.jpeg" data-dg-placement="wide cinematic shot of tanker deck with Starlink dish, open ocean horizon …" style="width: 100%; height: 100%; object-fit: cover;">
- `/starlink-installation-lagos`: `div.absolute > div.aspect-[16/9] > picture.contents > img` <img src="http://127.0.0.1:4173/images/starlinkSetup.w471.avif" alt="Starlink dish on commercial building in Lagos, DataGram installation" sizes="(max-width: 768px) 100vw, 40vw" loading="eager" decoding="async" width="1920" height="1080" fetchpriority="high" data-dg-image="starlinkSetup.jpeg" data-dg-placement="commercial building with active construction in background reads as Lagos …" style="width: 100%; height: 100%; object-fit: cover; object-position: center top;">
- `/blog`: `div.rounded-lg > div.aspect-[16/9] > picture.contents > img.h-full` <img src="http://127.0.0.1:4173/images/starlinkInstallation.w768.avif" alt="Starlink dish installation in Nigeria — DataGram" sizes="(max-width: 640px) 100vw, 50vw" loading="eager" decoding="async" width="960" height="1280" fetchpriority="high" data-dg-image="starlinkInstallation.jpeg" class="h-full w-full transition-transform duration-300 group-hover:scale-105" style="object-fit: cover; object-position: center top; width: 100%; height: 100%;">
- `/blog/how-much-is-starlink-nigeria-price-naira-2026`: `article.min-w-0 > div.mt-8 > picture.contents > img` <img src="http://127.0.0.1:4173/images/datagram-starlink-unboxing-kit-contents.w768.…" alt="Starlink kit contents unboxed, including the dish cable and router, for th…" sizes="100vw" loading="eager" decoding="async" width="1024" height="711" fetchpriority="high" data-dg-image="datagram-starlink-unboxing-kit-contents.jpg" data-dg-placement="IMAGE: datagram-starlink-unboxing-kit-contents.jpg — DataGram photo of an …" style="width: 100%; height: 100%; object-fit: cover; object-position: center top;">
- `/our-work`: `section.relative > div.absolute > picture.contents > img.h-full` <img src="http://127.0.0.1:4173/images/installations/hp-kit--naval-vessel--sagbama/p…" alt="DataGram Starlink installations across Nigeria" sizes="100vw" loading="eager" decoding="async" width="720" height="1280" fetchpriority="high" class="h-full w-full object-cover opacity-30">
- `/products`: `article.group > div.overflow-hidden > picture.contents > img.h-48` <img src="http://127.0.0.1:4173/images/products/starlink-gen3v4/StandardDish1.w768.a…" alt="Starlink Gen3 v4 Standard Dish" sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" decoding="async" width="1280" height="720" class="h-48 w-full object-cover transition-transform duration-500 group-hover:sca…" style="object-position: center center;">

## On-disk JS and CSS

- `assets/index-DUJNEo5d.js` raw 1136 KB, gzip 301 KB, brotli 240 KB
- `assets/vendor-khI0NAQz.js` raw 162 KB, gzip 53 KB, brotli 46 KB
- `assets/trending-b-C76QOUrA.js` raw 102 KB, gzip 36 KB, brotli 31 KB
- `assets/evergreen-b-BLktXqct.js` raw 84 KB, gzip 30 KB, brotli 25 KB
- `assets/evergreen-a-BqgL0zx-.js` raw 84 KB, gzip 30 KB, brotli 26 KB
- `assets/trending-a-CosGodXR.js` raw 89 KB, gzip 29 KB, brotli 25 KB
- `assets/august-2026-sprint-CNtyyzdU.js` raw 61 KB, gzip 19 KB, brotli 16 KB
- `assets/index-Cc-q59xP.css` raw 111 KB, gzip 19 KB, brotli 15 KB
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
