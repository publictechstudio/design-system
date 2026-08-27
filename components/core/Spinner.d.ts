/**
 * Inline loading spinner with optional message.
 * @startingPoint section="Core" subtitle="Loading spinner sizes" viewport="700x150"
 */
export interface SpinnerProps {
  /** Ring diameter. 16 inline, 14 in floating map chips. */
  size?: number;
  /** Sentence-case message shown beside the ring, e.g. "Loading map…". */
  message?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Spinner(props: SpinnerProps): JSX.Element;
