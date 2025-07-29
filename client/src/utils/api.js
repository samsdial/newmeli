export const getApiUrl = (endpoint) => {
  // Detectar si estamos en desarrollo por la presencia del puerto 3000
  const isDevelopment =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";

  if (isDevelopment) {
    return endpoint;
  }

  return `${window.location.origin}${endpoint}`;
};
