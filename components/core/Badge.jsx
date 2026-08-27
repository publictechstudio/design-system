import React from 'react';

/* Status badge — 15% tint of the status hue behind bold 12px text.
   Used only for encoded facility state, never decoration. */
const TONES = {
  charter: 'var(--color-status-charter)',
  planned: 'var(--color-status-planned)',
  degraded: 'var(--color-status-degraded)',
  neutral: 'var(--color-on-surface-variant)',
};

export function Badge({ tone = 'charter', children, style, ...rest }) {
  const hue = TONES[tone];
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center',
        padding: '2px 8px', borderRadius: 'var(--radius-full)',
        background: `color-mix(in srgb, ${hue} 15%, transparent)`,
        color: hue,
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-sm)',
        fontWeight: 'var(--font-weight-bold)', lineHeight: 'var(--leading-body-sm)',
        whiteSpace: 'nowrap', ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
