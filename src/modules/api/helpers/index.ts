export const handleResponse = (
  response: Response,
): void => {
  const { status } = response;
  if (status >= 400) {
    throw new Error('Reponse encountered error code!');
  }
  return;
};
