import React from 'react';
import { Card } from '../core/Card.jsx';
import { Button } from '../core/Button.jsx';
import { LabelChip } from './LabelChip.jsx';

const ExternalArrow = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

/* A project in the studio's portfolio: cover image, title with the action
   button on the same line, tagline, optional "Read more", then a hairline
   rule and the capability chips. */
export function ProjectCard({
  title, tagline, image, imageAlt, href, comingSoon = false,
  labels = [], onReadMore, style, ...rest
}) {
  return (
    <Card media={image} mediaAlt={imageAlt} style={style} {...rest}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 12 }}>
        <h3 style={{
          margin: 0, fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-card-title)', fontWeight: 'var(--font-weight-semibold)',
          lineHeight: 'var(--leading-card-title)', color: 'var(--color-on-surface)',
          textWrap: 'pretty',
        }}>{title}</h3>

        {comingSoon ? (
          <Button size="md" disabled style={{ flexShrink: 0 }}>Coming soon</Button>
        ) : href ? (
          <Button
            href={href} target="_blank" rel="noopener noreferrer"
            size="md" trailingIcon={ExternalArrow} style={{ flexShrink: 0 }}
          >View Product</Button>
        ) : null}
      </div>

      <div style={{ flex: 1 }}>
        <p style={{
          margin: '0 0 12px', fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-card-body)', lineHeight: 'var(--leading-card-body)',
          color: 'color-mix(in srgb, var(--color-on-surface) 70%, transparent)',
          textWrap: 'pretty',
        }}>{tagline}</p>

        {onReadMore ? (
          <Button variant="text" size="md" onClick={onReadMore}>Read more</Button>
        ) : null}
      </div>

      {labels.length ? (
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 8,
          marginTop: 20, paddingTop: 16,
          borderTop: '1px solid var(--color-hairline)',
        }}>
          {labels.map((l) => <LabelChip key={l.text} tone={l.color}>{l.text}</LabelChip>)}
        </div>
      ) : null}
    </Card>
  );
}
