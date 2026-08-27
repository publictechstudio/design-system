import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/* Editorial accordion — outline icon, 20px title, hairline divider,
   chevron rotating 180° over 200ms. Used for long-form About content. */
export function Accordion({ items = [], defaultOpen = -1, style, ...rest }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div style={style} {...rest}>
      {items.map((item, i) => (
        <Row
          key={item.title}
          {...item}
          open={open === i}
          onToggle={() => setOpen(open === i ? -1 : i)}
          last={i === items.length - 1}
        />
      ))}
    </div>
  );
}

function Row({ title, icon, children, open, onToggle, last }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div style={{ borderBottom: last ? 'none' : '1px solid var(--color-outline-variant)' }}>
      <button
        onClick={onToggle}
        aria-expanded={open}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 16, padding: '20px 0', border: 'none', background: 'transparent',
          textAlign: 'left', cursor: 'pointer', fontFamily: 'var(--font-sans)',
          color: hover ? 'var(--color-primary)' : 'var(--color-on-surface)',
          transition: 'color var(--duration-base)',
        }}
      >
        <span style={{
          display: 'flex', alignItems: 'center', gap: 12,
          fontSize: 'var(--text-title-md)', fontWeight: 'var(--font-weight-regular)',
          lineHeight: 'var(--leading-title-md)',
        }}>
          {icon ? <span style={{ color: 'var(--color-primary)', display: 'flex' }}>{icon}</span> : null}
          {title}
        </span>
        <Icon name="chevron" size={24} style={{
          transform: open ? 'rotate(180deg)' : 'none',
          transition: 'transform var(--duration-base)',
        }} />
      </button>

      {open ? (
        <div style={{
          paddingBottom: 24, display: 'flex', flexDirection: 'column', gap: 16,
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-lg)',
          lineHeight: 'var(--leading-body-lg)', color: 'var(--color-on-surface-variant)',
          textWrap: 'pretty',
        }}>{children}</div>
      ) : null}
    </div>
  );
}
