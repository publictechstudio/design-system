Renders one of the filled Material glyphs actually used in the product — use it instead of pasting SVG path data.

```jsx
<Icon name="map" size={48} />
<button aria-label="Close"><Icon name="close" size={18} /></button>
```

Icons inherit `currentColor`, so colour them on the parent. Sizes in use: 48 (hero CTA cards), 24 (accordion rows), 20 (map controls), 18 (panel close), 14 (inline table affordances). For a glyph not in `ICON_PATHS`, load Material Symbols — outlined for editorial lists, filled for chrome — rather than another icon family.
