// Styles
import {
  Wrap,
  StyledSectionTitle,
  LargeOutlinedLogoIcon,
  SectionWrapProps,
} from "./styles";

// Types
export interface PromoSectionProps extends SectionWrapProps {}

export const PromoSection = ({ ...props }: PromoSectionProps) => {
  return (
    <Wrap {...props}>
      <StyledSectionTitle
        items={["CREATE,", "COLLABORATE,", "COMPOSE.", "", "ON YOUR TERMS."]}
      />
      <LargeOutlinedLogoIcon />
    </Wrap>
  );
};

export default PromoSection;
