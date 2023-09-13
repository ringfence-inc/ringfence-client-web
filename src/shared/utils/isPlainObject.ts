export const isPlainObject = (val: any): boolean => {
  if (val === undefined || val === null || val.then) return false;
  return Object.prototype.toString.call(val) === "[object Object]";
};

export default isPlainObject;
