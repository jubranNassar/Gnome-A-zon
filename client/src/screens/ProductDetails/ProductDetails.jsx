import { useState, useEffect } from "react";
import "./ProductDetails.css";
import { getGnome, deleteGnome } from "../../services/gnomes";
import Layout from "../../components/Layout/Layout.jsx";
import { useParams, Link } from "react-router-dom";

function GnomeDetails(props) {
  const [gnome, setGnome] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchGnome = async () => {
      const gnome = await getGnome(id);
      console.log("detail", gnome);
      setGnome(gnome);
      setLoaded(gnome);
    };
    fetchGnome();
  }, [id]);

  if (!loaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout user={props.user}>
      <div className="product-info">
        <div className="border">
          <div className="details-card">
            
            <img
              className="details-img"
              src={gnome.image_url}
              alt={gnome.name}
            />
            <div className="details">
              <div className="labels">
                <div className="name-and-price">
                <div id="name">{gnome.name}</div>
                <div id="price">${gnome.price}</div>
              </div>
              <div className="text">
              </div>
              </div>
              <div className="label-input">
                <div className="labels">
                  <label
                    htmlFor="description"
                    className="details-label"
                    id="desc-label"
                  >
                    Details:
                  </label>
                </div>
                <div className="text">
                  <div id="description">{gnome.details}</div>
                </div>
              </div>
              <div className="label-input">
                <div className="labels">
                  <label htmlFor="materials" className="details-label">
                    Materials:
                  </label>
                </div>
                <div className="text">
                  <div id="materials">{gnome.materials}</div>
                </div>
              </div>
              <div className="label-input">
                <div className="labels">
                  <label htmlFor="collection" className="details-label">
                    Collection:
                  </label>
                </div>
                <div className="text">
                  <div id="collection">{gnome.category}</div>
                </div>
              </div>
              <div id="buttons">
                <Link to={`/edit/${gnome._id}`}>
                  <button id="edit">Edit</button>
                </Link>
                <button id="delete" onClick={() => deleteGnome(gnome._id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default GnomeDetails;
