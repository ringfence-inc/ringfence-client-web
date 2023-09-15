export const getErrorMessage = (response: any) => {
  const error =
    response?.message ||
    response?.errorText ||
    response?.errorMessage ||
    response?.errorMessages ||
    response?.messages ||
    response?.statusText;

  const errorArr = Array.isArray(error) ? error : [error];

  return errorArr.join(", ");
};
