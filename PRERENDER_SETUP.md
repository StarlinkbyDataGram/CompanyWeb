# Prerender setup (DataGram SPA)

## Context

The site is a Vite + React 18 SPA with no SSR. Crawlers that do not execute JavaScript may see an empty `#root` unless HTML snapshots exist.

## What we use in production builds

1. **`react-snap`** is listed in `package.json` for compatibility with the original spec, but its bundled Puppeteer (Chromium ~71) cannot parse the modern Vite bundle (`Unexpected token '?'` on optional chaining). Do not rely on `postbuild: react-snap` alone on this stack.

2. **`scripts/prerender-spa.mjs`** runs after the client build with a current Puppeteer. It:
   - Serves `dist/spa` locally
   - Visits each URL in the route list (mirrors `reactSnap.include` in `package.json`)
   - Writes full HTML to `index.html` per route (e.g. `dist/spa/starlink-installation-lagos/index.html`)

3. **Hydration** in `client/App.tsx`: if `#root` already has children (prerendered HTML), `hydrateRoot` is used; otherwise `createRoot().render()`.

4. **`index.html`** includes a `<noscript>` block with business description and contact links.

## Build commands

```bash
npm run build:client   # Vite → dist/spa
node scripts/prerender-spa.mjs
```

`npm run build` runs client + server builds; run the prerender script after `build:client` in CI/CD before deploy.

## Dynamic rendering alternative (CDN / origin)

If you prefer bot-only prerendering at the edge instead of static HTML files:

### Rendertron (self-hosted)

1. Deploy [Rendertron](https://github.com/GoogleChrome/rendertron) (Cloud Run, GCE, or Docker).
2. On your CDN or reverse proxy, route requests where `User-Agent` matches bot patterns to Rendertron with `?url=https://www.datagram.ng<path>`.
3. Cache rendered HTML at the edge (short TTL for content pages).

Example nginx sketch:

```nginx
map $http_user_agent $is_bot {
  default 0;
  ~*googlebot|bingbot|yandex|baiduspider|facebookexternalhit|twitterbot 1;
}
location / {
  if ($is_bot = 1) {
    proxy_pass http://rendertron-service:3000/render?url=https://www.datagram.ng$request_uri;
  }
  try_files $uri $uri/ /index.html;
}
```

### Prerender.io (hosted)

1. Sign up at [prerender.io](https://prerender.io).
2. Add middleware or CDN rule: bots → `https://service.prerender.io/https://www.datagram.ng<path>` with your token.
3. Allow-list new landing URLs when you add routes (same list as `reactSnap.include`).

## Route list maintenance

When adding SEO landing pages or blog slugs, update:

- `package.json` → `reactSnap.include`
- `scripts/prerender-spa.mjs` → `ROUTES`
- `client/data/landing/snap-routes.ts` (reference)
- `scripts/generate-sitemap.ts` (sitemap source of truth)

## Verification

After prerender:

```bash
grep -l "Starlink Installation Lagos" dist/spa/starlink-installation-lagos/index.html
```

You should see page content in the saved HTML, not only `<div id="root"></div>`.
