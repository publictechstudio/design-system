import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/* Legend for a data layer: colour swatches, line-style keys, or a
   continuous gradient ramp — matched to how the layer itself is styled. */
export function Legend({ kind = 'swatches', items = [], gradient, low, high, note, style, ...rest }) {
  const text = { fontSize: 'var(--text-body-sm)', color: 'var(--color-on-surface-variant)' };

  if (kind === 'note') {
    return <p style={{ margin: 0, lineHeight: 1.5, ...text, ...style }} {...rest}>{note}</p>;
  }

  if (kind === 'ramp') {
    return (
      <div style={style} {...rest}>
        <div style={{ height: 8, borderRadius: 'var(--radius-sm)', background: gradient }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 3, fontSize: 'var(--text-overline)', ...text }}>
          <span>{low}</span><span>{high}</span>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5, ...style }} {...rest}>
      {items.map((it) => (
        <div key={it.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {kind === 'lines'
            ? <span style={{ width: 16, height: 3, flexShrink: 0, borderRadius: 2, background: it.color }} />
            : <span style={{ width: 12, height: 12, flexShrink: 0, borderRadius: 'var(--radius-full)', background: it.color }} />}
          <span style={text}>{it.label}</span>
        </div>
      ))}
    </div>
  );
}
