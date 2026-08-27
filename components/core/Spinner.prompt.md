The one loading indicator — a 2px primary-blue ring with a transparent top edge.

```jsx
<Spinner message="Loading map…" />
<Spinner size={14} />
```

Always pair with a message when the wait is visible to the user; a bare ring is only for icon-button slots. Never use skeletons or progress bars — they do not exist in this system.
