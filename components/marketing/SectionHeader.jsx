import React from 'react';

/* Centred section opener: 48px bold heading, optional 20px lede at 70%
   ink, constrained to a 48rem measure. 64px of space below. */
export function SectionHeader({ title, lede, align = 'center', style, ...rest }) {
  return (
    <div style={{
      textAlign: align, marginBottom: 64,
      animation: 'var(--animate-fade-in)', ...style,
    }} {...rest}>
      <h2 style={{
        margin: '0 0 16px', fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-hero)', fontWeight: 'var(--font-weight-bold)',
        lineHeight: 'var(--leading-hero)', color: 'var(--color-on-surface)',
        textWrap: 'balance',
      }}>{title}</h2>
      {lede ? (
        <p style={{
          margin: align === 'center' ? '0 auto' : 0,
          maxWidth: 'var(--container-lede)',
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-lede)',
          lineHeight: 'var(--leading-lede)',
          color: 'color-mix(in srgb, var(--color-on-surface) 70%, transparent)',
          textWrap: 'pretty',
        }}>{lede}</p>
      ) : null}
    </div>
  );
}
