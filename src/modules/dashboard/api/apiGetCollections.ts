// Utils
import { fakeRest } from "@/shared/api";

// Constants
export const QUERY_KEY_GET_COLLECTIONS = "/collections";

// Types
import type { ResponseMeta } from "@/shared/api/types";

export interface GetCollectionsRequest {
  page?: number;
  limit?: number;
}

export type TCollectionStatus =
  | "not_checked"
  | "detected"
  | "in_progress"
  | "checked";

export interface TCollection {
  id: number;
  name: string;
  created_at: string;
  createdCount: number;
  status: TCollectionStatus;
}

export interface GetCollectionsResponse {
  data?: TCollection[];
  meta?: ResponseMeta;
}

// Api function
export const apiGetCollections = async (
  data: GetCollectionsRequest
): Promise<GetCollectionsResponse> => {
  return await fakeRest.get(QUERY_KEY_GET_COLLECTIONS, true, {});
};

export default apiGetCollections;
