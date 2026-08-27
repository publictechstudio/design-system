/**
 * A landing hero's headline numbers, in hairline-divided cards.
 * @startingPoint section="Data" subtitle="Stat grid" viewport="600x140"
 */
export interface StatGridProps {
  stats: { value: string; label: string }[];
  style?: React.CSSProperties;
}

export function StatGrid(props: StatGridProps): JSX.Element;
