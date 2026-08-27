Long-form editorial disclosure — the About page is built entirely from it.

```jsx
<Accordion items={[
  { title: 'Limitations', icon: <MaterialOutlined name="warning_amber" />, children: <p>…</p> },
  { title: 'Context and Motivation', icon: <MaterialOutlined name="lightbulb" />, children: <p>…</p> },
]} />
```

Icons here are **outlined**, unlike chrome icons. Put "Limitations" first if the content has any — leading with what the data cannot do is a house convention, not a disclaimer. Only one row is open at a time.
