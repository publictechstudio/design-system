The key for a data layer, shaped to match how that layer is actually styled — never a generic dot-and-label list for every case.

```jsx
<Legend kind="swatches" items={[{ label: 'Terminal', color: 'var(--color-primary)' }]} />
<Legend kind="lines" items={[{ label: 'Operational', color: 'var(--color-primary)' }]} />
<Legend kind="ramp" gradient="linear-gradient(to right, #EFF6FF, var(--color-primary))" low="0%" high="80%" />
<Legend kind="note" note="Raster tile overlay — swap in imagery, bathymetry or any XYZ service." />
```

Pick the `kind` from the layer's own paint: categorical colour → `swatches`, styled lines → `lines`, a numeric scale → `ramp`, anything else → a one-line `note`. Never invent a legend the layer's data doesn't support.
