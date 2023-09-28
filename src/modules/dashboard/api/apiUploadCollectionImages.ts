// Utils
import { fakeRest } from "@/shared/api";

// Constants
export const QUERY_KEY_UPLOAD_COLLECTION_IMAGES = "/upload";

export interface UploadCollectionImagesRequest {
  collectionId: number;
  images: File[];
}

export interface UploadCollectionImagesResponse {
  success: boolean;
}

// Api function
export const apiUploadCollectionImages = async (
  data: UploadCollectionImagesRequest
): Promise<UploadCollectionImagesResponse> => {
  return await fakeRest.post(QUERY_KEY_UPLOAD_COLLECTION_IMAGES, true, data);
};

export default apiUploadCollectionImages;
