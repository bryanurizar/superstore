import "./Rating.css";
import { nanoid } from "nanoid";

function repeatSVG(starType, quantity) {
  const svgArray = [];
  for (let i = 0; i < quantity; i++) {
    const img = <img key={nanoid()} src={`/img/${starType}.svg`} alt="" />;
    svgArray.push(img);
  }
  return svgArray;
}

function generateRating(rating) {
  return [
    ...repeatSVG("full-star", Math.floor(rating)),
    ...repeatSVG("half-Star", rating - Math.floor(rating)),
    ...repeatSVG("empty-star", 5 - Math.ceil(rating)),
  ];
}

function Rating(props) {
  return <div className="rating">{generateRating(props.avgRating)}</div>;
}

export default Rating;
