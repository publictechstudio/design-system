import React from 'react';

/* Full-colour feature panel: a flat blue field with a photograph at 30%
   beneath an 80% blue veil, 48px padding, white copy, inverse button. */
export function FeatureCard({ title, children, image, action, padding = 48, style, ...rest }) {
  return (
    <div
      style={{
        position: 'relative', overflow: 'hidden',
        background: 'var(--color-surface-feature)',
        borderRadius: 'var(--shape-container)',
        boxShadow: 'var(--shadow-card)', ...style,
      }}
      {...rest}
    >
      {image ? (
        <>
          <img src={image} alt="" loading="lazy" decoding="async" style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', opacity: 0.3,
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'color-mix(in srgb, var(--color-surface-feature) 80%, transparent)',
          }} />
        </>
      ) : null}

      <div style={{
        position: 'relative', padding,
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
        color: 'var(--color-on-surface-feature)', fontFamily: 'var(--font-sans)',
      }}>
        <h3 style={{
          margin: '0 0 24px', fontSize: 'var(--text-card-title)',
          fontWeight: 'var(--font-weight-bold)', lineHeight: 'var(--leading-card-title)',
        }}>{title}</h3>
        <p style={{
          margin: '0 0 24px', fontSize: 'var(--text-card-body)',
          lineHeight: 'var(--leading-card-body)', textWrap: 'pretty',
        }}>{children}</p>
        {action}
      </div>
    </div>
  );
}
