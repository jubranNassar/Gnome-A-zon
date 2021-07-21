import { useState, useEffect } from "react";
import { getGnomes } from "../../services/gnomes.js";
import "./Products.css";

const Products = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getGnomes();
      setProducts(allProducts);
      console.log('Items',allProducts)
    };
    fetchProducts();
  },[]);
  return (
    <div>
      <h1>Gnomes Seeking Homes</h1>
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
