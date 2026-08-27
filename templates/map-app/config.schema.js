/* config.schema.js — fails loudly on a bad map.config.js.
   Call validateConfig(config) at app boot (and in CI); it returns
   { ok, errors, warnings }. assertConfig() throws instead. */

const LAYER_TYPES = ['points', 'lines', 'polygons', 'choropleth', 'heatmap', 'raster'];

const isObj = v => v !== null && typeof v === 'object' && !Array.isArray(v);
const isNum = v => typeof v === 'number' && Number.isFinite(v);
const isStr = v => typeof v === 'string' && v.length > 0;

export function validateConfig(config) {
  const errors = [];
  const warnings = [];
  const err = (path, msg) => errors.push(`${path}: ${msg}`);
  const warn = (path, msg) => warnings.push(`${path}: ${msg}`);

  if (!isObj(config)) return { ok: false, errors: ['config: must be an object'], warnings };

  /* app */
  if (!isObj(config.app)) err('app', 'missing');
  else {
    if (!isStr(config.app.name)) err('app.name', 'required string');
    if (config.app.theme && !isStr(config.app.theme)) err('app.theme', 'must be a theme name');
  }

  /* map */
  if (!isObj(config.map)) err('map', 'missing');
  else {
    const c = config.map.center;
    if (!Array.isArray(c) || c.length !== 2 || !c.every(isNum))
      err('map.center', 'must be [lng, lat] — note lng FIRST');
    else if (Math.abs(c[0]) > 180 || Math.abs(c[1]) > 90)
      err('map.center', `[${c}] out of range — did you swap lat/lng?`);
    if (!isNum(config.map.zoom)) err('map.zoom', 'required number');
    const bm = config.map.basemap;
    if (!isObj(bm)) err('map.basemap', 'missing');
    else if (!bm.styleUrl && !(Array.isArray(bm.tiles) && bm.tiles.length))
      err('map.basemap', 'needs either styleUrl or a non-empty tiles array');
    else if (bm.tiles && !bm.tiles.every(t => t.includes('{z}')))
      err('map.basemap.tiles', 'tile URLs must contain {z}/{x}/{y}');
    if (!bm?.attribution) warn('map.basemap.attribution', 'no attribution — most tile providers require it');
  }

  /* layers */
  if (!Array.isArray(config.layers) || !config.layers.length) {
    err('layers', 'at least one layer required');
  } else {
    const seen = new Set();
    config.layers.forEach((l, i) => {
      const p = `layers[${i}]`;
      if (!isStr(l.id)) err(`${p}.id`, 'required string');
      else if (seen.has(l.id)) err(`${p}.id`, `duplicate id "${l.id}"`);
      else seen.add(l.id);
      if (!isStr(l.label)) err(`${p}.label`, 'required — it is the toggle text');
      if (!LAYER_TYPES.includes(l.type))
        err(`${p}.type`, `"${l.type}" invalid — one of ${LAYER_TYPES.join(', ')}`);

      const s = l.source;
      if (!isObj(s)) err(`${p}.source`, 'missing');
      else if (l.type === 'raster') {
        if (!Array.isArray(s.tiles) || !s.tiles.length)
          err(`${p}.source.tiles`, 'raster layers need a tiles array');
      } else if (!s.url && !s.data) {
        err(`${p}.source`, 'needs url (remote GeoJSON/API) or data (inline)');
      }

      if (l.type === 'choropleth') {
        const sc = l.style?.scale;
        if (!isStr(l.style?.field)) err(`${p}.style.field`, 'choropleth needs the field to colour by');
        if (!Array.isArray(sc) || sc.length < 2)
          err(`${p}.style.scale`, 'needs at least two [value, colour] stops');
        else if (!sc.every(st => Array.isArray(st) && isNum(st[0]) && isStr(st[1])))
          err(`${p}.style.scale`, 'each stop must be [number, colourString]');
        else if (sc.some((st, j) => j > 0 && st[0] <= sc[j - 1][0]))
          err(`${p}.style.scale`, 'stop values must ascend');
      }
      if (l.type === 'heatmap' && l.style?.weightField && !isStr(l.style.weightField))
        err(`${p}.style.weightField`, 'must be a field name');
      if (l.cluster?.enabled && l.type !== 'points')
        err(`${p}.cluster`, 'clustering only applies to point layers');
      if (l.legend?.from && !l.legend.from.startsWith('style'))
        warn(`${p}.legend.from`, 'expected a "style.*" path');
    });
  }

  /* record */
  if (config.record) {
    const ids = (config.layers || []).map(l => l.id);
    if (!ids.includes(config.record.layer))
      err('record.layer', `"${config.record.layer}" is not a declared layer id`);
    if (!isStr(config.record.titleField)) err('record.titleField', 'required');
    (config.record.sections || []).forEach((sec, i) => {
      if (!Array.isArray(sec.fields) || !sec.fields.length)
        err(`record.sections[${i}].fields`, 'needs at least one field');
    });
  }

  /* nav ↔ screens */
  const screens = config.screens || {};
  (config.nav || []).forEach((n, i) => {
    if (n.id !== 'map' && !screens[n.id])
      err(`nav[${i}]`, `points at "${n.id}", which is not an enabled screen`);
  });

  return { ok: errors.length === 0, errors, warnings };
}

export function assertConfig(config) {
  const { ok, errors, warnings } = validateConfig(config);
  warnings.forEach(w => console.warn('[map.config] ' + w));
  if (!ok) throw new Error('Invalid map.config.js\n  • ' + errors.join('\n  • '));
  return config;
}
