Attaches a prose definition to a 14px info icon inside dense data — the product's way of explaining a term without a legend key.

```jsx
<Tooltip label="Ferry routes tentatively proposed under the Lagos State Government's OMI EKO expansion programme">
  <Icon name="info" size={14} />
</Tooltip>
```

Solid ink background, never translucent, never blurred. Opacity crossfade only — no slide or scale. Write the label as a sentence, not a keyword.

Use `trigger="click"` for a standalone (i) button rather than text-adjacent glyph — e.g. a map layer toggle's info button, which needs to work on touch:

```jsx
<Tooltip trigger="click" label="Verified in the field between January and June 2026.">
  <button aria-label="About this layer"><Icon name="info" size={15} /></button>
</Tooltip>
```
