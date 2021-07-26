import { useState, useEffect } from "react";
import { getGnomes } from "../../services/gnomes.js";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import Layout from "../../components/Layout/Layout.jsx";
import "./Products.css";

const Products = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getGnomes();
      setProducts(allProducts);
    };
    fetchProducts();
  }, []);
  return (
    <Layout user={props.user}>
      <div className="product-page test">
        <div className="product-heading">
          <p>Gnomes Seeking Homes</p>
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
    </Layout>
  );
};

export default Products;
