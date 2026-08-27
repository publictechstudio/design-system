import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/* Detail panel — desktop: half width with a single 1px left edge.
   Mobile: two-thirds-height slide-up sheet with a pill drag handle.
   No shadow; the outline is the whole separation. */
export function Panel({ typeIcon, typeLabel, onClose, action, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', overflow: 'hidden', flexShrink: 0,
      background: 'var(--color-surface)',
      borderLeft: '1px solid var(--color-outline-variant)',
      fontFamily: 'var(--font-sans)', ...style,
    }} {...rest}>
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 10, paddingBottom: 4, flexShrink: 0 }}>
        <div style={{
          width: 32, height: 4, borderRadius: 'var(--radius-full)',
          background: 'color-mix(in srgb, var(--color-on-surface-variant) 30%, transparent)',
        }} />
      </div>

      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '16px 16px 4px', flexShrink: 0,
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 6,
          color: 'var(--color-on-surface-variant)', fontSize: 'var(--text-label-lg)',
        }}>
          {typeIcon}
          <span>{typeLabel}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {action}
          <button
            onClick={onClose}
            aria-label="Close"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: 'var(--radius-full)', border: 'none', cursor: 'pointer',
              background: hover ? 'var(--state-hover-on-surface)' : 'transparent',
              color: 'var(--color-on-surface-variant)',
              transition: 'background-color var(--duration-base)',
            }}
          ><Icon name="close" size={18} /></button>
        </div>
      </div>

      <div style={{ overflowY: 'auto', flex: 1, minHeight: 0 }}>{children}</div>
    </div>
  );
}
