import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "../Home/Rating/Rating";

import "./Item.css";

function Item() {
  let { itemId } = useParams();
  const [product, setProduct] = useState([]);

  async function getItem(url) {
    try {
      const response = await fetch(url);
      return response.json();
    } catch (err) {
      console.log(err);
    }
  }

  useEffect((product) => {
    getItem(`https://gp-super-store-api.herokuapp.com/item/${itemId}`)
      .then((product) => setProduct(product))
      .catch((err) => console.log(err));
  });

  return (
    <section>
      <div class="img-section">
        <img className="img" src={product.imageUrl} alt="product-img"></img>
      </div>
      <div class="product-info">
        <h1>{product.name}</h1>
        <div className="product-rating">
          <Rating avgRating={product.avgRating} />
          <p className="stock-count">{product.stockCount}</p>
        </div>
        <p>{product.description}</p>
        <p className="product-price">£{product.price}</p>
        <div>
          <label for="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="0"
            max={product.stockCount}
          ></input>
        </div>
        <button>Add to Cart</button>
      </div>
    </section>
  );
}

export default Item;
