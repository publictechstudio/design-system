import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/* Icon-prefixed search field — the layer panel's facility search, or any
   type-to-filter list. Focus ring is the system's primary colour border. */
export function SearchField({ value, onChange, placeholder = 'Search…', style, ...rest }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', ...style }}>
      <span style={{ position: 'absolute', left: 11, display: 'flex', pointerEvents: 'none', color: 'var(--color-on-surface-variant)' }}>
        <Icon name="search" size={16} />
      </span>
      <input
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        style={{
          width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-body-md)', padding: '9px 12px 9px 34px',
          borderRadius: 'var(--shape-control)',
          border: `1px solid ${focused ? 'var(--color-primary)' : 'var(--color-outline-variant)'}`,
          background: 'var(--color-surface)', color: 'var(--color-on-surface)', outline: 'none',
          transition: 'border-color var(--duration-base)',
        }}
        {...rest}
      />
    </div>
  );
}
