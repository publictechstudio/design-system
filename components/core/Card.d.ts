/**
 * The house card — white, tight radius, shadow-md, lifting 2px on hover.
 * @startingPoint section="Core" subtitle="Card with cover image" viewport="700x400"
 */
export interface CardProps {
  as?: keyof JSX.IntrinsicElements;
  href?: string;
  /** Cover image src — renders at 256px, object-cover, above the padding box. */
  media?: string;
  mediaAlt?: string;
  children?: React.ReactNode;
  /** Body padding. 24 (p-6) is the studio default, 16 for dense cards. */
  padding?: number;
  /** Set false for a static card that should not lift. */
  lift?: boolean;
  style?: React.CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
