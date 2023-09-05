export const dataToURL = (data: Record<string, any> = {}) => {
  return Object.keys(data)
    .map((key) => {
      const value = data[key];

      return encodeURIComponent(key) + '=' + encodeURIComponent(value);
    })
    .join('&');
};
