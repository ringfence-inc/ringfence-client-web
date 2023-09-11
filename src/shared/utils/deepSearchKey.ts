/**
 * Searches for a key in an object or array and returns its value.
 * @param obj - The object or array to search in.
 * @param key - The key to search for. Can be a string with dot notation or an array of strings.
 * @returns The value of the key if found, otherwise undefined.
 */
export const deepSearchKey = (
  obj: Record<string, any> | Array<any>,
  key: Array<string> | string
): any => {
  if (typeof obj !== "object") {
    return undefined;
  }

  const keys = Array.isArray(key) ? key : key.split(".");
  let value: any = obj;

  for (let i = 0; i < keys.length; i++) {
    const currentKey = keys[i];
    value = value[currentKey];

    if (typeof value === "undefined") {
      return undefined;
    }
  }

  return value;
};
