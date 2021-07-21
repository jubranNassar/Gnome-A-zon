

const ProductCard = (props) => {
  return (
    <div>
     <img src={product.image_url} alt="" />
          <h1>{product.name}</h1>
          <p>{product.price}</p>
    </div>
  );
};

export default ProductCard;