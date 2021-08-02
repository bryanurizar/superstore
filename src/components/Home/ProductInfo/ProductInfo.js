// import PropTypes from "prop-types";

import Rating from "../Rating/Rating";
import "./ProductInfo.css";

function ProductInfo(props) {
  return (
    <div className="product-info">
      <h3 className="product-name">{props.name}</h3>
      <div className="product-rating-stock">
        <Rating />
        <p>{props.avgRating}</p>
      </div>
      <div className="product-price-sale">
        <p>{props.price}</p>
        <p>{props.isOnSale}</p>
      </div>
    </div>
  );
}

export default ProductInfo;
