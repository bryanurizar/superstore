import ProductInfo from "../ProductInfo/ProductInfo";
import PropTypes from "prop-types";

import "./ProductsItem.css";

function ProductItem(props) {
  return (
    <div className="product-item">
      <div className="product-img">
        <img src={props.imageUrl} alt="product-img"></img>
      </div>
      <ProductInfo
        avgRating={props.avgRating}
        description={props.description}
        isOnSale={props.isOnSale}
        name={props.name}
        price={props.price}
        stockCount={props.stockCount}
      />
      <div className="button">
        <button>View Item</button>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  avgRating: PropTypes.number,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  isOnSale: PropTypes.bool,
  name: PropTypes.string,
  price: PropTypes.number,
  stockCount: PropTypes.number,
};

export default ProductItem;
