import React from 'react';
import { Icon } from '../icons/Icon.jsx';

/* Filterable data table. 12px outlined container (no shadow), sticky
   surface-variant header, hairline row dividers, 3% row hover. */
export function DataTable({ columns = [], rows = [], onRowClick, maxHeight = 900, emptyMessage = 'No rows match the current filters.', style, ...rest }) {
  const [filters, setFilters] = React.useState({});
  const [open, setOpen] = React.useState({});

  const visible = rows.filter((row) =>
    columns.every((c) => {
      const q = (filters[c.key] || '').toLowerCase();
      if (!q) return true;
      return String(row[c.key] ?? '').toLowerCase().includes(q);
    })
  );

  return (
    <div style={{
      borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-outline-variant)',
      overflow: 'hidden', ...style,
    }} {...rest}>
      <div style={{ overflowY: 'auto', maxHeight }}>
        <table style={{
          width: '100%', borderCollapse: 'collapse',
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-label-lg)',
        }}>
          <thead style={{
            position: 'sticky', top: 0, zIndex: 10,
            background: 'var(--color-surface-variant)',
            borderBottom: '1px solid var(--color-outline-variant)',
          }}>
            <tr>
              {columns.map((c) => (
                <FilterHeader
                  key={c.key}
                  label={c.label}
                  value={filters[c.key] || ''}
                  open={Boolean(open[c.key])}
                  onToggle={() => setOpen(p => ({ ...p, [c.key]: !p[c.key] }))}
                  onChange={(v) => setFilters(p => ({ ...p, [c.key]: v }))}
                  filterable={c.filterable !== false}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            {visible.map((row, i) => (
              <Row key={row.id ?? i} row={row} columns={columns} onRowClick={onRowClick} />
            ))}
            {visible.length === 0 ? (
              <tr>
                <td colSpan={columns.length} style={{
                  padding: '24px 16px', textAlign: 'center',
                  color: 'var(--color-on-surface-variant)', opacity: 0.6,
                  background: 'var(--color-surface)',
                }}>{emptyMessage}</td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Row({ row, columns, onRowClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <tr
      onClick={onRowClick ? () => onRowClick(row) : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover && onRowClick ? 'var(--state-hover-row)' : 'var(--color-surface)',
        borderTop: '1px solid color-mix(in srgb, var(--color-outline-variant) 60%, transparent)',
        cursor: onRowClick ? 'pointer' : 'default',
        transition: 'background-color var(--duration-base)',
      }}
    >
      {columns.map((c) => (
        <td key={c.key} style={{
          padding: '12px 16px', verticalAlign: 'top',
          color: c.emphasis ? 'var(--color-on-surface)' : 'var(--color-on-surface-variant)',
          fontWeight: c.emphasis ? 'var(--font-weight-medium)' : 'var(--font-weight-regular)',
          whiteSpace: c.nowrap ? 'nowrap' : 'normal',
        }}>
          {c.render ? c.render(row) : (row[c.key] ?? '—')}
        </td>
      ))}
    </tr>
  );
}

/* Column header: 12px uppercase overline + funnel toggle revealing a
   bottom-border-only filter field. */
export function FilterHeader({ label, value, open, onToggle, onChange, filterable = true }) {
  const [hover, setHover] = React.useState(false);
  return (
    <th style={{ textAlign: 'left', padding: '12px 16px', whiteSpace: 'nowrap' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{
          fontSize: 'var(--text-overline)', fontWeight: 'var(--font-weight-medium)',
          textTransform: 'uppercase', letterSpacing: 'var(--tracking-overline)',
          color: 'var(--color-on-surface-variant)',
        }}>{label}</span>
        {filterable ? (
          <button
            onClick={onToggle}
            aria-label={`Filter by ${label}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              display: 'flex', padding: 2, borderRadius: 'var(--radius-sm)', border: 'none',
              background: hover ? 'color-mix(in srgb, var(--color-on-surface) 10%, transparent)' : 'transparent',
              cursor: 'pointer', color: value ? 'var(--color-primary)' : 'color-mix(in srgb, var(--color-on-surface-variant) 50%, transparent)',
              transition: 'background-color var(--duration-base)',
            }}
          ><Icon name="filter" size={14} /></button>
        ) : null}
      </div>
      {open ? (
        <input
          autoFocus
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Filter…"
          style={{
            marginTop: 6, width: '100%', background: 'transparent',
            border: 'none', borderBottom: '1px solid var(--color-outline-variant)',
            paddingBottom: 2, outline: 'none',
            fontFamily: 'var(--font-sans)', fontSize: 'var(--text-label-lg)',
            color: 'var(--color-on-surface)',
          }}
          onFocus={(e) => { e.target.style.borderBottomColor = 'var(--color-primary)'; }}
          onBlur={(e) => { e.target.style.borderBottomColor = 'var(--color-outline-variant)'; }}
        />
      ) : null}
    </th>
  );
}
