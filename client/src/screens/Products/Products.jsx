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
      console.log('Items',allProducts)
    };
    fetchProducts();
  },[]);
  return (
    <div>
      <h1>Gnomes Seeking Homes</h1>
      {products.map((product) => (
        <ProductCard image={product.image_url} name={product.name} price={product.price}/>
        ))}
    </div>
  );
};

export default Products;
