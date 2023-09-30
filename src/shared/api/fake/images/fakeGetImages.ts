import { faker } from "@faker-js/faker";

// Types
import type { RestRequestConfig } from "@/shared/libs/rest";
import type {
  GetImagesRequest,
  GetImagesResponse,
  GetImagesImage,
} from "@/modules/dashboard/api/apiGetImages";

export const fakeGetImages = ({
  body = {},
}: RestRequestConfig): GetImagesResponse => {
  const { page = 1, take = 12 } = (body as GetImagesRequest) || {};
  const images: GetImagesImage[] = [];

  for (let i = (page - 1) * take; i < page * take; i++) {
    const image: GetImagesImage = {
      id: i + 1,
      src: faker.image.urlPicsumPhotos({ width: 1000, height: 1000 }),
      thumbnail: faker.image.urlPicsumPhotos({ width: 320, height: 320 }),
    };
    images.push(image);
  }

  return {
    items: images,
    itemCount: 100,
    page,
    take,
  };
};

export default fakeGetImages;
