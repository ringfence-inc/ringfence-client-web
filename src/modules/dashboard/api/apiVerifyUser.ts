// Api
import apiGetCollections from "@/modules/dashboard-collections/api/apiGetCollections";

// Types
import type { RestRequestConfig } from "@/shared/api";

export const apiVerifyUser = async (config?: RestRequestConfig) => {
  const collections = await apiGetCollections({ page: 1, take: 1 }, config);
  return collections?.items?.[0]?.user;
};

export default apiVerifyUser;
