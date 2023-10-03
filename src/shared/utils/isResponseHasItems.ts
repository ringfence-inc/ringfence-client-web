// Types
import type { PaginationResponse } from "../api/types";

export const isResponseHasItems = (
  response?: Partial<PaginationResponse> | any
) => {
  const { items, itemCount } = response || {};

  return typeof itemCount === "number"
    ? itemCount > 0
    : Array.isArray(items)
    ? items.length > 0
    : false;
};

export default isResponseHasItems;
