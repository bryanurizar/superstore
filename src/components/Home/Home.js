import ProductsList from "./ProductsList/ProductsList";

function Home(props) {
  return <ProductsList products={props.products} />;
}

export default Home;
