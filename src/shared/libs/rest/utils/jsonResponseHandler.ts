import { RequestError } from '../RequestError';

export const jsonResponseHandler = async (response: Response) => {
  const json = await response.json();

  if (json?.error) {
    throw new RequestError(json);
  }

  return json;
};
