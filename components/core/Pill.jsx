import React from 'react';

/* Neutral chip — destination tags, categories. No state, no interaction. */
export function Pill({ children, style, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center',
        padding: '2px 8px', borderRadius: 'var(--radius-full)',
        background: 'var(--color-surface-variant)',
        color: 'var(--color-on-surface-variant)',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-sm)',
        lineHeight: 'var(--leading-body-sm)', whiteSpace: 'nowrap', ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
