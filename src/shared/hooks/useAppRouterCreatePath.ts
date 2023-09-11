// Hooks
import { useCallback, useMemo } from "react";
import { useSearchParams, usePathname } from "next/navigation";

/**
 * A hook that creates a URL path with query parameters.
 * @param options - Options for the hook.
 * @returns An object with `createQueryString` and `createPathname` functions.
 */
/**
 * Options for the useAppRouterCreatePath hook.
 */
interface UseAppRouterCreatePathOptions {
  /**
   * Whether to delete empty parameters from the query string.
   */
  deleteEmpty?: boolean;
}

/**
 * Returns functions to create a URL path with query parameters.
 * @param options - Options for the hook.
 * @returns An object with functions to create a query string and a URL path.
 */
export const useAppRouterCreatePath = ({
  deleteEmpty = true,
}: UseAppRouterCreatePathOptions = {}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /**
   * Creates a query string from a parameter name and value.
   * @param query - An object containing the query parameters.
   * @returns The query string.
   */
  const createQueryString = useCallback(
    (query: Record<string, string | Array<string> | undefined>) => {
      if (query) {
        const params = new URLSearchParams(searchParams as any);

        for (const [key, value] of Object.entries(query)) {
          if ((typeof value === "undefined" || value === null) && deleteEmpty) {
            params.delete(key);
          } else {
            params.set(key, value as string);
          }
        }

        return params.toString();
      }
    },
    [searchParams, deleteEmpty]
  );

  /**
   * Creates a URL path with query parameters.
   * @param query - An object containing the query parameters.
   * @returns The URL path.
   */
  const createPathname = useCallback(
    (query: Record<string, string | Array<string> | undefined>) => {
      const queryString = createQueryString(query);

      return `${pathname}${queryString ? `?${queryString}` : ""}`;
    },
    [createQueryString, pathname]
  );

  return useMemo(
    () => ({ createQueryString, createPathname }),
    [createQueryString, createPathname]
  );
};
