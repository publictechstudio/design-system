# Map App Template

A generic, config-driven interactive map application. Everything a new
dataset needs — layers, styling, copy, record layout, downloads — is
declared in **one file**: `map.config.js`.

Built on the Public Tech Studio design system: it consumes `tokens/*.css`
and the shared components, and re-themes via `data-theme`.

---

## Swapping in a new dataset

1. Drop your data in `data/` (GeoJSON), or point `source.url` at a remote
   file or API endpoint.
2. Edit `map.config.js` — `app`, `map.center`, and the `layers` array.
3. Run. `assertConfig()` throws with a line-by-line list if anything is wrong.

Nothing else changes. No component is dataset-aware.

```
templates/map-app/
├── map.config.js          ← the only file you edit
├── config.schema.js       ← validator; run in CI
├── lib/
│   └── maplibre-adapter.js  ← the only file that knows about MapLibre
└── data/                  ← your GeoJSON
```

## Layer types

| `type` | Renders | Key style keys |
| --- | --- | --- |
| `points` | Circles, optional clustering | `radius`, `colorBy`, `cluster` |
| `lines` | Route/network lines | `width`, `colorBy`, `dashBy` |
| `polygons` | Boundary fills + outlines | `fill`, `fillOpacity`, `strokeColor` |
| `choropleth` | Data-driven fill from a numeric field | `field`, `scale` (ascending `[value, colour]` stops) |
| `heatmap` | Density surface | `weightField`, `radius`, `intensity` |
| `raster` | XYZ tile overlay | `opacity` |

Every layer automatically gets a toggle in the layer panel, grouped by
`group`, with a legend derived from its own style declaration — swatches
from `colorBy`, a gradient bar from a choropleth `scale`, or a plain note.

An optional `info: '…'` string on any layer adds an (i) button beside its
toggle, opening a tooltip with that copy. The tooltip renders outside the
scrolling panel and flips above the button near the viewport bottom, so it
is never clipped. Omit `info` and no icon renders.

## Colour: theme-first, override anywhere

Layer colours in `map.config.js` are written as `'var(--color-primary)'`
etc. by default, so every layer inherits the active design-system theme —
no edits needed. To customise one colour, replace its `var(...)` with a
literal hex/rgb; that layer then ignores the theme for that value.
`var(--token, #fallback)` supplies a fallback for themes that don't define
the token (e.g. `--color-status-charter` exists only in the ferry theme).

Draw order is fixed by type (raster → polygons → choropleth → heatmap →
lines → points), so a new layer never hides an existing one.

## Data sources

```js
source: { url: './data/facilities.geojson' }        // bundled file
source: { url: 'https://api.example.org/v1/sites' } // remote GeoJSON / API
source: { data: { type: 'FeatureCollection', … } }  // inline
source: { tiles: ['https://…/{z}/{x}/{y}.png'] }    // raster only
```

## Validation

```js
import config from './map.config.js';
import { assertConfig } from './config.schema.js';
assertConfig(config); // throws on bad config, warns on missing attribution
```

Catches the failures that actually happen: swapped lat/lng, duplicate layer
ids, choropleth stops out of order, nav pointing at a screen that isn't
enabled, clustering on a non-point layer, tile URLs missing `{z}/{x}/{y}`.

## Screens

`landing`, `map`, `record` (detail), `about`, `downloads` — each toggled by
`screens.*.enabled` and listed in `nav`. The record page is generated from
`record.sections`, with `format: 'number' | 'list' | 'date'` per field.

## Swapping the map engine

`lib/maplibre-adapter.js` is the only MapLibre-aware file. It exports
`sourceSpec(layer)` and `layerSpecs(layer, sourceId)`. A Leaflet adapter
implementing the same two functions drops in without touching the app.

## Component library

The layer panel, search field, legends, landing stats, record detail and
downloads screens are built from shared components now in the design
system's `components/data/` folder: `LayerToggle`, `Legend`, `SearchField`,
`StatGrid`, `DetailList`, `DownloadRow`. `Tooltip` gained a `trigger="click"`
mode for the layer info button. This prototype (`Map App Template.dc.html`)
still renders its own inline markup matching those components 1:1 — see
`components/data/data.card.html` for the live component versions to import
into a React build of this template.

## Live prototype

`Map App Template.dc.html` at the repo root renders this config end to end —
real MapLibre map, working toggles, search, selection and record pages.
