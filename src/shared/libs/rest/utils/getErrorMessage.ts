export const getErrorMessage = (response: any) => {
  const error =
    response?.statusText ||
    response?.message ||
    response?.errorText ||
    response?.errorMessage ||
    response?.errorMessages ||
    response?.messages;

  const errorArr = Array.isArray(error) ? error : [error];

  return errorArr.join(', ');
};
