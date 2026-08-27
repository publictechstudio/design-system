/**
 * A heading + hairline-divided label/value rows — a record spec sheet or a
 * map selection's popup fields.
 * @startingPoint section="Data" subtitle="Detail list" viewport="280x220"
 */
export interface DetailListProps {
  heading?: string;
  rows: { label: string; value: React.ReactNode }[];
  style?: React.CSSProperties;
}

export function DetailList(props: DetailListProps): JSX.Element;
