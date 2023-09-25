import { faker } from "@faker-js/faker";

// Types
import type { RestRequestConfig } from "@/shared/libs/rest";
import type {
  GetCollectionsRequest,
  GetCollectionsResponse,
  TCollection,
} from "@/modules/dashboard/api/apiGetCollections";

export const fakeGetCollections = ({
  body = {},
}: RestRequestConfig): GetCollectionsResponse => {
  const { page = 1, limit = 12 } = (body as GetCollectionsRequest) || {};
  const collections: TCollection[] = [];

  for (let i = (page - 1) * limit; i < page * limit; i++) {
    const collection: TCollection = {
      id: i + 1,
      name: faker.lorem.words(3),
      created_at: faker.date.past().toISOString(),
      createdCount: faker.number.int(100),
      status: faker.helpers.arrayElement([
        "not_checked",
        "detected",
        "in_progress",
        "checked",
      ]),
    };
    collections.push(collection);
  }

  return {
    data: collections,
    meta: {
      total: 100,
      page,
      limit,
    },
  };
};

export default fakeGetCollections;
