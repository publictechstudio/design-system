/* maplibre-adapter.js — turns a config layer into MapLibre sources + layers.
   This is the only file that knows about MapLibre. Swapping in Leaflet means
   writing a sibling adapter with the same two exports. */

export function sourceSpec(layer) {
  if (layer.type === 'raster') {
    return { type: 'raster', tiles: layer.source.tiles, tileSize: layer.source.tileSize || 256 };
  }
  const spec = { type: 'geojson', data: layer.source.data || layer.source.url };
  if (layer.type === 'points' && layer.cluster?.enabled) {
    spec.cluster = true;
    spec.clusterRadius = layer.cluster.radius ?? 44;
    spec.clusterMaxZoom = layer.cluster.maxZoom ?? 13;
  }
  return spec;
}

/* Resolves "var(--token)" strings against the live theme (getComputedStyle),
   so config colours inherit the design system by default. A literal hex/rgb
   in config bypasses this entirely — that's the override mechanism: replace
   a token reference with a literal colour to go off-system for one layer. */
function resolveToken(value, themeEl) {
  if (typeof value !== 'string' || !value.startsWith('var(')) return value;
  const inner = value.slice(4, -1).trim();
  const commaIdx = inner.indexOf(',');
  const name = (commaIdx === -1 ? inner : inner.slice(0, commaIdx)).trim();
  const fallback = commaIdx === -1 ? '' : inner.slice(commaIdx + 1).trim();
  const resolved = getComputedStyle(themeEl).getPropertyValue(name).trim();
  return resolved || fallback || value;
}

function resolveStyle(style, themeEl) {
  if (!style) return style;
  const s = { ...style };
  if (s.colorBy) s.colorBy = { ...s.colorBy, fallback: resolveToken(s.colorBy.fallback, themeEl),
    values: Object.fromEntries(Object.entries(s.colorBy.values).map(([k, v]) => [k, resolveToken(v, themeEl)])) };
  if (s.scale) s.scale = s.scale.map(([v, c]) => [v, resolveToken(c, themeEl)]);
  ['fill', 'strokeColor'].forEach(k => { if (s[k]) s[k] = resolveToken(s[k], themeEl); });
  return s;
}

/* colorBy → a MapLibre "match" expression */
function matchExpr(colorBy) {
  if (!colorBy) return '#1976D2';
  const pairs = Object.entries(colorBy.values).flatMap(([k, v]) => [k, v]);
  return ['match', ['get', colorBy.field], ...pairs, colorBy.fallback || '#73777F'];
}

/* choropleth scale → an "interpolate" expression */
function rampExpr(field, scale) {
  return ['interpolate', ['linear'], ['coalesce', ['get', field], 0],
    ...scale.flatMap(([v, c]) => [v, c])];
}

export function layerSpecs(layer, sourceId, themeEl) {
  const s = resolveStyle(layer.style, themeEl) || {};
  const base = { source: sourceId, layout: { visibility: layer.defaultOn ? 'visible' : 'none' } };

  switch (layer.type) {
    case 'points': {
      const out = [];
      if (layer.cluster?.enabled) {
        out.push({
          ...base, id: `${layer.id}-clusters`, type: 'circle', filter: ['has', 'point_count'],
          paint: {
            'circle-color': s.colorBy?.fallback || resolveToken('var(--color-primary)', themeEl),
            'circle-radius': ['step', ['get', 'point_count'], 14, 10, 18, 30, 24],
            'circle-stroke-width': 2, 'circle-stroke-color': resolveToken('var(--color-surface-raised)', themeEl),
          },
        });
        out.push({
          ...base, id: `${layer.id}-count`, type: 'symbol', filter: ['has', 'point_count'],
          layout: { ...base.layout, 'text-field': ['get', 'point_count_abbreviated'], 'text-size': 12, 'text-font': ['Open Sans Semibold', 'Noto Sans Regular'] },
          paint: { 'text-color': '#FFFFFF' },
        });
      }
      out.push({
        ...base, id: layer.id, type: 'circle',
        filter: layer.cluster?.enabled ? ['!', ['has', 'point_count']] : ['all'],
        paint: {
          'circle-color': matchExpr(s.colorBy),
          'circle-radius': s.radius ?? 6,
          'circle-stroke-width': s.strokeWidth ?? 2,
          'circle-stroke-color': s.strokeColor || '#FFFFFF',
        },
      });
      return out;
    }
    case 'lines':
      return [{
        ...base, id: layer.id, type: 'line',
        layout: { ...base.layout, 'line-cap': 'round', 'line-join': 'round' },
        paint: { 'line-color': matchExpr(s.colorBy), 'line-width': s.width ?? 2.5 },
      }];
    case 'polygons':
      return [
        { ...base, id: layer.id, type: 'fill',
          paint: { 'fill-color': s.fill || '#012C57', 'fill-opacity': s.fillOpacity ?? 0.06 } },
        { ...base, id: `${layer.id}-outline`, type: 'line',
          paint: { 'line-color': s.strokeColor || '#012C57', 'line-width': s.strokeWidth ?? 1 } },
      ];
    case 'choropleth':
      return [
        { ...base, id: layer.id, type: 'fill',
          paint: { 'fill-color': rampExpr(s.field, s.scale), 'fill-opacity': s.opacity ?? 0.8 } },
        { ...base, id: `${layer.id}-outline`, type: 'line',
          paint: { 'line-color': s.strokeColor || '#FFFFFF', 'line-width': s.strokeWidth ?? 0.5 } },
      ];
    case 'heatmap':
      return [{
        ...base, id: layer.id, type: 'heatmap',
        paint: {
          'heatmap-weight': s.weightField
            ? ['interpolate', ['linear'], ['get', s.weightField], 0, 0, 100, 1] : 1,
          'heatmap-intensity': s.intensity ?? 1,
          'heatmap-radius': s.radius ?? 30,
          'heatmap-opacity': s.opacity ?? 0.7,
        },
      }];
    case 'raster':
      return [{ ...base, id: layer.id, type: 'raster', paint: { 'raster-opacity': s.opacity ?? 0.6 } }];
    default:
      return [];
  }
}
