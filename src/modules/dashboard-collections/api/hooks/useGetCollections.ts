// Hooks
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

// Types
import type { RequestError } from "../../../../shared/api";

// Api
import {
  apiGetCollections,
  GetCollectionsRequest,
  GetCollectionsResponse,
  QUERY_KEY_GET_COLLECTIONS,
} from "../apiGetCollections";

// Request hook
export const useGetCollections = (
  params?: GetCollectionsRequest,
  options?: UseQueryOptions<
    GetCollectionsResponse,
    RequestError,
    GetCollectionsResponse
  >
) =>
  useQuery<GetCollectionsResponse, RequestError, GetCollectionsResponse>({
    queryKey: [QUERY_KEY_GET_COLLECTIONS, params],
    queryFn: () => apiGetCollections(params as GetCollectionsRequest),
    ...(options || ({} as any)),
  });

export default useGetCollections;
