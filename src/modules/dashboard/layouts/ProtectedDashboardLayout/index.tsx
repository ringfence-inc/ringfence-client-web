// Server component utils
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Api utils
import rest from "@/shared/api";

// Components
import DashboardLayout from "../DashboardLayout";

// Api
import apiVerifyUser from "../../api/apiVerifyUser";

export const ProtectedDashboardLayout = async ({ ...props }) => {
  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value;
    const refreshToken = cookieStore.get("refreshToken")?.value;

    rest.setTokens({ refreshToken, token: accessToken });

    const userData = await apiVerifyUser();

    if (!userData?.id) {
      throw new Error("User not found");
    }
  } catch (e) {
    redirect("/auth/sign-in");
  }

  return <DashboardLayout>{props.children}</DashboardLayout>;
};

export default ProtectedDashboardLayout;
