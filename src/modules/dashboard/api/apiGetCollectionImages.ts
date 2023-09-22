// Utils
import { fakeRest } from "@/shared/api";

// Constants
export const QUERY_KEY_GET_COLLECTION_IMAGES = "/collection";

// Types
import type { ResponseMeta } from "@/shared/api/types";

export interface GetCollectionImagesRequest {
  collectionId: number;
  page?: number;
  limit?: number;
}

export type TCollectionImageStatus =
  | "not_checked"
  | "detected"
  | "in_progress"
  | "checked";

export interface TCollectionImage {
  id: number;
  name: string;
  created_at: string;
  status: TCollectionImageStatus;
  src: string;
  thumbnail: string;
}

export interface GetCollectionImagesResponse {
  data?: TCollectionImage[];
  meta?: ResponseMeta;
}

// Api function
export const apiGetCollectionImages = async (
  data: GetCollectionImagesRequest
): Promise<GetCollectionImagesResponse> => {
  return await fakeRest.get(QUERY_KEY_GET_COLLECTION_IMAGES, true, {});
};

export default apiGetCollectionImages;
