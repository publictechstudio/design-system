The product's top chrome — sticky, 64px, filled with the theme app-bar colour, z-index 5000 so it clears Leaflet.

```jsx
<AppBar
  title="Lagos Ferry Map"
  activeHref="/map"
  links={[
    { label: 'About', href: '/about' },
    { label: 'Map', href: '/map' },
    { label: 'Navigation', href: '/partnerships' },
    { label: 'Directory', href: '/directory' },
  ]}
/>
```

Under `data-theme="ferry"` the bar is navy `#012C57`; the studio default is black. The title is plain type — Lagos Ferry Map has no wordmark asset, so do not substitute a logo. Nav labels are single words in sentence case.
