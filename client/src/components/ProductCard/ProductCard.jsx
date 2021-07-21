import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <Link to={`/gnomes/${props._id}`}>
        <img id="image-card" src={props.image} alt="" />
        <div className="product-card-text">
          <p>{props.name}</p>
          <p>${props.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
