// Utils
import rest from "@/shared/api";

// Constants
export const QUERY_KEY_UPLOAD_COLLECTION_IMAGES =
  "/org/upload-images/add-to-collection";

export interface UploadCollectionImagesRequest {
  collection_id: number;
  images: File[];
}

export interface UploadCollectionImagesResponse {
  success: boolean;
}

// Api function
export const apiUploadCollectionImages = async (
  params: UploadCollectionImagesRequest
): Promise<UploadCollectionImagesResponse> => {
  const { collection_id, images = [] } = params || {};
  const formData = new FormData();
  formData.append("collection_id", collection_id.toString());
  images.forEach((image) => {
    formData.append("files", image);
  });
  return await rest.post(QUERY_KEY_UPLOAD_COLLECTION_IMAGES, true, formData);
};

export default apiUploadCollectionImages;
