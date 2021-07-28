import ProductInfo from "../ProductInfo/ProductInfo";

import "./ProductsItem.css";

function ProductItem() {
  return (
    <div className="product-item">
      <div className="product-img">
        <img alt="product-img"></img>
      </div>
      <ProductInfo />
      <div className="button">
        <button>View Item</button>
      </div>
    </div>
  );
}

export default ProductItem;
