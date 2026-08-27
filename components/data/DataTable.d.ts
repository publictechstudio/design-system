export interface DataTableColumn {
  key: string;
  /** Rendered as a 12px uppercase overline. */
  label: string;
  /** Set false to hide the funnel toggle. Default true. */
  filterable?: boolean;
  /** Renders in on-surface + medium weight instead of the muted default. */
  emphasis?: boolean;
  nowrap?: boolean;
  /** Custom cell renderer — return Badge/Pill nodes here. */
  render?: (row: Record<string, unknown>) => React.ReactNode;
}

/**
 * The product's data table: outlined container, sticky header, per-column filters.
 * @startingPoint section="Data" subtitle="Filterable directory table" viewport="700x400"
 */
export interface DataTableProps {
  columns?: DataTableColumn[];
  rows?: Array<Record<string, unknown>>;
  /** Makes rows clickable with a 3% hover layer. */
  onRowClick?: (row: Record<string, unknown>) => void;
  /** Scroll cap in px. Default 900. */
  maxHeight?: number;
  /** Full sentence, e.g. "No routes match the current filters." */
  emptyMessage?: string;
  style?: React.CSSProperties;
}

export function DataTable(props: DataTableProps): JSX.Element;
export function FilterHeader(props: {
  label: string; value: string; open: boolean;
  onToggle: () => void; onChange: (v: string) => void; filterable?: boolean;
}): JSX.Element;
