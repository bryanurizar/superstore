import { useState, useEffect } from "react";

import ProductItem from "../ProductItem/ProductItem";
import "./ProductsList.css";

async function getProductData(url) {
  const response = await fetch(url);
  return response.json();
}

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductData("https://gp-super-store-api.herokuapp.com/item/list")
      .then((data) => setProducts(data.items))
      .catch(console.err);
  }, []);

  console.log(products);

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
