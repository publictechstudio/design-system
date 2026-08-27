import React from 'react';

/* Grid of big stats in hairline-divided cards — a landing hero's numbers,
   distinct from the inline StatRow used in dense headers. */
export function StatGrid({ stats = [], style, ...rest }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 1,
      background: 'var(--color-outline-variant)', border: '1px solid var(--color-outline-variant)',
      borderRadius: 'var(--shape-container)', overflow: 'hidden', ...style,
    }} {...rest}>
      {stats.map((s) => (
        <div key={s.label} style={{ background: 'var(--color-surface-raised)', padding: '24px 24px 22px' }}>
          <div style={{
            fontSize: 'var(--text-display-sm)', lineHeight: 1.1, fontWeight: 'var(--font-weight-bold)',
            letterSpacing: 'var(--tracking-tight)', color: 'var(--color-primary)',
          }}>{s.value}</div>
          <div style={{ marginTop: 8, fontSize: 'var(--text-body-md)', color: 'var(--color-on-surface-variant)' }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}
