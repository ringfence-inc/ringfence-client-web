import { faker } from "@faker-js/faker";

// Utils
import fakeCollectionStatus from "./fakeCollectionStatus";

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
  const { page = 1, take = 12 } = (body as GetCollectionsRequest) || {};
  const collections: TCollection[] = [];

  for (let i = (page - 1) * take; i < page * take; i++) {
    const collection: TCollection = {
      id: i + 1,
      title: faker.lorem.words(3),
      count_generated_images: faker.number.int({ max: 100 }),
      count_uploaded_images: faker.number.int({ max: 100 }),
      status: fakeCollectionStatus(),
    };
    collections.push(collection);
  }

  return {
    items: collections,
    itemCount: 100,
    page,
    take,
  };
};

export default fakeGetCollections;
