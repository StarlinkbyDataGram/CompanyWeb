# Lighthouse b3-rest

Generated 2026-10-09T11:09:45.427Z

- Build: `PERF_SKIP_BUILD=1 (existing dist/spa)`
- Form factor: mobile, simulated throttling (Lighthouse default Slow 4G, 4x CPU)
- Runs per URL: 3
- Numeric values are the median of the runs. The LCP element is taken from the run whose performance score is the median.

| URL | Perf | LCP | FCP | TBT | CLS | SI | TTFB | Transfer | JS | CSS | Images | Fonts | Req | DOM |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `/blog` | 31 | 9250 ms | 2901 ms | 6372 ms | 0.000 | 19352 ms | 41 ms | 937 KB | 280 KB | 16 KB | 458 KB | 131 KB | 16 | 1775 |
| `/blog/how-much-is-starlink-nigeria-price-naira-2026` | 26 | 7876 ms | 4246 ms | 1086 ms | 0.000 | 13003 ms | 31 ms | 873 KB | 305 KB | 16 KB | 369 KB | 131 KB | 15 | 480 |
| `/our-work` | 43 | 5517 ms | 2833 ms | 829 ms | 0.000 | 14488 ms | 26 ms | 874 KB | 280 KB | 16 KB | 479 KB | 47 KB | 14 | 619 |
| `/products` | 40 | 6315 ms | 2800 ms | 1213 ms | 0.000 | 13783 ms | 40 ms | 1178 KB | 280 KB | 16 KB | 783 KB | 47 KB | 19 | 512 |

## LCP elements

- `/blog`: `div.grid > div.rounded-lg > div.aspect-[16/9] > img.h-full` <img src="/images/starlinkInstallation.jpeg" alt="Starlink dish installation in Nigeria — DataGram" loading="lazy" data-dg-image="starlinkInstallation.jpeg" class="h-full w-full transition-transform duration-300 group-hover:scale-105" style="object-fit: cover; object-position: center top; width: 100%; height: 100%;">
- `/blog/how-much-is-starlink-nigeria-price-naira-2026`: `div.grid > article.min-w-0 > div.mt-8 > img` <img src="/images/datagram-starlink-unboxing-kit-contents.jpg" alt="Starlink kit contents unboxed, including the dish cable and router, for th…" data-dg-image="datagram-starlink-unboxing-kit-contents.jpg" data-dg-placement="IMAGE: datagram-starlink-unboxing-kit-contents.jpg — DataGram photo of an …" style="width: 100%; height: 100%; object-fit: cover; object-position: center top;">
- `/our-work`: `div.bg-white > section.relative > div.absolute > img.h-full` <img src="/images/installations/hp-kit--naval-vessel--sagbama/photo-1.jpeg" alt="DataGram Starlink installations across Nigeria" class="h-full w-full object-cover opacity-30">
- `/products`: `div > article.group > div.overflow-hidden > img.h-48` <img src="/images/products/starlink-gen3v4/StandardDish1.jpeg" alt="Starlink Gen3 v4 Standard Dish" class="h-48 w-full object-cover transition-transform duration-500 group-hover:sca…" style="object-position: center center;">

## On-disk JS and CSS

- `assets/index-DFTRBLJQ.js` raw 1035 KB, gzip 290 KB, brotli 233 KB
- `assets/vendor-khI0NAQz.js` raw 162 KB, gzip 53 KB, brotli 46 KB
- `assets/trending-b-C76QOUrA.js` raw 102 KB, gzip 36 KB, brotli 31 KB
- `assets/evergreen-b-BLktXqct.js` raw 84 KB, gzip 30 KB, brotli 25 KB
- `assets/evergreen-a-BqgL0zx-.js` raw 84 KB, gzip 30 KB, brotli 26 KB
- `assets/trending-a-CosGodXR.js` raw 89 KB, gzip 29 KB, brotli 25 KB
- `assets/august-2026-sprint-CNtyyzdU.js` raw 61 KB, gzip 19 KB, brotli 16 KB
- `assets/index-DXhcWc1s.css` raw 110 KB, gzip 19 KB, brotli 15 KB
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
