// Utils
import { fakeRest } from "@/shared/api";

// Constants
export const QUERY_KEY_GET_IMAGES = "/images";

// Types
import type { PaginationResponse } from "@/shared/api/types";

export interface GetImagesRequest {
  page?: number;
  take?: number;
}

export interface GetImagesImage {
  id: number;
  src: string;
  thumbnail: string;
}

export interface GetImagesResponse extends PaginationResponse {
  items?: GetImagesImage[];
}

// Api function
export const apiGetImages = async (
  params: GetImagesRequest
): Promise<GetImagesResponse> => {
  return await fakeRest.get(QUERY_KEY_GET_IMAGES, true, {});
};

export default apiGetImages;
