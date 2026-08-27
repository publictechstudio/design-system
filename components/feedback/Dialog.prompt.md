A centred modal for a single ask — the product uses exactly one, the delayed feedback prompt.

```jsx
<Dialog
  title="Did you find what you were looking for?"
  description="Your feedback helps us improve the Lagos Ferry Map."
  onDismiss={dismiss}
>
  <Button href={REPORT_FORM_URL} fullWidth>Share Feedback</Button>
</Dialog>
```

Scrim is flat 40% black, never blurred. The dismiss is always plain text, never a second button — declining should cost nothing. Persist dismissal so it does not reappear in the session.
