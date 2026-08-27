/**
 * Service tile — solid blue cap with icon + title over a white description.
 * @startingPoint section="Marketing" subtitle="Service tile with blue cap" viewport="700x300"
 */
export interface ServiceCardProps {
  /** A 32px Lucide icon, white. */
  icon?: React.ReactNode;
  title: string;
  /** A single clause, no full stop — the studio omits it here. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function ServiceCard(props: ServiceCardProps): JSX.Element;
