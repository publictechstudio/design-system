/**
 * A data layer's legend — swatches, line keys, a gradient ramp, or a note.
 * @startingPoint section="Data" subtitle="Layer legend, four kinds" viewport="240x120"
 */
export interface LegendProps {
  kind?: 'swatches' | 'lines' | 'ramp' | 'note';
  /** swatches/lines: one entry per category. */
  items?: { label: string; color: string }[];
  /** ramp: a CSS gradient string, e.g. linear-gradient(to right, #EFF6FF, #1D4ED8). */
  gradient?: string;
  low?: string;
  high?: string;
  /** note: plain explanatory text, no key. */
  note?: string;
  style?: React.CSSProperties;
}

export function Legend(props: LegendProps): JSX.Element;
