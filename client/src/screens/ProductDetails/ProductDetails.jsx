import { useState, useEffect } from "react";
import "./ProductDetails.css";
import { getGnome, deleteGnome } from "../../services/gnomes"
import  Layout  from "../../components/Layout/Layout.jsx";
import { useParams, Link } from "react-router-dom";


function GnomeDetails(props) {
  const [gnome, setGnome] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchGnome = async () => {
      const gnome = await getGnome(id);
      console.log('detail',gnome)
      setGnome(gnome);
      setLoaded(gnome);
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
            <button className="delete" onClick={() => deleteGnome(gnome._id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default GnomeDetails;
