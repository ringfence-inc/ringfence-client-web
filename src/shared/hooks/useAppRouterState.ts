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

// Utils
import isPlainObject from "../utils/isPlainObject";

// Types
export type UseAppRouterStateReturn = [
  currentValue:
    | Record<string, string | Array<string> | undefined>
    | string
    | Array<string>
    | undefined,
  setQueryState: (
    value?:
      | Record<string, string | Array<string> | undefined>
      | string
      | Array<string>
      | undefined,
    options?: any
  ) => void,
  router: any,
  createPathProps: any
];

export interface UseAppRouterStateProps {
  key: string | Array<string>;
  defaultValue?:
    | Record<string, string | Array<string> | undefined>
    | string
    | Array<string>
    | undefined;
  method?: "replace" | "push";
  deleteEmpty?: boolean;
}

/**
 * A hook that manages the state of the app router.
 * @param key - The key or keys to manage in the router state.
 * @param defaultValue - The default value for the key or keys.
 * @param method - The method to use when updating the router state.
 * @param deleteEmpty - Whether to delete empty values from the router state.
 * @returns An array containing the current router state, a function to update the router state, the router object, and an object containing utility functions for creating paths.
 */
export const useAppRouterState = ({
  key,
  defaultValue,
  method = "replace",
  deleteEmpty = true,
}: UseAppRouterStateProps): UseAppRouterStateReturn => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { replace } = router;
  const routerMethod = router[method] || replace;

  const createPathProps = useAppRouterCreatePath({ deleteEmpty });
  const { createPathname } = createPathProps;

  const joinedKey = useMemo(
    () => (Array.isArray(key) ? key.join("") : key),
    [key]
  );

  const keysArr = useMemo(
    () => (Array.isArray(key) ? key : [key]),
    [joinedKey]
  );

  /**
   * A function to update the router state.
   * @param value - The new value for the router state.
   * @param options - Additional options for updating the router state.
   */
  const setQueryState = useCallback(
    (
      value?:
        | Record<string, string | Array<string> | undefined>
        | string
        | Array<string>
        | undefined,
      options?: any
    ) => {
      let pathname;

      const isPlainValue = isPlainObject(value);

      if (keysArr.length === 1) {
        const key = keysArr[0];

        if (isPlainValue) {
          pathname = createPathname({ [key]: (value as any)?.[key] });
        } else {
          pathname = createPathname({ [key]: value as any });
        }
      }

      if (isPlainValue) {
        const valuesByKey = keysArr.reduce((acc, key) => {
          if (value?.hasOwnProperty?.(key)) {
            acc[key] = (value as any)?.[key];
          }
          return acc;
        }, {} as any);

        pathname = createPathname(valuesByKey);
      }

      if (!pathname) return;

      routerMethod(pathname, { scroll: false, ...options });
    },
    [createPathname, routerMethod]
  );

  const currentValues = useMemo(() => {
    const output: Record<string, string | Array<string>> = {};
    keysArr.forEach((key) => {
      const value = searchParams.getAll(key);
      output[key] = value?.length > 1 ? value : value[0];
    });
    return output;
  }, [keysArr, searchParams]);

  useEffect(() => {
    if (!defaultValue) return;
    setQueryState(defaultValue);
  }, []);

  const currentValuesChecked = useMemo(() => {
    if (keysArr.length === 1) {
      const key = keysArr[0];
      const value = currentValues[key];
      return value;
    }

    return currentValues;
  }, [currentValues, keysArr]);

  return [currentValuesChecked, setQueryState, router, createPathProps];
};
