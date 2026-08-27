The button — one component for both surfaces; the theme decides whether it is a tight rectangle or a pill.

```jsx
<Button href="mailto:hello@publictech.studio" icon={<Mail size={16} />}>
  hello@publictech.studio
</Button>
<Button variant="inverse">View Open Data</Button>
<Button disabled>Coming soon</Button>
```

Labels are verb-first and specific — "View Product", "View Prior Projects", "Share Feedback" — never "Learn more". `disabled` is how the studio marks unreleased work, so keep the label as "Coming soon" rather than hiding the button. There is no press state by design.
