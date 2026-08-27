A search icon inset into the field rather than a trailing button — the field itself is the target. Border goes primary blue on focus; no shadow.

```jsx
<SearchField value={q} onChange={setQ} placeholder="Search facilities…" />
```

Always wire this to filter a real list live as the user types — never a submit-triggered search on a small in-page dataset.
