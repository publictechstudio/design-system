The studio's signature device — a 6px rule under the nav whose colour travels blue → green → yellow as you scroll. Use it as the nav's bottom edge; it is the identity's only motion.

```jsx
<div style={{ position: 'sticky', top: 0, background: 'var(--color-nav)' }}>
  <nav>…</nav>
  <BrandRule />
</div>
```

Keep it 6px and keep the colours interpolated, not stepped — the smooth travel is the point. Pass `progress` to freeze it for a static mock or a specimen, and `scrollTarget` when the page scrolls inside a container rather than the window.
