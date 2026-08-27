/**
 * The scroll-driven 6px brand rule under the studio nav — the identity's
 * one piece of motion. Blue → green → yellow, twice per page.
 * @startingPoint section="Marketing" subtitle="Scroll-driven brand rule" viewport="700x150"
 */
export interface BrandRuleProps {
  /** Pin the colour to a 0–1 position instead of reading scroll. */
  progress?: number;
  /** Rule thickness. 6 is the brand value — do not thin it. */
  height?: number;
  /** Ref to a scrolling element. Omit to track the window. */
  scrollTarget?: React.RefObject<HTMLElement>;
  style?: React.CSSProperties;
}

export function BrandRule(props: BrandRuleProps): JSX.Element;
/** Colour for a 0–1 scroll position. */
export function cycleColor(progress: number): string;
export function useCycleColor(target?: React.RefObject<HTMLElement>): string;
