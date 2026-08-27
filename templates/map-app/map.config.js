/* ─────────────────────────────────────────────────────────────
   map.config.js — THE ONLY FILE YOU EDIT TO MAKE A NEW APP.

   Everything the template renders (copy, layers, styling, record
   fields, downloads) is declared here. No component edits needed
   for a standard dataset swap.

   Validate with:  import { validateConfig } from './config.schema.js'

   COLOUR: layer colours are written as 'var(--token)' by default, so every
   layer inherits the active design-system theme (studio/ferry/dark) with
   no edits. To override one colour, replace its var(...) with a literal
   hex/rgb — that layer then ignores the theme. 'var(--token, #fallback)'
   supplies a fallback for themes that don't define the token.
   ───────────────────────────────────────────────────────────── */

export default {
  /* ── Identity ──────────────────────────────────────────── */
  app: {
    name: 'Lagos Ferry Map',
    shortName: 'Ferry Map',
    tagline: 'Every jetty, terminal and boat landing on the Lagos waterways.',
    description:
      'An open inventory of ferry infrastructure across Lagos State — what exists, ' +
      'what condition it is in, and which routes actually run.',
    theme: 'ferry',          // maps to [data-theme] in tokens/themes.css
    publisher: 'Public Tech Studio',
    updated: '2026-08-01',
  },

  /* ── Map frame ─────────────────────────────────────────── */
  map: {
    center: [3.5, 6.52],     // [lng, lat]
    zoom: 10.2,
    minZoom: 8,
    maxZoom: 17,
    bounds: null,            // optional [[w,s],[e,n]] to lock panning
    basemap: {
      // Any raster XYZ tile source, or a MapLibre style URL via `styleUrl`.
      tiles: ['https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'],
      attribution: '© OpenStreetMap contributors © CARTO',
      tileSize: 256,
    },
  },

  /* ── Layers ────────────────────────────────────────────────
     type: points | lines | polygons | choropleth | heatmap | raster
     source: { url } for remote GeoJSON/API, or { data } for inline.
     Every layer gets a toggle in the layer panel automatically.
     Optional `info` adds an (i) tooltip next to that toggle.
     ───────────────────────────────────────────────────────── */
  layers: [
    {
      id: 'facilities',
      info: 'Every ferry terminal, jetty and boat landing verified in the field between January and June 2026. Condition is rated against the state jetty standard.',
      label: 'Ferry facilities',
      type: 'points',
      group: 'Infrastructure',
      defaultOn: true,
      source: { url: './data/facilities.geojson' },
      cluster: { enabled: true, radius: 44, maxZoom: 13 },
      style: {
        radius: 6,
        strokeWidth: 2,
        strokeColor: 'var(--color-surface-raised)',
        // Data-driven colour: field + value→colour map + fallback.
        // `var(--token)` inherits the live theme; swap in a literal hex to override.
        colorBy: {
          field: 'type',
          values: {
            'Ferry Terminal': 'var(--color-primary)',
            'Jetty': 'var(--color-status-degraded, #2E7D32)',
            'Boat Landing': 'var(--color-status-charter, #7B3F00)',
          },
          fallback: 'var(--color-outline)',
        },
      },
      legend: { kind: 'swatches', from: 'style.colorBy' },
      popup: { title: 'name', subtitle: 'lga', fields: ['type', 'quality'] },
      search: { fields: ['name', 'lga'], placeholder: 'Search facilities…' },
    },
    {
      id: 'routes',
      info: 'Scheduled and informal passenger services. Dashed lines are proposed or on-demand routes with no fixed timetable.',
      label: 'Ferry routes',
      type: 'lines',
      group: 'Infrastructure',
      defaultOn: true,
      source: { url: './data/routes.geojson' },
      style: {
        width: 2.5,
        colorBy: {
          field: 'status',
          values: { operational: 'var(--color-primary)', informal: 'var(--color-status-charter, #7B3F00)', proposed: 'var(--color-status-degraded, #2E7D32)' },
          fallback: 'var(--color-outline)',
        },
        dashBy: { field: 'status', values: { proposed: [2, 2], informal: [4, 2] } },
      },
      legend: { kind: 'lines', from: 'style.colorBy' },
      popup: { title: 'name', fields: ['operator', 'status'] },
    },
    {
      id: 'lgas',
      info: 'Local government area boundaries, for orientation only. Not an administrative source of truth.',
      label: 'LGA boundaries',
      type: 'polygons',
      group: 'Context',
      defaultOn: false,
      source: { url: './data/lgas.geojson' },
      style: { fill: 'var(--color-primary)', fillOpacity: 0.06, strokeColor: 'var(--color-primary)', strokeWidth: 1 },
      legend: { kind: 'swatches', items: [{ label: 'Local government area', color: 'var(--color-primary)' }] },
      popup: { title: 'name' },
    },
    {
      id: 'access',
      info: 'Share of each ward\u2019s population living within 1km walking distance of an operational jetty. Derived from 2024 gridded population estimates.',
      label: 'Population within 1km of a jetty',
      type: 'choropleth',
      group: 'Analysis',
      defaultOn: false,
      source: { url: './data/wards.geojson' },
      style: {
        field: 'pct_served',
        // Sequential ramp: stops are [value, colour] pairs, low → high.
        // No single token models a 5-step ramp, so this is a literal
        // override by design — swap these hexes for your own scale.
        scale: [
          [0, '#EFF6FF'], [20, '#BFDBFE'], [40, '#7EA9F0'],
          [60, '#3B76D8'], [80, 'var(--color-primary)'],
        ],
        strokeColor: 'var(--color-surface-raised)',
        strokeWidth: 0.5,
        opacity: 0.8,
      },
      legend: { kind: 'ramp', from: 'style.scale', unit: '%' },
      popup: { title: 'name', fields: ['pct_served', 'population'] },
    },
    {
      id: 'demand',
      info: 'Modelled commuter trip origins, weighted by daily volume. Indicative only \u2014 not observed boarding counts.',
      label: 'Commuter demand density',
      type: 'heatmap',
      group: 'Analysis',
      defaultOn: false,
      source: { url: './data/trips.geojson' },
      style: { weightField: 'trips', radius: 30, intensity: 1, opacity: 0.7 },
      legend: { kind: 'ramp', from: 'style', label: 'Low → high' },
    },
    {
      id: 'reference',
      info: 'Any XYZ raster service can be layered here \u2014 satellite imagery, bathymetry, historic surveys.',
      label: 'Reference imagery',
      type: 'raster',
      group: 'Context',
      defaultOn: false,
      source: { tiles: ['https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png'] },
      style: { opacity: 0.55 },
      legend: { kind: 'note', text: 'Raster tile overlay — swap in imagery, bathymetry or any XYZ service' },
    },
  ],

  /* ── Record detail ─────────────────────────────────────────
     Which layer feeds detail pages, and how a record is laid out.
     ───────────────────────────────────────────────────────── */
  record: {
    layer: 'facilities',
    idField: 'id',
    titleField: 'name',
    subtitleField: 'lga',
    badgeField: 'quality',
    sections: [
      {
        heading: 'Facility',
        fields: [
          { key: 'type', label: 'Type' },
          { key: 'quality', label: 'Condition' },
          { key: 'operator', label: 'Operator' },
          { key: 'capacity', label: 'Daily capacity', format: 'number' },
        ],
      },
      {
        heading: 'Connections',
        fields: [{ key: 'destinations', label: 'Serves', format: 'list' }],
      },
      {
        heading: 'Provenance',
        fields: [
          { key: 'source', label: 'Source' },
          { key: 'surveyed', label: 'Last surveyed', format: 'date' },
        ],
      },
    ],
  },

  /* ── Screens ───────────────────────────────────────────── */
  screens: {
    landing: {
      enabled: true,
      headline: 'Every jetty, terminal and boat landing on the Lagos waterways.',
      body:
        'Lagos has more shoreline than road capacity. This map is an open, ' +
        'checkable record of the infrastructure that could carry the load.',
      cta: { label: 'Open the map', to: 'map' },
      secondaryCta: { label: 'Download the data', to: 'downloads' },
      stats: [
        { value: '132', label: 'Facilities mapped' },
        { value: '20', label: 'Local government areas' },
        { value: '5', label: 'Operating routes' },
      ],
    },
    about: {
      enabled: true,
      title: 'About this map',
      sections: [
        {
          heading: 'What this is',
          body:
            'A field-verified inventory of ferry infrastructure in Lagos State, ' +
            'published as open data.',
        },
        {
          heading: 'How it was built',
          body:
            'Facilities were digitised from satellite imagery, then verified in ' +
            'person between January and June 2026. Routes come from operator ' +
            'timetables where they exist and from rider interviews where they do not.',
        },
        {
          heading: 'Known gaps',
          body:
            'Informal landings on the Epe axis are under-counted. Depth survey ' +
            'coverage stops at the Third Mainland Bridge.',
        },
      ],
    },
    downloads: {
      enabled: true,
      title: 'Download the data',
      body: 'Everything on this map is available as open data under CC BY 4.0.',
      files: [
        { label: 'Facilities', format: 'GeoJSON', size: '412 KB', url: './data/facilities.geojson' },
        { label: 'Facilities', format: 'CSV', size: '96 KB', url: './data/facilities.csv' },
        { label: 'Routes', format: 'GeoJSON', size: '84 KB', url: './data/routes.geojson' },
      ],
      api: {
        enabled: true,
        base: 'https://api.publictech.studio/ferry/v1',
        endpoints: [
          { method: 'GET', path: '/facilities', note: 'All facilities. Supports ?lga= and ?type=' },
          { method: 'GET', path: '/facilities/{id}', note: 'One facility' },
          { method: 'GET', path: '/routes', note: 'All routes' },
        ],
      },
    },
  },

  /* ── Chrome ────────────────────────────────────────────── */
  nav: [
    { id: 'landing', label: 'Home' },
    { id: 'map', label: 'Map' },
    { id: 'about', label: 'About' },
    { id: 'downloads', label: 'Data' },
  ],
  footer: {
    note: 'Published by Public Tech Studio. Data CC BY 4.0.',
    links: [
      { label: 'GitHub', url: 'https://github.com/publictechstudio/design-system' },
      { label: 'Contact', url: 'mailto:hello@publictech.studio' },
    ],
  },
};
