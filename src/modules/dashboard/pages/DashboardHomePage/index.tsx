// Styles
import { HomeHeader, PicturesGrid } from "./styles";

// Hooks
import useGetImages from "../../api/hooks/useGetImages";

export const DashboardHomePage = () => {
  const { data: { items } = {}, isLoading } = useGetImages();

  return (
    <>
      <HomeHeader />
      <PicturesGrid
        items={items}
        pictureProps={{ disabled: true }}
        loading={isLoading}
      />
    </>
  );
};

export default DashboardHomePage;
