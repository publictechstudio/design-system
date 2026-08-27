/**
 * Detail panel — half-width beside the map on desktop, slide-up sheet on mobile.
 * @startingPoint section="Feedback" subtitle="Map detail panel shell" viewport="700x400"
 */
export interface PanelProps {
  /** Small icon naming the record type — 16–18px. */
  typeIcon?: React.ReactNode;
  /** The record type in sentence case: "Ferry facility", "Ferry route". */
  typeLabel?: string;
  onClose?: () => void;
  /** Secondary action beside close — usually the "Report a data issue" button. */
  action?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Panel(props: PanelProps): JSX.Element;
