import React from 'react';

/* Project category chip: fully round, uppercase, 12px semibold, wide
   tracking, on a pale tint of its hue. Six categories only. */
const TONES = {
  blue:   ['var(--label-blue-bg)', 'var(--label-blue-fg)'],
  green:  ['var(--label-green-bg)', 'var(--label-green-fg)'],
  purple: ['var(--label-purple-bg)', 'var(--label-purple-fg)'],
  orange: ['var(--label-orange-bg)', 'var(--label-orange-fg)'],
  teal:   ['var(--label-teal-bg)', 'var(--label-teal-fg)'],
  rose:   ['var(--label-rose-bg)', 'var(--label-rose-fg)'],
};

export function LabelChip({ tone = 'blue', children, style, ...rest }) {
  const [bg, fg] = TONES[tone] || TONES.blue;
  return (
    <span
      style={{
        display: 'inline-block', padding: '4px 12px',
        borderRadius: 'var(--radius-chip)',
        background: bg, color: fg,
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-overline)',
        fontWeight: 'var(--font-weight-semibold)', textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-overline)', whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
