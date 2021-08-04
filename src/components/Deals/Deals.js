import ProductsList from "../Home/ProductsList/ProductsList";

import "./Deals.css";

function Deals(props) {
  const { products } = props;
  let productsOnSale = products.filter((product) => product.isOnSale);

  return (
    <div className="deals-container">
      {productsOnSale.length > 0 ? (
        <ProductsList products={productsOnSale} />
      ) : (
        <p>Sorry, there are no items on sale at this time!</p>
      )}
    </div>
  );
}
export default Deals;
