# UI kit — Public Tech Studio (marketing site)

Recreation of `publictech.studio`, built from `publictechstudio/public-tech-studio`
(`client/src/components/*`, `client/src/pages/home.tsx`, `client/src/index.css`).

Open `index.html`. Everything is interactive: the brand rule under the nav
tracks scroll position, nav links smooth-scroll to sections, "Read more" opens
the project description in a dialog, and Subscribe opens the newsletter dialog.

## Screens / sections

| Section | Source |
| --- | --- |
| Nav + brand rule | `components/navigation.tsx` |
| Hero — white logo over urban aerial | `components/hero-section.tsx` |
| Two categories of work | `components/abstract-section.tsx` |
| Our Services — six tiles | `components/services-section.tsx` |
| Open Data Projects grid + dialog | `components/open-data-section.tsx` |
| Subscribe to Our Newsletter | `components/newsletter-section.tsx` |
| About Us | `components/about-section.tsx` |
| Get In Touch | `components/contact-section.tsx` |
| Footer | `components/footer.tsx` |

## Knowingly abbreviated

- The newsletter is a Substack `<iframe>` in production; here it is a styled
  stand-in so the kit works offline.
- The project grid shows four projects, not six, and two use imagery from the
  studio's other work as stand-ins (election map, parliament chart) because
  the originals are 1.5 MB+ each.
- The mobile drawer and the Projects dropdown are not built — desktop only.
- Commissioned-project and Careers sections are omitted.
