// import PropTypes from "prop-types";

import Rating from "../Rating/Rating";

function ProductInfo(props) {
  return (
    <div>
      <h3>Basketball</h3>
      <div>
        <Rating />
        <h6>43</h6>
      </div>
      <div>
        <h6>6.99</h6>
        <h6>On Sale</h6>
      </div>
    </div>
  );
}

// ProductInfo.propTypes = {
//   isOnSale: PropTypes.bool,
//   stockCount: PropTypes.number,
//   _id: PropTypes.string,
//   name: PropTypes.string,
//   description: PropTypes.string,
//   price: PropTypes.number,
//   avgRating: PropTypes.number,
//   imageUrl: PropTypes.string,
// };

export default ProductInfo;

// {
//     "isOnSale": false,
//     "stockCount": 2,
//     "_id": "5fbfff7d58aa65167efb52b9",
//     "name": "Bag Pipes",
//     "description": "Your mom won't be able to wait to hear you practice!",
//     "price": 120,
//     "avgRating": 0,
//     "imageUrl": "https://st-super-store.s3-us-west-2.amazonaws.com/images/bag_pipes.jpg"
//   }
