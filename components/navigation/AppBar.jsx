import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/* MD3 top app bar — sticky, 64px, filled with the theme's appbar colour,
   elevation-2. Nav items take the system radius with an 8% state layer. */
export function AppBar({ title = 'Lagos Ferry Map', href = '/', links = [], activeHref, style, ...rest }) {
  const [open, setOpen] = React.useState(false);
  return (
    <header
      style={{
        position: 'sticky', top: 0, zIndex: 5000,
        background: 'var(--color-nav)', boxShadow: 'var(--shadow-elevation-2)',
        ...style,
      }}
      {...rest}
    >
      <nav style={{
        height: 'var(--appbar-height)', padding: '0 16px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href={href} style={{
          color: 'var(--color-on-nav)', textDecoration: 'none',
          fontFamily: 'var(--font-sans)', fontWeight: 'var(--font-weight-bold)',
          fontSize: 'var(--text-title-lg)', lineHeight: 'var(--leading-title-lg)',
          letterSpacing: 'var(--tracking-tight)',
        }}>{title}</a>

        <ul style={{ display: 'flex', gap: 4, listStyle: 'none', margin: 0, padding: 0 }}>
          {links.map((l) => <NavPill key={l.href} {...l} active={l.href === activeHref} />)}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          style={{
            display: 'none', width: 40, height: 40, borderRadius: 'var(--radius-full)',
            border: 'none', background: 'transparent', cursor: 'pointer',
            flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5,
            color: 'var(--color-on-nav)',
          }}
        >
          {[0, 1, 2].map(i => <span key={i} style={{ display: 'block', width: 20, height: 1.5, background: 'currentColor' }} />)}
        </button>
      </nav>
    </header>
  );
}

function NavPill({ label, href, active }) {
  const [hover, setHover] = React.useState(false);
  return (
    <li>
      <a
        href={href}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: 'block', padding: '8px 16px', borderRadius: 'var(--shape-control)',
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-label-lg)',
          fontWeight: 'var(--font-weight-bold)', letterSpacing: 'var(--tracking-label)',
          textDecoration: 'none',
          color: hover || active ? 'var(--color-primary)' : 'var(--color-on-nav)',
          background: hover ? 'var(--state-hover-primary)' : 'transparent',
          transition: 'color var(--duration-base), background-color var(--duration-base)',
        }}
      >{label}</a>
    </li>
  );
}

export { Icon };
