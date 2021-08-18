import { useParams } from "react-router-dom";

function Item() {
  let { itemId } = useParams();
  console.log(itemId);
  return <h1>The product Id is: {itemId}</h1>;
}

export default Item;
