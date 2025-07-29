export const getApiUrl = (endpoint) => {
  const isDevelopment =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";

  if (isDevelopment) {
    return endpoint;
  }

  return `${window.location.origin}${endpoint}`;
};
