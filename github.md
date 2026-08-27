repo: publictechstudio/public-tech-studio
branch: main
path: client/src/

## Last sync
date: 2026-08-21T12:00:11Z

### Updated in this project
- Rebased the whole token layer on the studio site's palette, 0.2rem radius, Tailwind shadow scale and entrance animations — the team's preferred styles.
- Captured the signature scroll-driven brand rule (blue → green → yellow, twice per page) as a reusable `BrandRule` component.
- Built marketing primitives from `client/src/components/*`: SiteNav, SectionHeader, ProjectCard, ServiceCard, FeatureCard, LabelChip.
- Merged in the Lagos Ferry Map product theme as `data-theme="ferry"`, keeping its MD3 scale, pill controls and map encoding.

## Secondary source
repo: publictechstudio/lagos-ferry-map-react
branch: main
path: src/
role: product theme, map/data-viz encoding, data-table patterns

## Screen map
| Design-system surface | Repo files |
| --- | --- |
| `ui_kits/public_tech_studio/index.html` | public-tech-studio: `client/src/pages/home.tsx`, `components/navigation.tsx`, `hero-section.tsx`, `abstract-section.tsx`, `services-section.tsx`, `open-data-section.tsx`, `about-section.tsx`, `newsletter-section.tsx`, `contact-section.tsx`, `footer.tsx` |
| `ui_kits/lagos_ferry_map/index.html` | lagos-ferry-map-react: `src/app/page.tsx`, `app/map/page.tsx`, `app/directory/page.tsx`, `app/about/page.tsx`, `components/HeroSection.tsx`, `CtaCard.tsx`, `MapWrapper.tsx`, `FacilitiesTable.tsx`, `RoutesTable.tsx`, `AboutAccordion.tsx`, `Navbar.tsx`, `Footer.tsx` |
| `tokens/colors.css`, `radii.css`, `elevation.css`, `motion.css` | public-tech-studio: `client/src/index.css`, `tailwind.config.ts` |
| `tokens/typography.css`, `spacing.css` | both: `client/src/index.css` + `src/app/globals.css`, `src/app/layout.tsx` |
| `tokens/themes.css` | both — `:root` from the studio, `[data-theme="ferry"]` from the ferry app |
| `tokens/map.css`, `guidelines/map-rules.md` | lagos-ferry-map-react: `src/components/LeafletMap.tsx`, `FacilityList.tsx` |
| `components/marketing/*` | public-tech-studio: `client/src/components/*` |
| `components/core/*`, `data/*`, `feedback/*`, `navigation/*`, `icons/*` | both — see each `.prompt.md` |
| `assets/logos/`, `assets/brand/`, `assets/imagery/` | public-tech-studio: `client/src/assets/`; lagos-ferry-map-react: `public/` |
