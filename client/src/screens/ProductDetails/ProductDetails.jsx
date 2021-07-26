import { useState, useEffect } from "react";
import "./ProductDetails.css";
import { getGnome, deleteGnome } from "../../services/gnomes";
import Layout from "../../components/Layout/Layout.jsx";
import { useParams, Link, useHistory } from "react-router-dom";

function GnomeDetails(props) {
  const [gnome, setGnome] = useState({});
  const [loaded, setLoaded] = useState(true);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchGnome = async () => {
      const gnome = await getGnome(id);
      setGnome(gnome);
      setLoaded(gnome);
    }

    fetchGnome();
  }, [id]);


  const handleDelete = async () => {
    await deleteGnome(gnome._id);
    history.push("/gnomes")
  }

  const showUserOptions = () => {
    console.log(gnome);
    console.log(props.user)
    if(props.user && gnome && Object.keys(gnome).length!==0) {
      if(props.user.id===gnome.seller._id) {
        console.log(gnome);
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
            <p>Sold by: {gnome.seller.username}</p>
            <a href={`mailto: ${gnome.seller.email}`}>Email: {gnome.seller.email}</a>
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
    return (<h1>Loading...</h1>)
  }

  return (
    <Layout user={props.user}>
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
