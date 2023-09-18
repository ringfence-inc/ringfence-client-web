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
  const { page = 1, limit = 12 } = (body as GetImagesRequest) || {};
  const images: GetImagesImage[] = [];

  for (let i = (page - 1) * limit; i < page * limit; i++) {
    const image: GetImagesImage = {
      id: i + 1,
      src: faker.image.urlPicsumPhotos({ width: 320, height: 320 }),
    };
    images.push(image);
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

export default fakeGetImages;
