// Styles
import {
  ButtonsTable,
  Button,
  ButtonsTableProps,
  PenIcon,
  TrashIcon,
  LogoIcon,
  FolderIcon,
} from "./styles";

// Hooks
import useDeleteCollectionImages from "@/modules/dashboard/api/hooks/useDeleteCollectionImages";
import useMutationMessage from "@/shared/hooks/useMutationMessage";
import useGetCollectionImages from "@/modules/dashboard/api/hooks/useGetCollectionImages";

// Components
import ConfirmPopover, {
  ConfirmPopoverProps,
} from "@/shared/ui/ConfirmPopover";

// Types
import type { UseCollectionsTableReturn } from "@/modules/dashboard/hooks/useCollectionsTable";
export interface ActionsProps extends ButtonsTableProps {
  table?: UseCollectionsTableReturn;
  collectionId?: number;
}

export const Actions = ({ table, collectionId, ...props }: ActionsProps) => {
  return (
    <ButtonsTable {...props}>
      <Button icon={<PenIcon />} roundedLeft>
        Generate
      </Button>
      <Button icon={<LogoIcon />}>Check Status</Button>
      <Button icon={<FolderIcon />}>Collect</Button>
      <ConfirmPopover text="Are you sure you want to delete this images?">
        <Button icon={<TrashIcon />} roundedRight>
          Delete
        </Button>
      </ConfirmPopover>
    </ButtonsTable>
  );
};

export default Actions;
