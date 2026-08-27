/**
 * The button. Shape follows the active theme: near-square in the studio
 * theme, a pill under data-theme="ferry".
 * @startingPoint section="Core" subtitle="Button variants and sizes" viewport="700x150"
 */
export interface ButtonProps {
  /** filled = blue primary. inverse = white on a colour panel. outline, text. */
  variant?: 'filled' | 'inverse' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  as?: keyof JSX.IntrinsicElements;
  href?: string;
  /** Leading icon — a 16px Lucide glyph in studio surfaces. */
  icon?: React.ReactNode;
  /** Trailing icon — the external-link arrow on "View Product". */
  trailingIcon?: React.ReactNode;
  children?: React.ReactNode;
  /** Renders grey and non-interactive — the "Coming soon" state. */
  disabled?: boolean;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}

export function Button(props: ButtonProps): JSX.Element;
