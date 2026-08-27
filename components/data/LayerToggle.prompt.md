The control for one row of a map or data layer panel — switch, label, optional info tooltip, and a legend that only shows while the layer is on.

```jsx
<LayerToggle
  label="Ferry facilities"
  on={on}
  onToggle={() => setOn(!on)}
  info="Verified in the field between January and June 2026."
  legend={<Legend kind="swatches" items={[{ label: 'Terminal', color: 'var(--color-primary)' }]} />}
/>
```

Opacity + weight (not colour) mark the off state — `label` drops to 55% opacity and regular weight. The info icon is a separate tap target from the toggle, so touch users can read the definition without flipping the layer.
