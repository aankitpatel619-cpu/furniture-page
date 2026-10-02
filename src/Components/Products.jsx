import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/furniture")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="products-section">
        <h2>Our Products</h2>
        <p>Loading products...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="products-section">
        <h2>Our Products</h2>
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section className="products-section">

      <div className="section-heading">
        <h2>Our Products</h2>
      </div>

      <div className="products-container row g-4">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

      <button className="show-more">
        Show More
      </button>

    </section>
  );
}

export default Products;