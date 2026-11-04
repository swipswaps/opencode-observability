# opencode observability — Pages demo

Static demo of the Material UI observability app, deployed at:

<https://swipswaps.github.io/opencode-observability/>

The demo uses deterministic synthetic cost, activity, sessions, todos, and
health data. It does not call a local API, so the public page is useful for
UI/UX review and Android install testing. The live version stays at
`https://10.100.0.24:5099/app/` in the main workspace.

## Build

```bash
npm ci
npm run build
```

Vite builds with `base=/opencode-observability/`; the GitHub Actions workflow
publishes `dist/` with `actions/deploy-pages`.

## Demo mode

`src/demo.js` activates when the hostname ends in `.github.io` or the URL has
`?demo=1`. It supplies the same shapes as `/api/cost`, `/api/activity`,
`/api/todos`, `/api/health`, and `/api/sessions`; `useLive` appends a synthetic
event every 12 seconds Client-side.

## Features

- MUI 9 / React 19 / Vite 8.
- Overview with cost, token mix, health, 14-day cost trend, recent sessions.
- Activity timeline: newest first, filters, Steps off by default, `/` search,
  now/relative-duration axis, expand/copy, per-row JSON copy.
- Sessions with search/sort; Todos; theme toggle; hash routes.
- Installable PWA with app-scoped manifest and service worker.

## Monitoring

From a host with `gh` auth and a display:

```bash
gh run list --repo swipswaps/opencode-observability --limit 5
gh api repos/swipswaps/opencode-observability/pages
xdg-open https://swipswaps.github.io/opencode-observability/
```
