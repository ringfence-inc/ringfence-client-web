// Hooks
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

// Types
import type { RequestError } from "../../../../shared/api";

// Api
import {
  apiDeleteCollectionImages,
  DeleteCollectionImagesRequest,
  DeleteCollectionImagesResponse,
  QUERY_KEY_DELETE_COLLECTION_IMAGES,
} from "../apiDeleteCollectionImages";

// Request hook
export const useDeleteCollectionImages = (
  defParams?: Partial<DeleteCollectionImagesRequest>,
  options?: UseMutationOptions<
    DeleteCollectionImagesResponse,
    RequestError,
    DeleteCollectionImagesRequest
  >
) =>
  useMutation<
    DeleteCollectionImagesResponse,
    RequestError,
    DeleteCollectionImagesRequest
  >({
    mutationKey: QUERY_KEY_DELETE_COLLECTION_IMAGES,
    mutationFn: (params: DeleteCollectionImagesRequest) =>
      apiDeleteCollectionImages({ ...(params || {}), ...(defParams || {}) }),
    ...(options || ({} as any)),
  });

export default useDeleteCollectionImages;
