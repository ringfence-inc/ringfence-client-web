// Hooks
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

// Types
import type { RequestError } from "@/shared/api";

// Api
import {
  apiCreateCollection,
  CreateCollectionRequest,
  CreateCollectionResponse,
  QUERY_KEY_CREATE_COLLECTION,
} from "../apiCreateCollection";

// Request hook
export const useCreateCollection = (
  defParams?: CreateCollectionRequest,
  options?: UseMutationOptions<
    CreateCollectionResponse,
    RequestError,
    CreateCollectionRequest
  >
) =>
  useMutation<CreateCollectionResponse, RequestError, CreateCollectionRequest>({
    mutationKey: QUERY_KEY_CREATE_COLLECTION,
    mutationFn: (params: CreateCollectionRequest) =>
      apiCreateCollection({ ...(params || {}), ...(defParams || {}) }),
    ...(options || ({} as any)),
  });

export default useCreateCollection;
