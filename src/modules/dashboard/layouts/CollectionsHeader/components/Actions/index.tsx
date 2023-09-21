// Styles
import {
  ButtonsTable,
  Button,
  ButtonsTableProps,
  WalletIcon,
  PenIcon,
  TrashIcon,
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
      <ConfirmPopover
        text="5 credits are required to complete the copyright check. Would you like to top-up?"
        danger={false}
      >
        <Button icon={<WalletIcon />} rounded danger>
          Funds needed
        </Button>
      </ConfirmPopover>
      <Button space="16px" />
      <Button icon={<PenIcon />} roundedLeft>
        Generate
      </Button>
      <ConfirmPopover text="Are you sure you want to delete this collection?">
        <Button icon={<TrashIcon />} roundedRight>
          Delete
        </Button>
      </ConfirmPopover>
    </ButtonsTable>
  );
};

export default Actions;
