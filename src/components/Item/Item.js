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

  useEffect(() => {
    getItem(`https://gp-super-store-api.herokuapp.com/item/${itemId}`)
      .then((product) => setProduct(product))
      .catch((err) => console.log(err));
  }, [itemId]);

  // const noImageUrl =
  //   "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";

  return (
    <section>
      <div className="item-container">
        <div class="img-section">
          <img className="img" src={product.imageUrl} alt="product-img"></img>
        </div>
        <div class="product-info item-pg">
          <h1>{product.name}</h1>
          <div className="product-rating">
            <Rating avgRating={product.avgRating} />
            <p className="stock-count">{product.stockCount}</p>
          </div>
          <p>{product.description}</p>
          <p className="product-price">
            £{product.price && product.price.toFixed(2)}
          </p>
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
          <button className="add-cart">Add to Cart</button>
        </div>
      </div>
    </section>
  );
}

export default Item;
