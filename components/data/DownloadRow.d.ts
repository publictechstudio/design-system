/**
 * One file in an open-data download list — icon, label + format/size, a
 * Download button.
 * @startingPoint section="Data" subtitle="Download row" viewport="420x80"
 */
export interface DownloadRowProps {
  label: string;
  /** e.g. "GeoJSON · 412 KB" */
  meta: string;
  url: string;
  style?: React.CSSProperties;
}

export function DownloadRow(props: DownloadRowProps): JSX.Element;
