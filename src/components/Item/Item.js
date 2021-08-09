import { useParams } from "react-router-dom";

function Item() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

export default Item;
