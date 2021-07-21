import { useState, useEffect } from "react";
import "./ProductDetail.css";
import { Layout } from "../../components/Layout/Layout.jsx";
import { useParams, Link } from "react-router-dom";

function GnomeDetails(props) {
  const [gnome, setGnome] = useState(null);
  const [loaded, setLoaded] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchGnome = async () => {
      const gnome = await getGnome(id);
      setGnome(gnome);
      setLoaded(false);
    };
    fetchGnome();
  }, [id]);

  if (!loaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout>
      <div className="product-info">
        <img className="details-img" src={gnome.image_url} alt={gnome.name} />
        <div className="deails">
          <div className="name">{gnome.name}</div>
          <div className="price">{gnome.price}</div>
          <div className="description">{gnome.details}</div>
          <div className="material">{gnome.material}</div>
          <div className="collection">{gnome.category}</div>
          <div className="buttons">
            <Link className="edit" to={`/edit/${gnome._id}`}>
              Edit
            </Link>
            <button className="delete" onClick={() => deletGnome(gnome._id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetails;
