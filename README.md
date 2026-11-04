# opencode observability — screenshot preview

GitHub Pages build: <https://swipswaps.github.io/opencode-observability/>

The public build probes `https://10.100.0.24:5099/api/resources` on load. When
the correct backend is reachable (trusted local CA; Chrome allows private
network access), it renders the live MUI shell and uses the real API. If the
probe fails, it shows **actual screenshots captured from the live app** at
`https://10.100.0.24:5099/app/`; there is no synthetic data or fake metric.

## Live detection

`src/lib.js` sets `API_BASE=https://10.100.0.24:5099` on `.github.io` (override
with `?api=https://192.168.4.24:5099`). `App` probes `/api/resources` with a
5 s timeout. The local dashboard adds `Access-Control-Allow-Origin:
https://swipswaps.github.io` and `Access-Control-Allow-Private-Network: true`,
plus CORS preflight handling, for this probe and the live API/SSE.

## Build

```bash
npm ci
npm run build
```

Vite base is `/opencode-observability/`; the Actions workflow publishes
`dist/` with `actions/deploy-pages`.

## What the preview shows

- Desktop Overview with cost/token/health/trend cards.
- Desktop Activity timeline with the now/relative-duration axis.
- Android Overview and Activity at 390 px.
- Clickable full-size images, installable PWA shell, light/dark theme.

The screenshots are the real `status-mui-*.png` captures from the local app
(`docs/ux/` in the main workspace).

## Monitor

```bash
gh run list --repo swipswaps/opencode-observability --limit 3
gh api repos/swipswaps/opencode-observability/pages
xdg-open https://swipswaps.github.io/opencode-observability/
```
