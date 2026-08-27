/**
 * Solid dark tooltip for definitions attached to an inline info icon.
 * @startingPoint section="Data" subtitle="Definition tooltip" viewport="700x150"
 */
export interface TooltipProps {
  /** The definition, in prose. Wraps at 220px. */
  label: React.ReactNode;
  placement?: 'top' | 'bottom';
  /** The trigger — usually <Icon name="info" size={14} />. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Tooltip(props: TooltipProps): JSX.Element;
