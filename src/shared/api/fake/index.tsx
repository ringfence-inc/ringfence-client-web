// Images api
import fakeGetImages from "./images/fakeGetImages";

export const fakeApi = {
  auth: {},
  images: {
    get: fakeGetImages,
  },
};

export default fakeApi;
