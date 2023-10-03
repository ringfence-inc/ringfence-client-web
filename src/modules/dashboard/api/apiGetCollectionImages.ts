// Utils
import rest from "@/shared/api";

// Constants
export const QUERY_KEY_GET_COLLECTION_IMAGES = "/org/upload-images";

// Types
import type { PaginationResponse, PaginationRequest } from "@/shared/api/types";
import type {
  TCollection,
  TCollectionStatus,
  TCollectionUser,
} from "./apiGetCollections";

// Re export types
export type { TCollectionStatus, TCollectionUser };

// Types
export interface GetCollectionImagesRequest extends PaginationRequest {
  collection_id: number;
  page?: number;
  take?: number;
}

export type TImageCollection = {
  id?: number;
  version?: string;
  created_at?: string;
  updated_at?: string;
  collection?: Omit<TCollection, "user" | "status">;
};

export type TCollectionImage = {
  id?: number;
  version?: string;
  created_at?: string;
  updated_at?: string;
  count_urls?: number;
  count_brands?: number;
  s3_url?: string;
  title?: string;
  key?: string;
  user?: TCollectionUser;
  status?: TCollectionStatus;
  collections?: TImageCollection[];
};

export interface GetCollectionImagesResponse extends PaginationResponse {
  items?: TCollectionImage[];
}

// Api function
export const apiGetCollectionImages = async (
  params: GetCollectionImagesRequest
): Promise<GetCollectionImagesResponse> => {
  const { collection_id, page = 1, take = 12 } = params || {};

  return await rest.get(QUERY_KEY_GET_COLLECTION_IMAGES, true, {
    collection_id,
    page,
    take,
  });
};

export default apiGetCollectionImages;
