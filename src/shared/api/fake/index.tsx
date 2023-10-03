// Images api
import fakeGetImages from "./images/fakeGetImages";

// Collections api
import fakeGetCollections from "./collections/fakeGetCollections";
import fakeCreateCollection from "./collections/fakeCreateCollection";
import fakeGetCollectionImages from "./collections/fakeGetColletionImages";

export const fakeApi = {
  auth: {},
  images: {
    get: fakeGetImages,
  },
  org: {
    collections: {
      get: fakeGetCollections,
      post: fakeCreateCollection,
    },
  },
  collection: {
    get: fakeGetCollectionImages,
  },
};

export default fakeApi;
