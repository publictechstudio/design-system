import React from 'react';

/* Dark footer: a full-width black studio-credit strip above an ink panel
   with the product blurb, a two-column link grid, and a hairline copyright. */
export function Footer({
  product = 'Lagos Ferry Map',
  blurb = 'The first comprehensive map of all ferry services in Lagos, Nigeria.',
  links = [],
  creditHref = 'https://publictech.studio',
  creditLabel = 'Want to build something great?',
  copyright = '© 2026 Public Tech Studio',
  style, ...rest
}) {
  return (
    <footer
      style={{
        background: 'var(--color-footer)',
        color: 'var(--color-on-footer-variant, color-mix(in srgb, var(--color-on-footer) 80%, transparent))',
        fontFamily: 'var(--font-sans)', ...style,
      }}
      {...rest}
    >
      <div style={{
        textAlign: 'center', padding: '16px', marginBottom: 32,
        background: 'var(--color-footer-deep, #000)', fontSize: 'var(--text-label-lg)',
      }}>
        A project from Public Tech Studio.{' '}
        <a href={creditHref} target="_blank" rel="noopener noreferrer" style={{
          color: 'var(--color-on-footer)', textDecoration: 'underline', textUnderlineOffset: 2,
        }}>{creditLabel}</a>
      </div>

      <div style={{
        maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '16px 20px',
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 32,
      }}>
        <div>
          <p style={{
            margin: '0 0 8px', color: 'var(--color-on-footer)',
            fontWeight: 'var(--font-weight-medium)', fontSize: 'var(--text-body-lg)',
          }}>{product}</p>
          <p style={{
            margin: 0, maxWidth: 512, fontSize: 'var(--text-label-lg)', lineHeight: 1.625,
            color: 'var(--color-on-footer-muted, color-mix(in srgb, var(--color-on-footer) 60%, transparent))',
          }}>{blurb}</p>
        </div>

        <nav aria-label="Footer navigation">
          <ul style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: 16,
            listStyle: 'none', margin: 0, padding: 0,
          }}>
            {links.map((l) => <FooterLink key={l.href} {...l} />)}
          </ul>
        </nav>
      </div>

      <div style={{
        maxWidth: 'var(--container-wide)', margin: '32px auto', padding: '24px 20px 0',
        borderTop: '1px solid var(--color-footer-hairline, color-mix(in srgb, var(--color-on-footer) 20%, transparent))',
        fontSize: 'var(--text-label-lg)', color: 'var(--color-on-footer-muted, color-mix(in srgb, var(--color-on-footer) 60%, transparent))',
      }}>{copyright}</div>
    </footer>
  );
}

function FooterLink({ label, href, external }) {
  const [hover, setHover] = React.useState(false);
  return (
    <li>
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: 'block', padding: '4px 0', borderRadius: 'var(--shape-control)',
          fontSize: 'var(--text-label-lg)', fontWeight: 'var(--font-weight-medium)',
          letterSpacing: 'var(--tracking-label)', textDecoration: 'none',
          color: hover ? 'var(--color-on-footer)' : 'color-mix(in srgb, var(--color-on-footer) 80%, transparent)',
          background: hover ? 'var(--state-hover-white)' : 'transparent',
          transition: 'color var(--duration-base), background-color var(--duration-base)',
        }}
      >{label}</a>
    </li>
  );
}
