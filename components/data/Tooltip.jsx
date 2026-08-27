import React from 'react';

/* Solid dark tooltip, 8px radius, 12px light text. Opacity crossfade only.
   trigger="hover" (default) shows on mouseenter/leave — for an icon next to
   text. trigger="click" toggles on click and closes on a second click or
   blur — for a tap target on touch, e.g. a layer's info glyph. */
export function Tooltip({ label, placement = 'top', trigger = 'hover', children, style, ...rest }) {
  const [show, setShow] = React.useState(false);
  const pos = placement === 'top'
    ? { bottom: '100%', right: 0, marginBottom: 6 }
    : { top: '100%', right: 0, marginTop: 6 };

  const hoverProps = trigger === 'hover'
    ? { onMouseEnter: () => setShow(true), onMouseLeave: () => setShow(false) }
    : { onClick: () => setShow((s) => !s), onBlur: () => setShow(false) };

  return (
    <span
      style={{ position: 'relative', display: 'inline-flex', flexShrink: 0, ...style }}
      {...hoverProps}
      {...rest}
    >
      {children}
      <span style={{
        position: 'absolute', ...pos, zIndex: 20,
        pointerEvents: 'none', width: 'max-content', maxWidth: 220,
        borderRadius: 'var(--radius-container)', padding: '6px 12px',
        background: 'var(--color-on-surface)', color: 'var(--color-surface)',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-sm)',
        lineHeight: 1.375, textAlign: 'center',
        opacity: show ? 1 : 0, transition: 'opacity var(--duration-base)',
        pointerEvents: trigger === 'click' && show ? 'auto' : 'none',
      }}>{label}</span>
    </span>
  );
}
