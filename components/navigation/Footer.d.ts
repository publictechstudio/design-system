/**
 * The dark site footer, including the black studio-credit strip.
 * @startingPoint section="Navigation" subtitle="Dark footer with studio credit" viewport="700x400"
 */
export interface FooterLinkItem { label: string; href: string; external?: boolean; }

export interface FooterProps {
  product?: string;
  /** One sentence describing the product. */
  blurb?: string;
  links?: FooterLinkItem[];
  creditHref?: string;
  /** The studio's standing invitation. Keep the question mark. */
  creditLabel?: string;
  copyright?: string;
  style?: React.CSSProperties;
}

export function Footer(props: FooterProps): JSX.Element;
