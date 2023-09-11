// Hooks
import { useCallback, useMemo } from "react";
import { useSearchParams, usePathname } from "next/navigation";

/**
 * Options for the `useAppRouterCreatePath` hook.
 */
export interface UseAppRouterCreatePathOptions {
  /**
   * Whether to delete empty parameters from the URL.
   */
  deleteEmpty?: boolean;
}

/**
 * A hook that creates a URL path with query parameters.
 * @param options - Options for the hook.
 * @returns An object with `createQueryString` and `createPathname` functions.
 */
export const useAppRouterCreatePath = ({
  deleteEmpty = true,
}: UseAppRouterCreatePathOptions = {}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /**
   * Creates a query string from a parameter name and value.
   * @param name - The name of the parameter.
   * @param value - The value of the parameter.
   * @returns The query string.
   */
  const createQueryString = useCallback(
    (name: string, value: string | undefined | any) => {
      const params = new URLSearchParams(searchParams as any);

      if ((typeof value === "undefined" || value === null) && deleteEmpty) {
        params.delete(name);
      } else {
        params.set(name, value as string);
      }

      return params.toString();
    },
    [searchParams]
  );

  /**
   * Creates a URL path with query parameters.
   * @param name - The name of the parameter.
   * @param value - The value of the parameter.
   * @returns The URL path.
   */
  const createPathname = useCallback(
    (name: string, value: string | undefined | any) => {
      const queryString = createQueryString(name, value);

      return `${pathname}?${queryString}`;
    },
    [createQueryString]
  );

  return useMemo(
    () => ({ createQueryString, createPathname }),
    [createQueryString, createPathname]
  );
};
