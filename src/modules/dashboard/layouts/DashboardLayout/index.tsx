// Styles
import {
  Layout,
  SubLayout,
  Header,
  LeftWrap,
  RightWrap,
  SideMenu,
  Content,
  LogoTextIcon,
  Link,
  LayoutProps,
} from "./styles";

// Components
import CreditCount from "./components/CreditCount";
import SettingsButton from "./components/SettingsButton";
import LogoutButton from "./components/LogoutButton";

// Types
export interface DashboardLayoutProps extends LayoutProps {}

export const DashboardLayout = ({
  children,
  ...props
}: DashboardLayoutProps) => {
  return (
    <Layout {...props}>
      <Header>
        <LeftWrap>
          <Link href="/dashboard">
            <LogoTextIcon />
          </Link>
        </LeftWrap>
        <RightWrap>
          <CreditCount count={250} />
          <SettingsButton href="/dashboard/settings" />
          <LogoutButton />
        </RightWrap>
      </Header>
      <SubLayout>
        <SideMenu />
        <Content>{children}</Content>
      </SubLayout>
    </Layout>
  );
};

export default DashboardLayout;
