/**
 * Editorial accordion for long-form content sections.
 * @startingPoint section="Navigation" subtitle="Editorial accordion rows" viewport="700x300"
 */
export interface AccordionItem {
  /** Title Case-free: sentence case, e.g. "Context and Motivation". */
  title: string;
  /** A 24px OUTLINED icon — outline is the editorial register. */
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export interface AccordionProps {
  items?: AccordionItem[];
  /** Index open on mount. -1 (default) means all closed. */
  defaultOpen?: number;
  style?: React.CSSProperties;
}

export function Accordion(props: AccordionProps): JSX.Element;
