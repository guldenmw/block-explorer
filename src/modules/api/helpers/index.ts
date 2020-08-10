export const handleResponse = (response: Response): void => {
  if (response?.status >= 400) {
    throw new Error('Reponse encountered error code!');
  }
  return;
};
