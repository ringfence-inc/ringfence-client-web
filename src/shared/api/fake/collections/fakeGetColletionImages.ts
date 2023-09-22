import { faker } from "@faker-js/faker";

// Types
import type { RestRequestConfig } from "@/shared/libs/rest";
import type {
  TCollectionImage,
  GetCollectionImagesResponse,
  GetCollectionImagesRequest,
} from "@/modules/dashboard/api/apiGetCollectionImages";

export const fakeGetCollectionImages = ({
  body = {},
}: RestRequestConfig): GetCollectionImagesResponse => {
  const { page = 1, limit = 12 } = (body as GetCollectionImagesRequest) || {};
  const images: TCollectionImage[] = [];

  for (let i = (page - 1) * limit; i < page * limit; i++) {
    const collection: TCollectionImage = {
      id: i + 1,
      name: faker.lorem.words(3),
      created_at: faker.date.past().toISOString(),
      status: faker.helpers.arrayElement([
        "not_checked",
        "detected",
        "in_progress",
        "checked",
      ]),
      src: faker.image.urlPicsumPhotos({ width: 320, height: 320 }),
      thumbnail: faker.image.urlPicsumPhotos({ width: 160, height: 160 }),
    };
    images.push(collection);
  }

  return {
    data: images,
    meta: {
      total: 100,
      page,
      limit,
    },
  };
};

export default fakeGetCollectionImages;
