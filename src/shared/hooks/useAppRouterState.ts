/**
 * A custom hook that provides a state management for query parameters in the URL using Next.js router.
 * @param key - The key of the query parameter to manage.
 * @param defaultValue - The default value of the query parameter. It can be a string or an array of strings.
 * @param method - The method to use when updating the URL. It can be 'replace' or 'push'. Default is 'replace'.
 * @param deleteEmpty - A boolean indicating whether to delete the query parameter if its value is empty. Default is true.
 * @returns An array containing the current value of the query parameter, a function to update the value, the Next.js router object, and an object containing utility functions to create URL paths.
 */
// Hooks
import { useCallback, useEffect, useMemo } from "react";
import { useAppRouterCreatePath } from "./useAppRouterCreatePath";
import { useRouter, useSearchParams } from "next/navigation";

export type UseAppRouterStateReturn = [
  currentValue: string | Array<string> | undefined,
  setQueryState: (
    value?: string | Array<string> | undefined,
    options?: any
  ) => void,
  router: any,
  createPathProps: any
];

export const useAppRouterState = (
  key: string,
  defaultValue?: string | Array<string> | undefined,
  method: "replace" | "push" = "replace",
  deleteEmpty = true
): UseAppRouterStateReturn => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { replace } = router;
  const createPathProps = useAppRouterCreatePath({ deleteEmpty });
  const { createPathname } = createPathProps;
  const routerMethod = router[method] || replace;

  const setQueryState = useCallback(
    (value?: string | Array<string> | undefined, options?: any) => {
      const pathname = createPathname(key, value);

      routerMethod(pathname, options);
    },
    [createPathname, routerMethod]
  );

  const initValue = useMemo(() => searchParams.getAll(key), [key]);

  const currentSearchValue = useMemo(
    () => searchParams.getAll(key),
    [searchParams, key]
  );

  const currentValue = useMemo(
    () =>
      currentSearchValue?.length > 1
        ? currentSearchValue
        : currentSearchValue[0],
    [currentSearchValue]
  );

  const joinedInitialValue = useMemo(
    () => (Array.isArray(initValue) ? initValue?.join(",") : initValue),
    initValue
  );

  const joinedDefaultValue = useMemo(
    () =>
      Array.isArray(defaultValue) ? defaultValue?.join(",") : defaultValue,
    [defaultValue]
  );

  useEffect(() => {
    if (joinedInitialValue !== joinedDefaultValue) {
      setQueryState(defaultValue);
    }
  }, [joinedInitialValue, joinedDefaultValue]);

  return [currentValue, setQueryState, router, createPathProps];
};
