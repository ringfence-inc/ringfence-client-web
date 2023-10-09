// Utils
import rest from "../../../shared/api";
import objToFormData from "../../../shared/utils/objToFormData";

// Constants
export const QUERY_KEY_CREATE_COLLECTION = "/org/collections";

// Types
export interface CreateCollectionRequest {
  title: string;
}

export interface CreateCollectionResponse {
  success: boolean;
}

// Api function
export const apiCreateCollection = async (
  params: CreateCollectionRequest
): Promise<CreateCollectionResponse> => {
  const response = await rest.post(
    QUERY_KEY_CREATE_COLLECTION,
    true,
    objToFormData(params)
  );

  return response;
};

export default apiCreateCollection;
