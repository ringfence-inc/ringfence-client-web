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
  const { page = 1, take = 12 } = (body as GetCollectionImagesRequest) || {};
  const images: TCollectionImage[] = [];

  for (let i = (page - 1) * take; i < page * take; i++) {
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
      src: faker.image.urlPicsumPhotos({ width: 1000, height: 1000 }),
      thumbnail: faker.image.urlPicsumPhotos({ width: 320, height: 320 }),
    };
    images.push(collection);
  }

  return {
    items: images,
    itemCount: 100,
    page,
    take,
  };
};

export default fakeGetCollectionImages;
