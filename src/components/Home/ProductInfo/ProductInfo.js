// import PropTypes from "prop-types";

import Rating from "../Rating/Rating";
import "./ProductInfo.css";

function ProductInfo(props) {
  return (
    <div className="product-info">
      <p className="product-name">{props.name}</p>
      <div className="product-rating">
        <Rating avgRating={props.avgRating} />
        <p className="stock-count">{props.stockCount}</p>
      </div>
      <div className="product-price-sale">
        <p className="product-price">£{props.price}</p>
        <p className={props.isOnSale ? "on-sale" : null}>
          {props.isOnSale === true ? "On Sale" : null}
        </p>
      </div>
    </div>
  );
}

export default ProductInfo;
