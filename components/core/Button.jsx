import React from 'react';

/* Theme-aware button. Shape and depth come from tokens, so the same
   component is a near-square studio button (3.2px radius, blue) and a
   navy pill in the ferry theme — no variant flag needed. */
const SIZES = {
  sm: { fontSize: 'var(--text-body-sm)', padding: '6px 12px' },
  md: { fontSize: 'var(--text-label-lg)', padding: '8px 16px' },
  lg: { fontSize: 'var(--text-title-sm)', padding: '10px 20px' },
};

export function Button({
  variant = 'filled', size = 'md', as, href, icon, trailingIcon, children,
  disabled = false, fullWidth = false, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as || (href ? 'a' : 'button');
  const on = hover && !disabled;

  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    fontFamily: 'var(--font-sans)', fontWeight: 'var(--font-weight-bold)',
    letterSpacing: 'var(--tracking-label)',
    borderRadius: 'var(--shape-control)', border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none', width: fullWidth ? '100%' : undefined,
    transition: 'background-color var(--duration-base), color var(--duration-base), box-shadow var(--duration-base)',
    ...SIZES[size],
  };

  const skins = {
    filled: {
      background: disabled ? 'var(--color-action-disabled)' : on ? 'var(--color-action-hover)' : 'var(--color-action)',
      color: 'var(--color-on-action)',
      boxShadow: on ? 'var(--shadow-md)' : 'var(--shadow-sm)',
    },
    /* White on a full-colour feature panel — the "View Open Data" treatment */
    inverse: {
      background: on ? 'color-mix(in srgb, #fff 90%, transparent)' : 'var(--color-surface-raised)',
      color: 'var(--color-surface-feature)',
      borderColor: 'var(--color-surface-raised)',
    },
    outline: {
      background: on ? 'var(--state-hover-primary)' : 'transparent',
      color: 'var(--color-primary)',
      borderColor: 'var(--color-outline-variant)',
    },
    text: {
      background: 'transparent',
      color: on ? 'var(--color-primary-hover)' : 'var(--color-primary)',
      padding: 0,
    },
  };

  return (
    <Tag
      href={disabled ? undefined : href}
      aria-disabled={disabled || undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...skins[variant], ...style }}
      {...rest}
    >
      {icon}
      {children}
      {trailingIcon}
    </Tag>
  );
}
