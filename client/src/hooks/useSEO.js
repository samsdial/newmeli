import { useEffect } from "react";

export const useSEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  siteName = "Mercado Libre",
}) => {
  useEffect(() => {
    // Actualizar title
    if (title) {
      document.title = title;
    }

    // Meta tags básicas
    const metaTags = [
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "robots", content: "index, follow" },

      // Open Graph
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: image },
      { property: "og:url", content: url },
      { property: "og:type", content: type },
      { property: "og:site_name", content: siteName },

      // Twitter Cards
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ];

    // Crear o actualizar meta tags
    metaTags.forEach(({ name, property, content }) => {
      if (!content) return;

      const selector = name
        ? `meta[name="${name}"]`
        : `meta[property="${property}"]`;
      let metaTag = document.querySelector(selector);

      if (metaTag) {
        metaTag.setAttribute("content", content);
      } else {
        metaTag = document.createElement("meta");
        if (name) metaTag.setAttribute("name", name);
        if (property) metaTag.setAttribute("property", property);
        metaTag.setAttribute("content", content);
        document.head.appendChild(metaTag);
      }
    });

    // Canonical URL
    if (url) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute("href", url);
      } else {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        canonical.setAttribute("href", url);
        document.head.appendChild(canonical);
      }
    }
  }, [title, description, keywords, image, url, type, siteName]);
};
