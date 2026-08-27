/**
 * The centred section opener used at the top of every marketing section.
 * @startingPoint section="Marketing" subtitle="Section heading and lede" viewport="700x260"
 */
export interface SectionHeaderProps {
  /** Two or three words, Title Case: "Our Services", "Open Data Projects". */
  title: string;
  /** One or two sentences at 70% ink. Optional. */
  lede?: string;
  align?: 'center' | 'left';
  style?: React.CSSProperties;
}

export function SectionHeader(props: SectionHeaderProps): JSX.Element;
