import { useState, useEffect } from "react";
import { getGnomes } from "../../services/gnomes.js";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import "./Products.css";

const Products = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getGnomes();
      setProducts(allProducts);
      console.log("Items", allProducts);
    };
    fetchProducts();
  }, []);
  return (
    <div className="product-page">
      <div className="product-heading">
        <h1>Gnomes Seeking Homes</h1>
      </div>
      <div className="products-container">
        {products.map((product, index) => (
          <ProductCard
            _id={product._id}
            image={product.image_url}
            name={product.name}
            price={product.price}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
