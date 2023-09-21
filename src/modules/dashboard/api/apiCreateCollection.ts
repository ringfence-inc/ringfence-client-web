// Utils
import rest from "@/shared/api";
import objToFormData from "@/shared/utils/objToFormData";

// Constants
export const QUERY_KEY_CREATE_COLLECTION = "/collection";

// Types
export interface CreateCollectionRequest {
  name: string;
  width: number;
  height: number;
  prompt: string;
}

export interface CreateCollectionResponse {
  success: boolean;
}

// Api function
export const apiCreateCollection = async (
  data: CreateCollectionRequest
): Promise<CreateCollectionResponse> => {
  const response = await rest.post(
    QUERY_KEY_CREATE_COLLECTION,
    false,
    objToFormData(data)
  );

  return response;
};

export default apiCreateCollection;
