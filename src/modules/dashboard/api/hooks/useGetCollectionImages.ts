// Hooks
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

// Types
import type { RequestError } from "@/shared/api";

// Api
import {
  apiGetCollectionImages,
  GetCollectionImagesRequest,
  GetCollectionImagesResponse,
  QUERY_KEY_GET_COLLECTION_IMAGES,
} from "../apiGetCollectionImages";

// Request hook
export const useGetCollectionImages = (
  params?: GetCollectionImagesRequest,
  options?: UseQueryOptions<
    GetCollectionImagesResponse,
    RequestError,
    GetCollectionImagesResponse
  >
) =>
  useQuery<
    GetCollectionImagesResponse,
    RequestError,
    GetCollectionImagesResponse
  >({
    queryKey: [QUERY_KEY_GET_COLLECTION_IMAGES, params],
    queryFn: () => apiGetCollectionImages(params as GetCollectionImagesRequest),
    ...(options || ({} as any)),
  });

export default useGetCollectionImages;
