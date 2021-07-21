import { useState, useEffect } from "react";
import { getGnomes } from "../src/services/gnomes.js";
import "./Products.css";

const Products = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getGnomes();
      setProducts(allProducts);
    };
    fetchProducts();
  });
  return (
    <div>
      {products.map((product) => (
        <main>
          <h1>{product.name}</h1>
          <img src={product.image} alt="" />
        </main>
      ))}
    </div>
  );
};

export default Products;
