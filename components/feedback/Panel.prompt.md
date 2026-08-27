The shell for any map detail record — it carries the drag handle, type label, report action and close button so screens only supply content.

```jsx
<Panel
  typeLabel="Ferry facility"
  typeIcon={<Icon name="map" size={16} />}
  onClose={close}
  action={<Button size="sm" icon={<Icon name="warning" size={15} />}>Report a data issue</Button>}
>
  {facilityDetails}
</Panel>
```

Separation is a 1px outline, never a shadow. Every panel exposes "Report a data issue" pre-filled with the record slug — correction is a first-class action in this product, not buried in a footer.
