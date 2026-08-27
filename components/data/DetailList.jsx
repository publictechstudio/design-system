import React from 'react';

/* A heading + a list of label/value rows, hairline-divided — a record
   page's spec sheet, or a map selection's popup fields. */
export function DetailList({ heading, rows = [], style, ...rest }) {
  return (
    <div style={style} {...rest}>
      {heading ? (
        <h3 style={{
          margin: '0 0 12px', fontSize: 'var(--text-overline)', fontWeight: 'var(--font-weight-medium)',
          letterSpacing: 'var(--tracking-overline)', textTransform: 'uppercase',
          color: 'var(--color-on-surface-variant)',
        }}>{heading}</h3>
      ) : null}
      {rows.map((r) => (
        <div key={r.label} style={{ padding: '8px 0', borderTop: '1px solid var(--color-hairline)' }}>
          <div style={{ fontSize: 'var(--text-body-sm)', color: 'var(--color-on-surface-variant)' }}>{r.label}</div>
          <div style={{ fontSize: 'var(--text-body-md)', fontWeight: 'var(--font-weight-bold)', marginTop: 2 }}>{r.value ?? '—'}</div>
        </div>
      ))}
    </div>
  );
}
