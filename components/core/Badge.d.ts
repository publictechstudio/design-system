/**
 * Status badge for encoded state — "Future OMI EKO", "Charter Only".
 * @startingPoint section="Core" subtitle="Status badge tones" viewport="700x150"
 */
export interface BadgeProps {
  /** charter = clay, planned = forest, degraded = rust, neutral = ink. */
  tone?: 'charter' | 'planned' | 'degraded' | 'neutral';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
