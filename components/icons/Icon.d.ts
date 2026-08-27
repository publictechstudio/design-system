export type IconName =
  | 'info' | 'map' | 'directions' | 'warning'
  | 'close' | 'chevron' | 'filter' | 'myLocation'
  | 'lightbulb' | 'boat' | 'security';

/**
 * The system's only icon family: Lucide, stroke-based, 2px, currentColor.
 * Use for every surface — marketing, product chrome and editorial alike.
 * @startingPoint section="Foundations" subtitle="Inlined Material glyph set" viewport="700x150"
 */
export interface IconProps {
  /** Which glyph to render. */
  name: IconName;
  /** Pixel size for both axes. 48 hero, 24 editorial, 20 map, 18 panel, 14 inline. */
  size?: number;
  /** Stroke. Defaults to currentColor — prefer inheriting. */
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  /** Decorative icons are aria-hidden. Set false and pass title when meaningful. */
  decorative?: boolean;
  title?: string;
}

export function Icon(props: IconProps): JSX.Element | null;
export const ICON_PATHS: Record<IconName, string[]>;
