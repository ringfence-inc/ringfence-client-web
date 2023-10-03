export type PaginationResponse = {
  page?: number;
  take?: number;
  itemCount?: number;
  pageCount?: number;
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
};

export type PaginationRequest = {
  page?: number;
  take?: number;
};
