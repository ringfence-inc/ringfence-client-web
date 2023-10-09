import type {
  CreateCollectionRequest,
  CreateCollectionResponse,
} from "../../../../modules/dashboard-collections/api/apiCreateCollection";
import type { FakeRestConfig } from "@/shared/libs/fake-rest";

export const fakeCreateCollection = async (
  options?: FakeRestConfig
): Promise<CreateCollectionResponse> => {
  return {
    success: true,
  };
};

export default fakeCreateCollection;
