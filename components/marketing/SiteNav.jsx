import React from 'react';
import { BrandRule } from './BrandRule.jsx';

/* The studio's site nav: white, sticky, 64px, logo left, bold 14px links
   right, a filled Subscribe button, and the brand rule as its bottom edge. */
export function SiteNav({
  logo, logoAlt = 'Public Tech Studio', href = '/',
  links = [], action, scrollTarget, style, ...rest
}) {
  return (
    <nav
      style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'var(--color-nav)', boxShadow: 'var(--shadow-sm)',
        ...style,
      }}
      {...rest}
    >
      <div style={{
        maxWidth: 'var(--container-marketing)', margin: '0 auto',
        padding: '0 var(--gutter-lg)', height: 'var(--nav-height)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href={href} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          {logo ? (
            <img src={logo} alt={logoAlt} style={{ height: 'var(--logo-height-nav)', width: 'auto' }} />
          ) : (
            <span style={{
              fontFamily: 'var(--font-sans)', fontWeight: 'var(--font-weight-bold)',
              fontSize: 'var(--text-title-sm)', color: 'var(--color-on-nav)',
            }}>{logoAlt}</span>
          )}
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {links.map((l) => <NavLink key={l.href} {...l} />)}
          {action}
        </div>
      </div>

      <BrandRule scrollTarget={scrollTarget} />
    </nav>
  );
}

function NavLink({ label, href, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: '8px 12px', textDecoration: 'none',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-label-lg)',
        fontWeight: 'var(--font-weight-bold)',
        color: hover ? 'var(--color-primary)' : 'var(--color-on-nav)',
        transition: 'color var(--duration-base)',
      }}
    >{label}</a>
  );
}
