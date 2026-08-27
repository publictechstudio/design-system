/**
 * Full-colour feature panel — flat blue with a photograph at 30% under an
 * 80% veil. Used for the studio's two lines of work.
 * @startingPoint section="Marketing" subtitle="Full-colour feature panel" viewport="700x400"
 */
export interface FeatureCardProps {
  title: string;
  children?: React.ReactNode;
  /** Background photograph. Rendered at 30% opacity behind an 80% blue veil. */
  image?: string;
  /** Usually <Button variant="inverse">. */
  action?: React.ReactNode;
  /** 48 (p-12) is the brand value. */
  padding?: number;
  style?: React.CSSProperties;
}

export function FeatureCard(props: FeatureCardProps): JSX.Element;
