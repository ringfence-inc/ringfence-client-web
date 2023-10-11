// Utils
import rest from "../../../shared/api";
import objToFormData from "../../../shared/utils/objToFormData";

// Constants
export const QUERY_KEY_IMAGE_VALIDATION = "/org/image-validation";

// Types
export interface ImageValidationRequest {
  imageId: number;
}

export interface ImageValidationResponse {
  valid: boolean;
}

// Api function
export const apiImageValidation = async (
  params: ImageValidationRequest
): Promise<ImageValidationResponse> => {
  const response = await rest.post(
    QUERY_KEY_IMAGE_VALIDATION,
    true,
    objToFormData(params)
  );

  return response;
};

export default apiImageValidation;
