import { faker } from "@faker-js/faker";

// Utils
import fakeCollectionStatus from "./fakeCollectionStatus";

// Types
import type { RestRequestConfig } from "@/shared/libs/rest";
import type {
  TCollectionImage,
  GetCollectionImagesResponse,
  GetCollectionImagesRequest,
} from "../../../../modules/dashboard-collections/api/apiGetCollectionImages";

export const fakeGetCollectionImages = ({
  body = {},
}: RestRequestConfig): GetCollectionImagesResponse => {
  const { page = 1, take = 12 } = (body as GetCollectionImagesRequest) || {};
  const images: TCollectionImage[] = [];

  for (let i = (page - 1) * take; i < page * take; i++) {
    const collection: TCollectionImage = {
      id: i + 1,
      title: faker.lorem.words(3),
      created_at: faker.date.past().toISOString(),
      status: fakeCollectionStatus(),
      s3_url: faker.image.urlPicsumPhotos({ width: 1000, height: 1000 }),
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
