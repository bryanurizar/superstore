import ProductInfo from "../ProductInfo/ProductInfo";

import "./ProductsItem.css";

function ProductItem(props) {


  return (
    <div className="product-item">
      <div className="product-img">
        <img src={props.imageUrl} alt="product-img" ></img>
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

export default ProductItem;
