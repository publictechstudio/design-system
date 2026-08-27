import type { LabelChipProps } from './LabelChip';

export interface ProjectLabel {
  text: string;
  color?: LabelChipProps['tone'];
}

/**
 * A portfolio project: cover image, title + action, tagline, capability chips.
 * @startingPoint section="Marketing" subtitle="Portfolio project card" viewport="700x520"
 */
export interface ProjectCardProps {
  title: string;
  /** One sentence on what the project does and who it is for. */
  tagline: string;
  image?: string;
  /** Describe the graphic, not the project — these alts are written carefully. */
  imageAlt?: string;
  /** Live product URL. Omit and set comingSoon for unreleased work. */
  href?: string;
  /** Renders a grey non-interactive "Coming soon" button. */
  comingSoon?: boolean;
  labels?: ProjectLabel[];
  /** Supply to show "Read more", which opens the long description in a dialog. */
  onReadMore?: () => void;
  style?: React.CSSProperties;
}

export function ProjectCard(props: ProjectCardProps): JSX.Element;
