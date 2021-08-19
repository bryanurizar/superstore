import { useParams } from "react-router-dom";
import Rating from "../Home/Rating/Rating";

import "./Item.css";

function Item(props) {
  let { itemId } = useParams();

  const [product] = props.products.filter((product) => product._id === itemId);
  console.log(product);

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
