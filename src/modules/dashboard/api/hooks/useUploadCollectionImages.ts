// Hooks
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

// Types
import type { RequestError } from "@/shared/api";

// Api
import {
  apiUploadCollectionImages,
  UploadCollectionImagesRequest,
  UploadCollectionImagesResponse,
  QUERY_KEY_UPLOAD_COLLECTION_IMAGES,
} from "../apiUploadCollectionImages";

// Request hook
export const useUploadCollectionImages = (
  defParams?: UploadCollectionImagesRequest,
  options?: UseMutationOptions<
    UploadCollectionImagesResponse,
    RequestError,
    UploadCollectionImagesRequest
  >
) =>
  useMutation<
    UploadCollectionImagesResponse,
    RequestError,
    UploadCollectionImagesRequest
  >({
    mutationKey: QUERY_KEY_UPLOAD_COLLECTION_IMAGES,
    mutationFn: (params: UploadCollectionImagesRequest) =>
      apiUploadCollectionImages({ ...(params || {}), ...(defParams || {}) }),
    ...(options || ({} as any)),
  });

export default useUploadCollectionImages;
