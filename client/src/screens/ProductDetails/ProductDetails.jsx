import { useState, useEffect } from "react";
import "./ProductDetails.css";
import { getGnome, deleteGnome } from "../../services/gnomes";
import Layout from "../../components/Layout/Layout.jsx";
import { useParams, Link, useHistory } from "react-router-dom";

function GnomeDetails(props) {
  const [gnome, setGnome] = useState({});
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchGnome = async () => {
      const gnome = await getGnome(id);
      setGnome(gnome);
      setLoaded(gnome);
    }

    fetchGnome();
    props.setScreen('detail')
  }, [id]);


  const handleDelete = async () => {
    await deleteGnome(gnome._id);
    history.push("/gnomes")
  }

  const showUserOptions = () => {
    if(props.user && gnome && Object.keys(gnome).length!==0) {
      if(props.user.id===gnome.seller._id) {
        return (
          <div id="buttons">
            <Link to={`/edit/${gnome._id}`}>
              <button className="btn-slide-left" id="edit">Edit</button>
            </Link>
            <button id="delete" onClick={handleDelete}>
              Delete
            </button>
          </div>
        ) 
      } else {
        return (
          <div className="seller-info-div">
            <p id="sold"><span>Sold by:</span> {gnome.seller.username}</p>
            <a id="email"href={`mailto: ${gnome.seller.email}`}><span>Email:</span> {gnome.seller.email}</a>
          </div>
        )
      } 
    } else if(gnome && Object.keys(gnome).length!==0) {
      return (
        <div className="seller-info-div">
          <p>Sold by: {gnome.seller.username}</p>
          <a href={`mailto: ${gnome.seller.email}`}>Email: {gnome.seller.email}</a>
        </div>
      )
    } else {
      return (

        <div className="seller-info-div">
          <p>Loading Seller Details...</p>
        </div>
      )
    }
  }

  if (!loaded) {
    return (<div className="loading-details">Loading...</div>)
  }

  return (
    <Layout user={props.user} screen={props.screen}>
      <div className="product-info">
        <div className="border">
          <div className="details-card">
            <div id="name">{gnome.name}</div>
            <div className="image-and-details">
              <div className="img-div">
                <img
                  className="details-img"
                  src={gnome.image_url}
                  alt={gnome.name}
                />
              </div>
              <div className="details">
                <div className="label-input">
                  <div className="labels">
                    <label htmlFor="price">Price:</label>
                  </div>
                  <div className="text">
                    <div id="price">${gnome.price}</div>
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
                      <div id="materials">{gnome.materials.join(", ")}</div>
                    </div>
                  </div>
                  <div className="label-input">
                    <div className="labels">
                      <label htmlFor="collection" className="details-label">
                        Collection:
                      </label>
                    </div>
                    <div className="text">
                      <div id="collection">{gnome.category.join(", ")}</div>
                    </div>
                  </div>
                  {showUserOptions()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default GnomeDetails;
