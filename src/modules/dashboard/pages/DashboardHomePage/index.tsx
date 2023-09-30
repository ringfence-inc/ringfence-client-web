// Styles
import { HomeHeader, PicturesGrid } from "./styles";

// Hooks
import useGetImages from "../../api/hooks/useGetImages";

export const DashboardHomePage = () => {
  const { data: { items } = {} } = useGetImages();

  return (
    <>
      <HomeHeader />
      <PicturesGrid items={items} pictureProps={{ disabled: true }} />
    </>
  );
};

export default DashboardHomePage;
