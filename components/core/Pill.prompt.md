A neutral chip for content tags — wrap each destination or category in its own pill inside a wrapping flex row with 4px gap.

```jsx
<div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
  {destinations.map(d => <Pill key={d}>{d}</Pill>)}
</div>
```

Surface-variant fill, 12px regular text, no border. Use `Badge` instead when the label is a status.
