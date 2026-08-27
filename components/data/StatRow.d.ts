/**
 * Inline count summary under a page title — "24 facilities · 61 active routes · 9 LGAs".
 * @startingPoint section="Data" subtitle="Inline stat summary" viewport="700x150"
 */
export interface Stat { value: React.ReactNode; label: string; href?: string; }

export interface StatRowProps {
  stats?: Stat[];
  style?: React.CSSProperties;
}

export function StatRow(props: StatRowProps): JSX.Element;
