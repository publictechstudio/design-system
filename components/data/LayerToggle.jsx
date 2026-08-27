import React from 'react';
import { Icon } from '../icons/Icon.jsx';
import { Tooltip } from './Tooltip.jsx';

/* A labelled switch for one map/data layer, with an optional info tooltip
   and a legend slot revealed while it's on. Built for the map app template's
   layer panel, but generic to any on/off data layer control. */
export function LayerToggle({ label, on, onToggle, info, legend, style, ...rest }) {
  return (
    <div style={style} {...rest}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <button
          onClick={onToggle}
          style={{
            display: 'flex', alignItems: 'center', gap: 10, flex: '1 1 auto', minWidth: 0,
            textAlign: 'left', border: 'none', background: 'transparent', cursor: 'pointer',
            fontFamily: 'var(--font-sans)', padding: '4px 0',
          }}
        >
          <Switch on={on} />
          <span style={{
            fontSize: 'var(--text-body-md)', color: 'var(--color-on-surface)',
            opacity: on ? 1 : 0.55, fontWeight: on ? 'var(--font-weight-bold)' : 'var(--font-weight-regular)',
          }}>{label}</span>
        </button>
        {info ? (
          <Tooltip trigger="click" label={info} placement="bottom" style={{ flexShrink: 0 }}>
            <button
              aria-label="About this layer"
              style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 2, lineHeight: 0, color: 'var(--color-on-surface-variant)' }}
            ><Icon name="info" size={15} /></button>
          </Tooltip>
        ) : null}
      </div>
      {on && legend ? <div style={{ margin: '8px 0 0 42px' }}>{legend}</div> : null}
    </div>
  );
}

function Switch({ on }) {
  return (
    <span style={{
      flexShrink: 0, width: 32, height: 18, borderRadius: 'var(--radius-full)',
      display: 'flex', alignItems: 'center', padding: 2, boxSizing: 'border-box',
      background: on ? 'var(--color-primary)' : 'var(--color-outline-variant)',
      transition: 'background-color var(--duration-base)',
    }}>
      <span style={{
        width: 14, height: 14, borderRadius: 'var(--radius-full)', background: '#fff',
        transform: `translateX(${on ? 14 : 0}px)`, transition: 'transform var(--duration-base)',
      }} />
    </span>
  );
}
