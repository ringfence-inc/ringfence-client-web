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

// Components
import ConfirmPopover, {
  ConfirmPopoverProps,
} from "@/shared/ui/ConfirmPopover";

// Types
export interface Actions extends ButtonsTableProps {}

export const Actions = ({ ...props }) => {
  return (
    <ButtonsTable {...props}>
      <Button icon={<PenIcon />} roundedLeft>
        Generate
      </Button>
      <Button icon={<LogoIcon />}>Check Status</Button>
      <Button icon={<FolderIcon />}>Collect</Button>
      <ConfirmPopover text="Are you sure you want to delete this collection?">
        <Button icon={<TrashIcon />} roundedRight>
          Delete
        </Button>
      </ConfirmPopover>
    </ButtonsTable>
  );
};

export default Actions;
