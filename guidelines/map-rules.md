# Map & data-viz rules

Lifted from `src/components/LeafletMap.tsx` and `FacilityList.tsx`. Tokens
live in `tokens/map.css`.

## Basemap

Leaflet with **Jawg `jawg-sunny`** raster tiles
(`https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png`), preconnected in
`<head>`. Sunny is a warm, low-contrast basemap — it is chosen so that black
and dark-red markers stay legible against water and land alike. Do not swap in
a dark or satellite basemap; the whole encoding assumes a light warm ground.

## Route polylines — encoded by operator

| Meaning | Colour | Stroke |
| --- | --- | --- |
| Default route | `#4e4e4e` | 1.5, zoom-scaled |
| LagFerry (government) | `#1565C0` | 1.5, zoom-scaled |
| Commercial operator | `#808080` | 1.5, zoom-scaled |
| Unknown operator | `#a8a8a8` | 1.5 |
| Selected | `#262626` | 6 (8 when re-styled) |
| Planned (OMI EKO) | `#000000` | 1.5, `dashArray: "8, 6"` |

Every polyline is paired with an **invisible weight-10 hit line** underneath so
thin routes stay tappable on a phone. Selection thickens the line and darkens
it; it never changes hue.

## Facility markers — encoded by development level

| Meaning | Fill | Notes |
| --- | --- | --- |
| Developed | `#1A1A1A` | |
| Less developed | `#8B2000` | |
| Charter only | `#2E7D32` | hidden by default |
| Planned (OMI EKO) | `#FFFFFF` | black stroke, boat-shaped glyph |
| Uncategorised | `#8c00ff` | deliberately alarming — flags bad data |

Circle markers, **white 1.5px stroke, 0.8 fill opacity**, with a transparent
radius-20 halo as the touch target. Selection increases weight and radius
rather than changing colour. Route stops render at radius 12 / 0.8 opacity;
intermediate vertices at radius 3 / 0.3.

The uncategorised purple is a feature: it makes unclassified data impossible to
miss during review. Keep it.

## User location

A `#1976D2` dot (radius 9, white 3px stroke, full opacity) inside a
`#1976D2` accuracy halo (radius 120, 12% fill, 1px stroke).

## Default hidden layers

`Charter only`, `Omi Eko`, and `Omi Eko Routes` start hidden. The default
view shows only what a commuter can actually ride today; speculative and
charter-only data is opt-in.

## Legend

Every encoded dimension gets a legend row with a shape swatch that matches the
map exactly — a dashed line for planned routes, a filled circle for facilities,
a boat glyph for OMI EKO — plus an info affordance carrying the definition in
prose. Never a colour swatch alone.

## Zoom-responsive weight

Route stroke weight is a function of zoom, not a constant. Zoom out and lines
thin so the lagoon does not fill with ink.
