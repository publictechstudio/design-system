/**
 * Icon-prefixed type-to-filter field, for a facility search or any list.
 * @startingPoint section="Data" subtitle="Search input" viewport="280x60"
 */
export interface SearchFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  style?: React.CSSProperties;
}

export function SearchField(props: SearchFieldProps): JSX.Element;
