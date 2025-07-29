import { useSEO } from "../hooks/useSEO";

const SEO = ({ title, description, keywords, image, url, type, children }) => {
  useSEO({ title, description, keywords, image, url, type });

  return children || null;
};

export default SEO;
