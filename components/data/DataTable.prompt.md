The directory table — outlined not shadowed, sticky header, one funnel filter per column.

```jsx
<DataTable
  onRowClick={(r) => go(r.href)}
  emptyMessage="No facilities match the current filters."
  columns={[
    { key: 'lga', label: 'LGA', nowrap: true },
    { key: 'name', label: 'Facility Name', emphasis: true },
    { key: 'type', label: 'Facility Type', nowrap: true },
    { key: 'destinations', label: 'Destinations', render: (r) => <Pill>{r.destinations}</Pill> },
  ]}
  rows={facilities}
/>
```

Missing values render as `—` automatically. Empty state is a full sentence. Precede the table with a 12px hint line ("Click on a facility to see full details") — the product always tells you the rows are clickable.
