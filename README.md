# opencode observability — screenshot preview

GitHub Pages build: <https://swipswaps.github.io/opencode-observability/>

This is not synthetic data. GitHub Pages cannot reach the local API, so the
public build shows **actual screenshots captured from the live app** at
`https://10.100.0.24:5099/app/`. The live app remains the source of truth; the
preview makes no API calls and displays no fake metrics.

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
