The read-only spec sheet — a record page's field groups, or a map click's popup rows. Compose several under one page as a grid of cards, or stack alone in a popup.

```jsx
<DetailList heading="Facility" rows={[
  { label: 'Type', value: 'Ferry Terminal' },
  { label: 'Condition', value: 'Developed' },
]} />
```

Missing values render as an em dash, never a blank row — always pass through a formatter (number/list/date) before handing a value here.
