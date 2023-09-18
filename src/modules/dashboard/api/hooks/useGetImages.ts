// Hooks
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

// Types
import type { RequestError } from "@/shared/api";

// Api
import {
  apiGetImages,
  GetImagesRequest,
  GetImagesResponse,
  QUERY_KEY_GET_IMAGES,
} from "../apiGetImages";

// Request hook
export const useGetImages = (
  params?: GetImagesRequest,
  options?: UseQueryOptions<GetImagesResponse, RequestError, GetImagesResponse>
) =>
  useQuery<GetImagesResponse, RequestError, GetImagesResponse>({
    queryKey: [QUERY_KEY_GET_IMAGES, params],
    queryFn: () => apiGetImages(params as GetImagesRequest),
    ...(options || ({} as any)),
  });

export default useGetImages;
