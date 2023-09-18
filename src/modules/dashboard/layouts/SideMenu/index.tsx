import { HtmlHTMLAttributes } from "react";

// Styles
import {
  Sider,
  StyledMenu,
  MenuItem,
  HomeIcon,
  PenIcon,
  FolderIcon,
  Link,
  SiderProps,
} from "./styles";

// Hooks
import { usePathname } from "next/navigation";

// Types
export interface SideMenuProps extends SiderProps {}

export const SideMenu = ({ ...props }: SideMenuProps) => {
  const pathname = usePathname();

  const dashboardPath = "/dashboard";
  const generatePath = "/dashboard/generate";
  const collectionsPath = "/dashboard/collections";

  return (
    <Sider {...props}>
      <StyledMenu selectedKeys={[pathname]} mode="inline">
        <MenuItem icon={<HomeIcon />} key={dashboardPath}>
          <Link href={dashboardPath}>Home</Link>
        </MenuItem>
        <MenuItem icon={<PenIcon />} key={generatePath}>
          <Link href={generatePath}>Generate</Link>
        </MenuItem>
        <MenuItem icon={<FolderIcon />} key={collectionsPath}>
          <Link href={collectionsPath}>My collections</Link>
        </MenuItem>
      </StyledMenu>
    </Sider>
  );
};

export default SideMenu;
