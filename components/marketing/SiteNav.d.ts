export interface SiteNavLink {
  label: string;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

/**
 * The studio's site nav — white, sticky, with the animated brand rule as
 * its bottom edge.
 * @startingPoint section="Marketing" subtitle="Studio site navigation" viewport="700x150"
 */
export interface SiteNavProps {
  /** Path to the horizontal black logo SVG. Falls back to plain type. */
  logo?: string;
  logoAlt?: string;
  href?: string;
  links?: SiteNavLink[];
  /** The persistent right-hand action — a filled Subscribe button. */
  action?: React.ReactNode;
  /** Ref to a scrolling container, for the brand rule. */
  scrollTarget?: React.RefObject<HTMLElement>;
  style?: React.CSSProperties;
}

export function SiteNav(props: SiteNavProps): JSX.Element;
