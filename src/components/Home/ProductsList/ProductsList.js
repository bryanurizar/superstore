import ProductItem from "../ProductItem/ProductItem";
import "./ProductsList.css";

function ProductsList(props) {
  const { products } = props;

  return (
    <section className="products-section">
      <div className="products-container">
        {products.map((product) => {
          return (
            <ProductItem
              avgRating={product.avgRating}
              description={product.description}
              imageUrl={product.imageUrl}
              isOnSale={product.isOnSale}
              name={product.name}
              price={product.price}
              stockCount={product.stockCount}
              key={product._id}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ProductsList;
