Counts under a directory page title — the number is emphasised, the noun stays muted, and interpuncts separate the pairs.

```jsx
<StatRow stats={[
  { value: 24, label: 'facilities', href: '#facilities' },
  { value: 61, label: 'active routes', href: '#routes' },
  { value: 9, label: 'LGAs' },
]} />
```

Pluralise the label from the count. Link the stats that correspond to an anchor on the page; leave the rest unlinked. Never wrap these in cards or boxes — no stat tiles in this system.
