The studio's portfolio unit — use it for both open-data projects and commissioned work, two-up on desktop.

```jsx
<ProjectCard
  title="Lagos Ferry Map"
  tagline="The first comprehensive map of Lagos' ferry system aimed at reducing road congestion"
  image={ferryMap}
  imageAlt="Lagos Ferry Map showing ferry routes and terminals"
  href="https://lagosferries.com"
  onReadMore={() => open(project)}
  labels={[
    { text: 'Field data collection', color: 'blue' },
    { text: 'Geospatial data', color: 'teal' },
    { text: 'Transit data', color: 'green' },
  ]}
/>
```

Long descriptions never live in the card — "Read more" opens them in a dialog so the grid stays even. Unreleased projects still get a card with `comingSoon`; the studio shows its pipeline rather than hiding it.
