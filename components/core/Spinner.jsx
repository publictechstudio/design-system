import React from 'react';

/* 2px blue ring with a transparent top edge — the only loading indicator. */
export function Spinner({ size = 16, message, style, ...rest }) {
  return (
    <div
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-md)',
        color: 'var(--color-on-surface-variant)', ...style,
      }}
      role="status"
      {...rest}
    >
      <span style={{
        width: size, height: size, flexShrink: 0, borderRadius: '50%',
        border: '2px solid var(--color-primary)', borderTopColor: 'transparent',
        animation: 'var(--animate-spin)',
      }} />
      {message}
    </div>
  );
}
