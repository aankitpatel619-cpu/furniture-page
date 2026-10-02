function ProductCard({ product }) {
  return (
    <div className="product-card col-12 col-md-6 col-lg-4 p-0">

      <div className="product-image">

        <img
          src={product.thumbnail}
          alt={product.title}
        />

        {product.discountPercentage > 10 && (
          <span className="product-badge discount">
            -{Math.round(product.discountPercentage)}%
          </span>
        )}

      </div>

      <div className="product-info">

        <h3>{product.title}</h3>

        <p>{product.description}</p>

        <div className="price">
          <strong>
            ${product.price}
          </strong>
        </div>

      </div>

    </div>
  );
}

export default ProductCard;