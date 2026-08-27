/**
 * A switch + label for one toggleable map or data layer, with an optional
 * click tooltip and a legend slot that appears while it's on.
 * @startingPoint section="Data" subtitle="Layer toggle with legend" viewport="320x180"
 */
export interface LayerToggleProps {
  label: string;
  on: boolean;
  onToggle: () => void;
  /** Adds a click-triggered (i) tooltip beside the label. Omit for no icon. */
  info?: React.ReactNode;
  /** Rendered under the label only while `on` — swatches, a line key, or a ramp. */
  legend?: React.ReactNode;
  style?: React.CSSProperties;
}

export function LayerToggle(props: LayerToggleProps): JSX.Element;
