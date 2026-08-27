/**
 * Centred modal on a 40% black scrim — the feedback prompt pattern.
 * @startingPoint section="Feedback" subtitle="Centred modal dialog" viewport="700x400"
 */
export interface DialogProps {
  open?: boolean;
  /** A question, in sentence case: "Did you find what you were looking for?" */
  title?: string;
  description?: string;
  /** Primary action(s) — usually one filled <Button fullWidth />. */
  children?: React.ReactNode;
  /** Renders the plain-text dismiss beneath the actions. */
  onDismiss?: () => void;
  dismissLabel?: string;
  style?: React.CSSProperties;
}

export function Dialog(props: DialogProps): JSX.Element | null;
