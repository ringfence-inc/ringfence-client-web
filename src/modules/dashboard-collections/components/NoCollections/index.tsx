import { HtmlHTMLAttributes } from "react";

// Styles
import { Button, PlusIcon, Title, Wrap } from "./styles";

// Types
export interface NoCollectionsProps extends HtmlHTMLAttributes<HTMLDivElement> {
  onCreateClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export const NoCollections = ({
  onCreateClick,
  disabled,
  loading,
  ...props
}: NoCollectionsProps) => {
  return (
    <Wrap {...props}>
      <Title>Create your first collection</Title>
      <Button
        icon={<PlusIcon />}
        onClick={onCreateClick}
        {...{ disabled, loading }}
      >
        NEW COLLECTION
      </Button>
    </Wrap>
  );
};

export default NoCollections;
