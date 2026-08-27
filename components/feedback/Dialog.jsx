import React from 'react';

/* Centred dialog on a 40% black scrim. 16px radius, elevation-3,
   centred copy, stacked actions with a plain-text dismiss. */
export function Dialog({ open = true, title, description, children, onDismiss, dismissLabel = 'No thanks', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--scrim)', ...style,
    }} {...rest}>
      <div style={{
        background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-elevation-3)', padding: 24, margin: 16,
        maxWidth: 384, width: '100%', textAlign: 'center', fontFamily: 'var(--font-sans)',
      }}>
        {title ? <p style={{
          margin: '0 0 8px', fontSize: 'var(--text-title-md)', fontWeight: 600,
          color: 'var(--color-on-surface)',
        }}>{title}</p> : null}
        {description ? <p style={{
          margin: '0 0 20px', fontSize: 'var(--text-label-lg)',
          color: 'var(--color-on-surface-variant)',
        }}>{description}</p> : null}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {children}
          {onDismiss ? (
            <button
              onClick={onDismiss}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{
                border: 'none', background: 'transparent', cursor: 'pointer',
                fontFamily: 'var(--font-sans)', fontSize: 'var(--text-label-lg)',
                color: hover ? 'var(--color-on-surface)' : 'var(--color-on-surface-variant)',
                transition: 'color var(--duration-base)',
              }}
            >{dismissLabel}</button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
