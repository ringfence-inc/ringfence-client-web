// Styles
import {
  ButtonsTable,
  Button,
  ButtonsTableProps,
  WalletIcon,
  PenIcon,
  TrashIcon,
  FundsPopover,
  DeletePopover,
} from "./styles";

// Types
export interface Actions extends ButtonsTableProps {}

export const Actions = ({ ...props }) => {
  return (
    <ButtonsTable {...props}>
      <FundsPopover
        text="5 credits are required to complete the copyright check. Would you like to top-up?"
        danger={false}
      >
        <Button icon={<WalletIcon />} rounded danger>
          Funds needed
        </Button>
      </FundsPopover>
      <Button space="16px" />
      <Button icon={<PenIcon />} roundedLeft>
        Generate
      </Button>
      <DeletePopover text="Are you sure you want to delete this collection?">
        <Button icon={<TrashIcon />} roundedRight>
          Delete
        </Button>
      </DeletePopover>
    </ButtonsTable>
  );
};

export default Actions;
