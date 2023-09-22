// Utils
import { fakeRest } from "@/shared/api";

// Constants
export const QUERY_KEY_GET_IMAGES = "/images";

// Types
import type { ResponseMeta } from "@/shared/api/types";

export interface GetImagesRequest {
  page?: number;
  limit?: number;
}

export interface GetImagesImage {
  id: number;
  src: string;
  thumbnail: string;
}

export interface GetImagesResponse {
  data?: GetImagesImage[];
  meta?: ResponseMeta;
}

// Api function
export const apiGetImages = async (
  data: GetImagesRequest
): Promise<GetImagesResponse> => {
  return await fakeRest.get(QUERY_KEY_GET_IMAGES, true, {});
};

export default apiGetImages;
