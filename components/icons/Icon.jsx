import React from 'react';

/* Lucide is the system's ONLY icon family: stroke-based, 2px weight,
   currentColor, 24px unless sized down. The Material glyphs the ferry
   codebase inlined (filled chrome + outlined editorial) are retired —
   each one maps to its closest Lucide equivalent below. */
export const ICON_PATHS = {
  info: ['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z', 'M12 16v-4', 'M12 8h.01'],
  map: ['M9 3 3.4 4.9v15.6L9 18.6l6 2.4 5.6-1.9V3.5L15 5.4 9 3Z', 'M9 3v15.6', 'M15 5.4V21'],
  /* lucide "route" — replaces Material directions */
  directions: ['M6 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', 'M18 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', 'M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15'],
  /* lucide "triangle-alert" — serves both chrome and editorial warnings */
  warning: ['M12 9v4', 'M12 17h.01', 'M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z'],
  close: ['M18 6 6 18', 'M6 6l12 12'],
  chevron: ['M6 9l6 6 6-6'],
  /* lucide "funnel" */
  filter: ['M22 3H2l8 9.46V19l4 2v-8.54L22 3Z'],
  /* lucide "locate-fixed" */
  myLocation: ['M2 12h3', 'M19 12h3', 'M12 2v3', 'M12 19v3', 'M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z', 'M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z'],
  lightbulb: ['M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5a6 6 0 0 0-12 0c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5', 'M9 18h6', 'M10 22h4'],
  /* lucide "ship" — replaces DirectionsBoatOutlined */
  boat: ['M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 1.3 0 1.9-.5 2.5-1', 'M19.4 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.9 5.3 2.8 7.8', 'M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6', 'M12 10V4', 'M8 4h8'],
  /* lucide "search" */
  search: ['M11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z', 'm21 21-4.3-4.3'],
  /* lucide "arrow-left" */
  arrowLeft: ['m12 19-7-7 7-7', 'M19 12H5'],
  /* lucide "file" */
  file: ['M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z', 'M14 2v4a2 2 0 0 0 2 2h4'],
  /* lucide "pencil" */
  pencil: ['M12 20h9', 'M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z'],
  /* lucide "shield-check" — replaces SecurityOutlined */
  security: ['M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.7 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.5 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1Z', 'M9 12l2 2 4-4'],
};

export function Icon({ name, size = 24, color = 'currentColor', className, style, decorative = true, title }) {
  const paths = ICON_PATHS[name];
  if (!paths) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ display: 'block', flexShrink: 0, ...style }}
      aria-hidden={decorative ? true : undefined}
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : title}
    >
      {!decorative && title ? <title>{title}</title> : null}
      {paths.map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}
