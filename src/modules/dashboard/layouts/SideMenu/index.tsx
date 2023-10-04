import { useMemo } from "react";

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

// Constants
export const dashboardPath = "/dashboard";
export const generatePath = "/dashboard/generate";
export const collectionsPath = "/dashboard/collections";

export const keyPaths = [collectionsPath, generatePath, dashboardPath];

export const SideMenu = ({ ...props }: SideMenuProps) => {
  const pathname = usePathname();

  const selectedKey = useMemo(
    () => keyPaths.find((keyPath) => pathname.startsWith(keyPath)) as string,
    [pathname, keyPaths]
  );

  return (
    <Sider width={252} {...props}>
      <StyledMenu selectedKeys={[selectedKey]} mode="inline">
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
