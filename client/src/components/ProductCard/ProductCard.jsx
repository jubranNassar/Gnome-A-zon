import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <img src={props.image} alt="" />
      <div className="product-card-text">
        <p>{props.name}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
