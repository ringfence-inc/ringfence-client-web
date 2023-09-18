// Styles
import { HomeHeader, PicturesGrid } from "./styles";

// Hooks
import useGetImages from "../../api/hooks/useGetImages";

export const DashboardHomePage = () => {
  const { data: { data } = {} } = useGetImages();

  return (
    <>
      <HomeHeader />
      <PicturesGrid items={data} />
    </>
  );
};

export default DashboardHomePage;
