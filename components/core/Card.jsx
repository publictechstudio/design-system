import React from 'react';

/* The house card. Studio theme: near-square, shadow-md, and a 2px lift to
   shadow-lg over 300ms ease-out — that lift IS the brand's card. Under the
   ferry theme the tokens make it a 16px MD3 card with no transform. */
export function Card({
  as, href, media, mediaAlt, children, padding = 24,
  lift = true, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as || (href ? 'a' : 'div');
  const on = lift && hover;

  return (
    <Tag
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column', overflow: 'hidden',
        textDecoration: 'none', color: 'inherit',
        background: 'var(--color-surface-raised)',
        borderRadius: 'var(--shape-container)',
        boxShadow: on ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
        transform: on ? 'var(--card-lift-transform)' : 'none',
        transition: 'box-shadow var(--duration-card) var(--ease-out), transform var(--duration-card) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      {media ? (
        <img
          src={media}
          alt={mediaAlt || ''}
          loading="lazy"
          decoding="async"
          style={{ width: '100%', height: 'var(--card-image-height)', objectFit: 'cover', display: 'block' }}
        />
      ) : null}
      <div style={{ padding, display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
        {children}
      </div>
    </Tag>
  );
}
