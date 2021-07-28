import ProductItem from "../ProductItem/ProductItem";
import "./ProductsList.css";

function ProductsList() {
  // async function getProductData() {
  //   const response = await fetch(
  //     "https://gp-super-store-api.herokuapp.com/item/list"
  //   );
  //   const productData = await response.json();
  //   console.log(productData);
  // }

  // getProductData();

  return (
    <section className="products-section">
      <div className="products-container">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </section>
  );
}

export default ProductsList;
