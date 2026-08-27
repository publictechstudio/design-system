import React from 'react';
import { Icon } from '../icons/Icon.jsx';
import { Button } from '../core/Button.jsx';

/* One row of a download list — file icon, label + format/size, a Download
   button. Used for open-data file lists and API-adjacent downloads. */
export function DownloadRow({ label, meta, url, style, ...rest }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
      padding: '16px 20px', borderTop: '1px solid var(--color-hairline)', ...style,
    }} {...rest}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
        <Icon name="file" size={18} color="var(--color-on-surface-variant)" style={{ flexShrink: 0 }} />
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 'var(--text-body-md)', fontWeight: 'var(--font-weight-bold)' }}>{label}</div>
          <div style={{ fontSize: 'var(--text-body-sm)', color: 'var(--color-on-surface-variant)', marginTop: 1 }}>{meta}</div>
        </div>
      </div>
      <Button as="a" href={url} variant="outline" size="sm" style={{ flexShrink: 0 }}>Download</Button>
    </div>
  );
}
