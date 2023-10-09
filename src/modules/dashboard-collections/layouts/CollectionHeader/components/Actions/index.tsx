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
import useDeleteCollectionImages from "../../../../api/hooks/useDeleteCollectionImages";
import useMutationMessage from "../../../../../../shared/hooks/useMutationMessage";
import useGetCollectionImages from "../../../../api/hooks/useGetCollectionImages";

// Components
import ConfirmPopover, {
  ConfirmPopoverProps,
} from "../../../../../../shared/ui/ConfirmPopover";

// Types
import type { UseCollectionImagesTableReturn } from "../../../../hooks/useCollectionImagesTable";
export interface ActionsProps extends ButtonsTableProps {
  table?: UseCollectionImagesTableReturn;
  collectionId?: number;
}

export const Actions = ({ table, collectionId, ...props }: ActionsProps) => {
  const { selectedRowKeys } = table || {};
  const mutation = useDeleteCollectionImages();
  const { mutateAsync } = mutation;
  useMutationMessage({
    mutation,
    defaultSuccessMessage: "Images were deleted successfully",
  });

  const queryGet = useGetCollectionImages({
    collection_id: collectionId as number,
  });
  const { refetch } = queryGet;

  const handleImagesDelete = async () => {
    try {
      await mutateAsync({
        collection_id: collectionId as number,
        files_ids: selectedRowKeys as number[],
      });
      await refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ButtonsTable {...props}>
      <Button icon={<PenIcon />} roundedLeft>
        Generate
      </Button>
      <Button icon={<LogoIcon />}>Check Status</Button>
      <Button icon={<FolderIcon />}>Collect</Button>
      <ConfirmPopover
        onConfirm={handleImagesDelete}
        text="Are you sure you want to delete this images?"
      >
        <Button icon={<TrashIcon />} roundedRight>
          Delete
        </Button>
      </ConfirmPopover>
    </ButtonsTable>
  );
};

export default Actions;
