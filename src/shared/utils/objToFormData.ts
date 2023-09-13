// Utils
import { serialize, Options } from "object-to-formdata";

// Options
export const objToFormDataOptions: Options = {};

export const objToFormData = (obj: any, options?: Options, ...args: any) => {
  if (!obj) return new FormData();

  return serialize(
    obj,
    { ...objToFormDataOptions, ...(options || {}) },
    ...args
  );
};

export default objToFormData;
