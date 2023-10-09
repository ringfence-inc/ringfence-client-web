// Utils
import rest from "../../../shared/api";

// Constants
export const QUERY_KEY_GET_COLLECTIONS = "/org/collections";

// Types
import type { PaginationResponse, PaginationRequest } from "../../../shared/api/types";

export interface GetCollectionsRequest extends PaginationRequest {}

export type TCollectionStatusTitle =
  | "not checked"
  | "detected"
  | "in progress"
  | "not checked"
  | "checked";

export type TCollectionStatus = {
  id?: number;
  version?: string;
  created_at?: string;
  updated_at?: string;
  title?: string;
  description?: string;
};

export type TCollectionUser = {
  id?: number;
};

export type TCollection = {
  id?: number;
  title?: string;
  detected_comment?: string;
  count_generated_images?: number;
  count_uploaded_images?: number;
  status?: TCollectionStatus;
  user?: TCollectionUser;
};

export interface GetCollectionsResponse extends PaginationResponse {
  items?: TCollection[];
}

// Api function
export const apiGetCollections = async (
  params: GetCollectionsRequest
): Promise<GetCollectionsResponse> => {
  return await rest.get(QUERY_KEY_GET_COLLECTIONS, true, {});
};

export default apiGetCollections;
