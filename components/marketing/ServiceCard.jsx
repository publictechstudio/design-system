import React from 'react';

/* Service tile: a solid blue cap carrying the icon and title, over a white
   description well. Stacks icon-above-title from md up. */
export function ServiceCard({ icon, title, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column', overflow: 'hidden',
        background: 'var(--color-surface-raised)',
        borderRadius: 'var(--shape-container)',
        boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
        transform: hover ? 'var(--card-lift-transform)' : 'none',
        transition: 'box-shadow var(--duration-card) var(--ease-out), transform var(--duration-card) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      <div style={{
        background: 'var(--color-surface-feature)', padding: 24,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', gap: 12, textAlign: 'center',
        color: 'var(--color-on-surface-feature)',
      }}>
        <span style={{ display: 'flex', flexShrink: 0 }}>{icon}</span>
        <h3 style={{
          margin: 0, fontFamily: 'var(--font-sans)', fontSize: 'var(--text-title-sm)',
          fontWeight: 'var(--font-weight-semibold)', lineHeight: 1.4, textWrap: 'balance',
        }}>{title}</h3>
      </div>
      <div style={{ padding: 16, flex: 1 }}>
        <p style={{
          margin: 0, fontFamily: 'var(--font-sans)', fontSize: 'var(--text-label-lg)',
          lineHeight: 1.625,
          color: 'color-mix(in srgb, var(--color-on-surface) 70%, transparent)',
          textWrap: 'pretty',
        }}>{children}</p>
      </div>
    </div>
  );
}
