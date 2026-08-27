/**
 * The sticky 64px MD3 top app bar with pill nav items.
 * @startingPoint section="Navigation" subtitle="Sticky 64px app bar" viewport="700x150"
 */
export interface AppBarLink { label: string; href: string; }

export interface AppBarProps {
  /** Wordmark text — set in Lato 700 at 22px. There is no logo image. */
  title?: string;
  /** Where the wordmark links. */
  href?: string;
  links?: AppBarLink[];
  /** Highlights the matching nav pill in primary blue. */
  activeHref?: string;
  style?: React.CSSProperties;
}

export function AppBar(props: AppBarProps): JSX.Element;
