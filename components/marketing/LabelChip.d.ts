/**
 * Category chip for project cards — the only fully-round shape in the studio theme.
 * @startingPoint section="Marketing" subtitle="Six project category tones" viewport="700x150"
 */
export interface LabelChipProps {
  tone?: 'blue' | 'green' | 'purple' | 'orange' | 'teal' | 'rose';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function LabelChip(props: LabelChipProps): JSX.Element;
