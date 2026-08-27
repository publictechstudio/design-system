# Public Tech Studio Design System

One Tailwind design system for Public Tech Studio and the products it ships. It
replaces the two different CSS frameworks the sites had drifted into — shadcn/ui
+ Tailwind v3 on the studio site, a hand-rolled MD3 layer on Tailwind v4 in the
ferry app — with a single token layer, one component vocabulary, and one set of
rules for maps and data.

**Public Tech Studio is the parent brand and the system's default.** Lagos Ferry
Map is a product theme under it: add `data-theme="ferry"` to a subtree and the
chrome goes navy and cards switch to MD3 elevation. Shape does not vary by
theme — 3.2px containers and controls everywhere. Adding a future product means
adding one theme scope, not a new system.

## The organisations

**Public Tech Studio** — a civic-tech and data studio using data and technology
to close information gaps in Africa, with a focus on the continent's
fast-changing urban landscape. It runs its own open-data projects and partners
with non-profits, governments, and development agencies on commissioned data
products. Founded and directed by Hannah Kates, previously Head of Product at
Stears and founder of Stears Open Data.

**Lagos Ferry Map** (`lagosferries.com`) — the studio's flagship open-data
product, launched in 2025: the first comprehensive map of every ferry route,
terminal, schedule and fare in Lagos, Nigeria. Lagos ferry services, mostly
private and informal, had no public documentation; the studio sent field
contractors to every location, published the result free and open as a GTFS
feed, and refreshes it quarterly. The Lagos State Waterways Authority (LASWA)
contributes data on facilities under its oversight.

## Sources this system was built from

- **`publictechstudio/public-tech-studio`** (branch `main`) — the studio's
  marketing site. Vite + React + Wouter, Tailwind v3, shadcn/ui on Radix,
  Lucide icons, Drizzle/Postgres. **This repo is the primary style authority**;
  where the two codebases disagree, its values win.
- **`publictechstudio/lagos-ferry-map-react`** (branch `main`) — the ferry
  product. Next.js 15 + React 19, Tailwind v4 `@theme`, MUI icons, Leaflet +
  Jawg tiles. Authority for the product theme, the map encoding, and the
  data-table patterns.
- **Live sites** `publictech.studio` and `lagosferries.com` — both render
  client-side, so only metadata and copy were readable, not stylesheets.
- **Uploaded assets** — three Public Tech Studio logo lockups.

See `github.md` for the file-by-file screen map.

---

## Content fundamentals

Two voices for two jobs, sharing a temperament: **plain, public-service,
unhurried, allergic to hype.**

**The studio speaks in the first-person plural, about capability.** "We create
public data products and technology solutions to inform decision-makers across
Africa." "We can either execute the entire project, from data collection to
product development, or support your team with specific services or hands-on
training." Never "I". The studio names itself in the third person when
crediting work: "Public Tech Studio launched this project in 2025 to…"

**The product speaks to the reader, about their journey.** "Avoid Lagos traffic
by taking the ferry." "Whether you commute daily or are visiting Lagos for the
first time, this site gives you the tools to beat the traffic."

**Casing.** Section titles in the marketing register are Title Case and short —
"Our Services", "Open Data Projects", "About Us", "Get In Touch", "Subscribe to
Our Newsletter". Everything else is sentence case: buttons, nav, body, table
cells. The only uppercase is the 12px label chips ("FIELD DATA COLLECTION"),
data-table column headers, and real acronyms (LASWA, NIWA, LGA, OMI EKO, VI,
DPI, GTFS, SEO).

**Spelling.** British/Nigerian English — "underutilised", "prioritises",
"standardized" appears too, so do not police it hard. Currency in naira, dates
as "February 2026".

**Headlines** state a claim or an instruction, never a slogan: "Avoid Lagos
traffic by taking the ferry." / "The first comprehensive ferry map for Lagos" /
"How many people live in Africa?"

**Buttons** are verb-first and name the destination: "View Product", "View Open
Data", "View Prior Projects", "View map of all routes", "Navigate from A to B",
"Report a data issue", "Share Feedback", "Read more", "Subscribe". Never "Learn
more", never "Get started".

**Service and project descriptions** are one clause or one sentence that says
exactly what you get, often without a closing full stop: "Data pipelines,
automations, and APIs that streamline data processing and publishing".

**Honesty is a house style.** The ferry product ships a "Limitations" accordion
as the *first* item on its About page, states when data was collected, and asks
to be corrected: "If you see anything that's missing or incorrect, please let us
know." Copy admits messiness rather than smoothing it: "Some locations are quite
informal and undeveloped, making them a better fit for commuters who are more
adventurous and don't mind getting their shoes muddy." Unreleased work gets a
card marked "Coming soon" rather than being hidden.

**Empty and error states** are full sentences: "No routes match the current
filters." Missing table values render as an em dash `—`.

**Credit is explicit.** Partners, funders and prior employers are named with
links in body copy. Every ferry page closes with "A project from Public Tech
Studio. Want to build something great?"

**No emoji, anywhere, on any surface.** No exclamation marks in UI copy.

---

## Visual foundations

### Colour

**One accent, two neutral families, and a three-colour signature.**

- **Studio blue `#2563EB`** is the interactive colour and the only accent,
  hovering to `#1D4ED8`. It is one value: links, filled buttons, and the
  full-colour feature and service panels all take it. The older
  `#007AF5`/`#0054A8` pair is retired — do not reintroduce it.
- **Ink and paper are violet-tinted, never neutral grey**: ink `#1B191F` for
  text and dark surfaces, `#6E6A77` for secondary, borders `#E3E0EB`,
  surface-variant `#E5E1F0`, and a page white of `#FBFAFF`. Cards sit on
  that in pure white, which is what makes them read as raised. Getting the
  violet cast right matters more than any single hex — flat greys make the whole
  system look like a different company.
- **The brand cycle** — `rgb(66,133,244)` blue, `rgb(34,197,94)` green,
  `rgb(255,235,59)` yellow — appears in exactly one place: the 6px rule under
  the nav, interpolating between them as you scroll (see Motion).
- **Ferry navy `#012C57`** is the product's identity colour: app bar, a flat
  75% veil over hero photography, and the resting state of every filled
  button, which brightens to `#1976D2` on hover.

Hierarchy inside text is expressed as **opacity of the ink colour** — 80% body,
70% ledes and card descriptions, 60% fine print — rather than as extra colour
tokens. Follow that habit; do not invent `--text-tertiary`.

Status hues are for encoding only, never decoration: clay `#7B3F00`
(charter-only, planned), rust `#8B2000` (less-developed), forest `#1A6B3C`,
green `#2E7D32`. Label chips use Tailwind's 100/700 pairs across six hues.

**There is no gradient anywhere in this system.** Flat fills only. Photographs
get a flat veil, not a gradient scrim.

### Typography

**Lato, and only Lato.** The studio loads 300/400/700/900; the ferry app loads
300/400/700.

Two registers coexist and must not be mixed within one surface:

- **Marketing** — 48px bold centred section headings (36px on mobile), a 20px
  lede at 70% ink constrained to a 48rem measure, 18px body at 80% ink, 20px
  semibold card titles. Bold, centred, confident.
- **Product** — the MD3 scale at *regular* weight, left-aligned: 45/52 display,
  32/40 page `h1`, 28/36 section `h2`, 22/28 app-bar title, 20/28 accordion
  row, 16/24 body, 14/20 secondary, 12/16 fine print.

Note the split: marketing headings are heavy, product headings are not. A 45px
ferry headline at weight 400 is correct and deliberate. Two tracking values do
all the fine work — `0.1px` on 14px pill labels, and wide tracking on 12px
uppercase chips and table headers. Nav links are **bold at 14px**, heavier than
you would expect at that size.

### Spacing and layout

A 4px scale, with a very regular section rhythm: `64px` vertical padding
rising to `96px` from `lg` up, inside an `80rem` content column with 16px
gutters (32px at `lg`). Reading measures step down from there: `64rem` for
data tables, `56rem` for body copy, `48rem` for ledes.

Sections alternate between white, the `#FBFAFF` page, and a 30% wash of
surface-variant — three backgrounds, no more, and never two adjacent sections
sharing one.

Fixed elements: both navs are sticky and 64px tall (studio `z-50`, ferry
`z-5000` so it clears Leaflet's stacking); the studio logo runs at 40px, the
hero logo at 480px (300px below `lg`); the map page is `calc(100vh - 64px)`;
map controls sit at `z-900`, dialogs at `z-9999`. Ferry detail panels are
half-width with a 1px left edge on desktop and a two-thirds-height slide-up
sheet with a 32×4px pill drag handle on mobile.

### Radii and shape

**One radius, system-wide: `--radius` is `0.2rem` = 3.2px.** Cards, images,
buttons, nav items, inputs, dialogs, panels, data-table containers, map controls
and tooltips all take it, on both themes. This is the single easiest thing to get
wrong — do not round it up to 8, 12 or 16px, and do not snap it to a grid.

The *only* fully round shapes are the chip family: label chips, status badges,
the mobile drag handle, and circular icon buttons. The ferry product's old MD3
scale (`--radius-md-sm` through `--radius-md-xl`) is retained as aliases that
now all resolve to `--radius`; prefer `--radius-container` and
`--radius-control` in new work.

### Cards, borders and depth

**Studio card:** white, 3.2px radius, `shadow-md`, 24px padding, no border —
and it lifts. Hover raises it to `shadow-lg` and translates it `-2px` over
**300ms ease-out**. That lift is the brand's most repeated gesture; a card that
does not lift reads as broken. A cover image runs full-bleed at 256px above the
padding box, and an internal `1px #EDECEE` `border-top` separates the label
row from the body — that hairline is the only border a card gets.

**Ferry card:** white, 3.2px radius, 32px padding, MD3 elevation-1 rising to
elevation-2, **no transform**. Data containers are the inverse: same radius, 1px
`#C3C7CF` outline, no shadow, rows divided by that outline at 60% opacity
under a sticky `#DFE2EE` header.

Depth is shadow only. **There are no inner shadows and no rings anywhere.**

### Interaction states

**Hover** is a state layer or a lift, never a hue change on text: 8% of the
foreground behind icon buttons and nav pills, 8% white on dark footers, 3% on
table rows, 10% on filter toggles. Filled studio buttons darken blue and gain a
shadow step; ferry buttons go navy → blue; cards lift; nav links go ink →
primary; links go `#2563EB` → `#1D4ED8`.

**Press has no dedicated treatment** — no shrink, no darkening. **Focus** is
largely the browser default, deliberately stripped only on Leaflet SVG paths;
text inputs in the product are bottom-border-only fields that switch from
`#C3C7CF` to primary on focus. Disabled is 50% opacity, except the "Coming
soon" button, which is a solid grey `#9CA3AF` with `cursor: not-allowed`.

Transitions are `200ms` on `colors`/`box-shadow` for chrome and `300ms
ease-out` for the card lift. Never on `all`.

### Motion

The studio has an entrance vocabulary and one signature; the product has almost
nothing.

- **Entrances** (studio, on scroll-in): `fade-in` 0.6s ease-in-out,
  `slide-up` 0.8s ease-out from 30px, `scale-in` 0.5s ease-out from 0.9.
  Section headers fade, prose slides up, cards scale in.
- **The signature** is the 6px rule under the nav, whose colour travels blue →
  green → yellow → blue as you scroll, completing the cycle **twice** over the
  document height, interpolated in RGB rather than stepped. It is the identity's
  only piece of motion and the thing people recognise. Keep it 6px, keep it
  smooth.
- **The product's flourish** is `ferry-sail`: a 5s loop where the ferry icon
  enters fast from the left, decelerates into the centre, *pauses at the jetty*,
  then accelerates out — with a per-keyframe timing function for each phase.
  That pause is the whole idea. `bob` is an 8px vertical float at 2s.
- The spinner is a 2px blue ring with a transparent top edge. `html` has
  `scroll-behavior: smooth`, and in-page nav is JS-driven smooth scroll.

### Transparency and blur

Transparency yes, blur never — **there is no `backdrop-filter` anywhere.** The
studio hero photo takes a flat 50% black overlay; feature-card photos sit at 30%
opacity under an 80% blue veil; ferry hero photos take a flat 75% navy veil.
Dialog scrims are 40–50% black. A floating map control uses `surface/90`.
State layers are 3–10% alpha. Tooltips are solid ink at 12px with light text.

### Imagery

Real documentary photography and real data graphics — **never illustration, and
never AI imagery.** Two kinds:

1. **Photography** — Lagos traffic, a working ferry, an urban aerial, flooding.
   Warm, saturated, daylight, shot at ground or drone level. No grain, no
   duotone, no black and white. Always full-bleed `object-cover`, always under
   a flat veil when type sits on top.
2. **Product screenshots as portfolio imagery** — the project cards show the
   actual maps and charts the studio built, at 256px `object-cover`. This is
   the studio's primary visual: its work is its illustration. Stock photography
   appears only as texture behind the feature panels, at 30%.

Alt text describes the graphic, not the project: "A graphic showing many people
overlaid with the map boundary of Africa and its countries."

### Iconography

**Lucide, and only Lucide.** One family on every surface — marketing, product
chrome and product editorial alike: stroke-based, 2px weight, always
`currentColor`, sized 48px (ferry CTA cards), 32px (service tiles), 24px
(accordion, chrome), 20px (map controls), 18px (panel close), 14–16px (inline
affordances and buttons).

The two Material sets the ferry codebase shipped — hand-inlined *filled* path
data for chrome, `@mui/icons-material` Outlined variants for editorial lists —
are **retired**. Each glyph maps to its closest Lucide equivalent, and
`components/icons/Icon.jsx` ships that mapping so prototypes stop re-deriving
path data:

| Retired Material glyph | Lucide replacement |
| --- | --- |
| `Info` | `info` |
| `Map`, `MapOutlined` | `map` |
| `Directions` | `route` |
| `Warning`, `WarningAmberOutlined` | `triangle-alert` |
| `Close` | `x` |
| `ExpandMore` | `chevron-down` |
| `FilterAlt` | `funnel` |
| `MyLocation` | `locate-fixed` |
| `LightbulbOutlined` | `lightbulb` |
| `DirectionsBoatOutlined` | `ship` |
| `SecurityOutlined` | `shield-check` |

App-chrome glyphs added for the map app template, also in `ICON_PATHS`:
`search`, `arrowLeft` (lucide `arrow-left`), `file`, `pencil`. Take any further
glyph from Lucide and register it here first — never inline path data in a
template.

Marketing surfaces additionally use `ClipboardList`, `Workflow`, `BarChart3`,
`Sparkles`, `Users`, `Search`, `Mail`, `Menu`. Load Lucide from CDN. For a
glyph outside the set above, take it from Lucide — never mix in a second family.

No emoji. No Unicode characters as icons, with two exceptions that are content
rather than iconography: the em dash `—` for missing table values and `→` in
route names ("Ikorodu → CMS ferry"). Bulleted lists use a 6px blue dot `span`,
not a glyph. An interpunct `·` separates inline stat counts.

**Marks.** The Public Tech Studio logo is a black city skyline with "PUBLIC"
reversed out of it over "TECH STUDIO" in a geometric sans; the horizontal SVG
lockup is the one to use in chrome (40px tall), the white version over
photography, the stacked PNG only in square slots. Two other proprietary
graphics exist and must never be redrawn: the **Africa scribble**
(`assets/brand/africa-scribble.svg`, rendered inverted at 128px) and the
**ferry icon** (`assets/brand/ferry-icon.png`, rotated −5° and filtered to
white over photography). **Lagos Ferry Map has no wordmark** — its name is set
in plain Lato 700 at 22px. Do not create one.

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | Global CSS entry point. Imports only. Link this one file. |
| `tokens/` | `fonts`, `colors`, `typography`, `spacing`, `radii`, `elevation`, `motion`, `map`, `themes`, `base` |
| `tailwind/theme.css` | Tailwind **v4** `@theme` mapping — the drop-in app entry point |
| `tailwind/preset.js` | Tailwind **v3** preset, for the studio site as it stands today |
| `components/core/` | Button, Card, Badge, Pill, Spinner |
| `components/marketing/` | SiteNav, BrandRule, SectionHeader, ProjectCard, ServiceCard, FeatureCard, LabelChip |
| `components/navigation/` | AppBar, Footer, Accordion |
| `components/data/` | DataTable, FilterHeader, StatRow, Tooltip |
| `components/feedback/` | Dialog, Panel |
| `components/icons/` | Icon — the Lucide glyph set, one family for every surface |
| `ui_kits/public_tech_studio/` | Click-through recreation of the marketing site |
| `ui_kits/lagos_ferry_map/` | Click-through recreation of the ferry product |
| `guidelines/` | Foundation specimen cards + `map-rules.md` |
| `assets/logos/` | Studio lockups (SVG + PNG), LASWA, navigation partners |
| `assets/brand/` | Africa scribble, ferry icon, favicons |
| `assets/imagery/` | Hero photography, project graphics, map preview |
| `github.md` | Source repo association + screen map |
| `SKILL.md` | Agent Skills entry point |

### Using it

```css
/* Tailwind v4 */
@import "tailwindcss";
@import "@pts/design-system/tailwind/theme.css";
```

```jsx
/* Studio surface — the default */
<SiteNav logo={logo} links={NAV} action={<Button>Subscribe</Button>} />

/* Product surface */
<div data-theme="ferry">
  <AppBar title="Lagos Ferry Map" links={NAV} activeHref="/map" />
</div>
```

### Intentional additions

Four primitives have no single counterpart in either codebase and were factored
out of repeated inline markup, so consumers stop copying class strings:

- **Button** — the filled pill/rectangle appears in six places across the two
  repos as duplicated utility strings. One component, four variants.
- **BrandRule** — the scroll-cycling nav rule lived inline in
  `navigation.tsx`; it is the brand's signature and deserves to be reusable.
- **Icon** — declares the Lucide path data once, so surfaces cannot drift apart.
- **Pill** — the neutral chip used for destination tags in the ferry tables. It
  and Badge keep the fully round shape; nothing else does.

Everything else maps one-to-one onto a component in one of the two repositories.
The 47 shadcn/ui primitives in `client/src/components/ui/` are deliberately
**not** reproduced: they are an unmodified vendor drop, not brand decisions.
Pull them from shadcn as needed — this system supplies the tokens they read.
