# Lighthouse baseline

Generated 2026-10-09T09:06:26.126Z

- Build: `PERF_SKIP_BUILD=1 (existing dist/spa)`
- Form factor: mobile, simulated throttling (Lighthouse default Slow 4G, 4x CPU)
- Runs per URL: 3
- Numeric values are the median of the runs. The LCP element is taken from the run whose performance score is the median.

| URL | Perf | LCP | FCP | TBT | CLS | SI | TTFB | Transfer | JS | CSS | Images | Fonts | Req | DOM |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `/` | 28 | 14781 ms | 3716 ms | 10424 ms | 0.000 | 25673 ms | 565 ms | 2157 KB | 914 KB | 16 KB | 1033 KB | 47 KB | 38 | 1777 |
| `/starlink-offshore-maritime-installation` | 32 | 6051 ms | 3667 ms | 2503 ms | 0.000 | 27219 ms | 28 ms | 897 KB | 440 KB | 16 KB | 258 KB | 131 KB | 12 | 674 |
| `/starlink-installation-lagos` | 30 | 6741 ms | 4067 ms | 2535 ms | 0.000 | 21519 ms | 37 ms | 972 KB | 440 KB | 16 KB | 416 KB | 47 KB | 13 | 505 |
| `/blog` | 29 | 8935 ms | 3692 ms | 3454 ms | 0.000 | 19666 ms | 30 ms | 1442 KB | 440 KB | 16 KB | 801 KB | 131 KB | 18 | 1775 |
| `/blog/how-much-is-starlink-nigeria-price-naira-2026` | 35 | 7368 ms | 4218 ms | 2440 ms | 0.000 | 27024 ms | 32 ms | 1008 KB | 440 KB | 16 KB | 369 KB | 131 KB | 12 | 480 |
| `/our-work` | 34 | 6545 ms | 3792 ms | 2736 ms | 0.000 | 18129 ms | 27 ms | 1036 KB | 442 KB | 16 KB | 479 KB | 47 KB | 13 | 619 |
| `/products` | 36 | 5915 ms | 3716 ms | 1390 ms | 0.000 | 17655 ms | 27 ms | 1340 KB | 442 KB | 16 KB | 783 KB | 47 KB | 18 | 512 |

## LCP elements

- `/`: `div.relative > div.relative > div.relative > img.absolute` <img src="/images/products/starlink-gen3v4/StandardDish1.jpeg" alt="Professional installation — DataGram Starlink installation Nigeria" class="absolute inset-0 h-full w-full object-cover transition-opacity duration-70…" loading="eager" width="1200" height="800" style="object-position: center top;">
- `/starlink-offshore-maritime-installation`: `section.relative > div.absolute > div.aspect-[16/9] > img` <img src="/images/maritime2.jpeg" alt="Starlink dish installed on tanker deck in the open ocean, Nigeria offshore" data-dg-image="maritime2.jpeg" data-dg-placement="wide cinematic shot of tanker deck with Starlink dish, open ocean horizon …" style="width: 100%; height: 100%; object-fit: cover;">
- `/starlink-installation-lagos`: `section.relative > div.absolute > div.aspect-[16/9] > img` <img src="/images/starlinkSetup.jpeg" alt="Starlink dish on commercial building in Lagos, DataGram installation" width="1920" height="1080" data-dg-image="starlinkSetup.jpeg" data-dg-placement="commercial building with active construction in background reads as Lagos …" style="width: 100%; height: 100%; object-fit: cover; object-position: center top;">
- `/blog`: `div.grid > div.rounded-lg > div.aspect-[16/9] > img.h-full` <img src="/images/starlinkInstallation.jpeg" alt="Starlink dish installation in Nigeria — DataGram" loading="lazy" data-dg-image="starlinkInstallation.jpeg" class="h-full w-full transition-transform duration-300 group-hover:scale-105" style="object-fit: cover; object-position: center top; width: 100%; height: 100%;">
- `/blog/how-much-is-starlink-nigeria-price-naira-2026`: `div.grid > article.min-w-0 > div.mt-8 > img` <img src="/images/datagram-starlink-unboxing-kit-contents.jpg" alt="Starlink kit contents unboxed, including the dish cable and router, for th…" data-dg-image="datagram-starlink-unboxing-kit-contents.jpg" data-dg-placement="IMAGE: datagram-starlink-unboxing-kit-contents.jpg — DataGram photo of an …" style="width: 100%; height: 100%; object-fit: cover; object-position: center top;">
- `/our-work`: `div.bg-white > section.relative > div.absolute > img.h-full` <img src="/images/installations/hp-kit--naval-vessel--sagbama/photo-1.jpeg" alt="DataGram Starlink installations across Nigeria" class="h-full w-full object-cover opacity-30">
- `/products`: `main > div.page-animate > section.relative > div.fixed` <div class="fixed inset-0 -z-10" style="background-image: url(&quot;/homeImg/seven.avif&quot;); background-size: cover;">

## On-disk JS and CSS

- `assets/index-OCcrPXcO.js` raw 1835 KB, gzip 557 KB, brotli 442 KB
- `assets/index-jXJtHv4n.css` raw 111 KB, gzip 19 KB, brotli 15 KB
