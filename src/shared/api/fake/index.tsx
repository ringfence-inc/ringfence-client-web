// Images api
import fakeGetImages from "./images/fakeGetImages";

// Collections api
import fakeGetCollections from "./collections/fakeGetImages";
import fakeCreateCollection from "./collections/fakeCreateCollection";

export const fakeApi = {
  auth: {},
  images: {
    get: fakeGetImages,
  },
  collections: {
    get: fakeGetCollections,
    post: fakeCreateCollection,
  },
};

export default fakeApi;
