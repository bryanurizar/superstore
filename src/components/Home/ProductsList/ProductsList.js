import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import ProductItem from "../ProductItem/ProductItem";
import "./ProductsList.css";

async function getProductsData(url) {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (err) {
    throw err;
  }
}

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsData("https://gp-super-store-api.herokuapp.com/item/list")
      .then((data) => setProducts(data.items))
      .catch(console.err);
  }, []);

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
              name={5}
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

ProductsList.propTypes = {
  avgRating: PropTypes.number,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  isOnSale: PropTypes.bool,
  name: PropTypes.string,
  price: PropTypes.number,
  stockCount: PropTypes.number,
  key: PropTypes.string,
};

export default ProductsList;
