// Utils
import rest from "../../../shared/api";

// Constants
export const QUERY_KEY_DELETE_COLLECTION_IMAGES = "/org/upload-images";

export interface DeleteCollectionImagesRequest {
  collection_id: number;
  files_ids: number[];
}

export interface DeleteCollectionImagesResponse {
  success: boolean;
}

// Api function
export const apiDeleteCollectionImages = async (
  params: DeleteCollectionImagesRequest
): Promise<DeleteCollectionImagesResponse> => {
  const { collection_id, files_ids = [] } = params || {};
  const formData = new FormData();
  formData.append("collection_id", String(collection_id));
  formData.append("files_ids", files_ids?.join?.(","));

  return await rest.delete(QUERY_KEY_DELETE_COLLECTION_IMAGES, true, formData);
};

export default apiDeleteCollectionImages;
