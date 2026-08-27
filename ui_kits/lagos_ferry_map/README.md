# UI kit — Lagos Ferry Map (product)

Recreation of `lagosferries.com`, built from
`publictechstudio/lagos-ferry-map-react`. The whole kit renders under
`data-theme="ferry"`, which is what swaps the chrome to navy, controls to
pills, and cards to 16px MD3 elevation.

Open `index.html` and click through: **Map** opens the map screen (search the
facility list, click a facility to open the detail panel), **Directory** has
both filterable tables, **About** has the accordion.

## Screens

| Screen | Source |
| --- | --- |
| App bar | `components/Navbar.tsx` |
| Home — split hero + ferry-sail + CTA cards | `components/HeroSection.tsx`, `components/CtaCard.tsx`, `app/page.tsx` |
| Map — basemap, facility list, legend, detail panel | `components/MapWrapper.tsx`, `components/LeafletMap.tsx`, `components/FacilityList.tsx`, `components/PanelShell.tsx` |
| Directory — facilities + routes tables | `app/directory/page.tsx`, `components/FacilitiesTable.tsx`, `components/RoutesTable.tsx` |
| About — accordion | `app/about/page.tsx`, `components/AboutAccordion.tsx` |
| Footer | `components/Footer.tsx` |

## Knowingly abbreviated

- The map is the production `map-preview.jpg` still, not a live Leaflet
  instance — the kit is about chrome, panels and legends, not tiles. Real
  encoding values are in `tokens/map.css` and `guidelines/map-rules.md`.
- Seven facilities and five routes stand in for the full dataset.
- Accordion icons are outlined stroke glyphs standing in for the MUI
  \`*Outlined\` variants the source imports — same register, drawn locally so the
  kit has no package dependency.
- The Navigation Partnerships page, route detail panel, and delayed feedback
  dialog are not built (the Dialog component covers the last one).
- Mobile layouts (slide-up sheet, drawer) are described in `readme.md` but the
  kit renders the desktop breakpoint.
