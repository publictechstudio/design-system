The dark footer — every product page ends with it, and the black strip crediting Public Tech Studio is not optional.

```jsx
<Footer links={[
  { label: 'About', href: '/about' },
  { label: 'Interactive Map', href: '/map' },
  { label: 'Navigation Partnerships', href: '/partnerships' },
  { label: 'Directory', href: '/directory' },
]} />
```

Footer link labels are longer and more explicit than nav labels ("Interactive Map", not "Map"). Include utility links (Sitemap, Robots, Report Issue) — the product treats them as public-interest surface, not clutter.
