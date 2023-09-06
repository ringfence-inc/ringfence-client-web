// Styles
import { StyledH1, StyledSpan } from "./styles";

// Types
export interface SectionTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  items?: string[];
}

export const SectionTitle = ({
  items = [],
  children,
  ...props
}: SectionTitleProps) => {
  return (
    <StyledH1 {...props}>
      {items.map((item, index) => (
        <StyledSpan key={index}>{item}</StyledSpan>
      ))}
      {children}
    </StyledH1>
  );
};

export default SectionTitle;
