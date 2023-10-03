import { faker } from "@faker-js/faker";

// Types
import type {
  TCollectionStatus,
  TCollectionStatusTitle,
} from "@/modules/dashboard/api/apiGetCollections";

const fakeCollectionStatus = (): TCollectionStatus => {
  const collectionStatus: TCollectionStatus = {
    id: faker.number.int(),
    version: faker.system.semver(),
    created_at: faker.date.past().toISOString(),
    updated_at: faker.date.recent().toISOString(),
    title: faker.helpers.arrayElement([
      "checked",
      "detected",
      "in progress",
      "not checked",
    ] as TCollectionStatusTitle[]),
    description: faker.lorem.words(10),
  };

  return collectionStatus;
};

export default fakeCollectionStatus;
