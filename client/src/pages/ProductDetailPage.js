import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import ProductDetail from "../components/ProductDetail";
import SEO from "../components/SEO"

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/items/${id}`)
      .then((response) => {
        setProduct(response.data.item);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <SEO
        title={`${product.title} - Mercado Libre`}
        description={`Comprá ${product.title} en Mercado Libre Colombia. ${
          product.condition === "new" ? "Producto nuevo" : "Producto usado"
        } con ${
          product.free_shipping ? "envío gratis" : "envío pago"
        }. Precio: $${product.price.amount}`}
        keywords={`${product.title}, ${product.seller}, mercado libre, comprar online`}
        image={product.picture}
        url={window.location.href}
        type="product"
      />
      <div className="container">
        <div className="container-search">
          <section className="container-search__results">
            <Breadcrumb categories={product.category_path_from_root} />
            <ProductDetail product={product} />
          </section>
        </div>
      </div>
    </>
  );
}

export default ProductDetailPage;
