import React from 'react';

/* Inline stat summary — bold count, muted noun, interpunct separators.
   Counts link to the section they describe. */
export function StatRow({ stats = [], style, ...rest }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 8,
      fontFamily: 'var(--font-sans)', fontSize: 'var(--text-label-lg)',
      color: 'var(--color-on-surface-variant)', ...style,
    }} {...rest}>
      {stats.map((s, i) => (
        <React.Fragment key={s.label}>
          {i > 0 ? <span style={{ margin: '0 4px', color: 'var(--color-outline-variant)' }}>·</span> : null}
          <Stat {...s} />
        </React.Fragment>
      ))}
    </div>
  );
}

function Stat({ value, label, href }) {
  const [hover, setHover] = React.useState(false);
  const inner = (
    <>
      <span style={{ fontWeight: 'var(--font-weight-medium)', color: 'var(--color-on-surface)' }}>{value}</span>
      <span>{label}</span>
    </>
  );
  if (!href) return <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>{inner}</span>;
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none',
        color: hover ? 'var(--color-primary)' : 'inherit',
        transition: 'color var(--duration-base)',
      }}
    >{inner}</a>
  );
}
