import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout.jsx";
import { getGnome, updateGnome } from "../../services/gnomes";
import { useParams, Redirect } from "react-router-dom";
import "./ProductEdit.css";

function ProductEdit(props) {
  const [gnome, setGnome] = useState({
    name: "",
    price: "",
    details: "",
    materials: "",
    category: "",
    image_url: "",
  });

  const [updated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchGnome = async () => {
      const gnome = await getGnome(id);
      setGnome(gnome);
    };
    fetchGnome();
  }, [id]);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setGnome({
      ...gnome,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updated = await updateGnome(id, gnome);
    setUpdated(updated);
  };

  if (updated) {
    return <Redirect to={`/gnomes/${id}`} />;
  }

  return (
    <Layout user={props.user}>
      <div className="product-edit">
        <div className="border-edit">
          <div className="edit-card">
            <div className="form">
              <form className="form" onSubmit={handleSubmit}>
                <div className="name-edit">
                  <input
                    id="edit-name"
                    value={gnome.name}
                    name="name"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="image-and-form">
                  <div className="image-holder">
                    <img
                      className="edit-image"
                      src={gnome.image_url}
                      alt={gnome.name}
                    />
                  </div>
                  <div className="edit-form-inputs">
                    <div className="edit-label-input">
                      <div className="edit-label">
                        <label htmlFor="edit-price">Price:</label>
                      </div>
                      <div className="edit-text">
                        <input
                          id="edit-price"
                          value={gnome.price}
                          name="price"
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="edit-label-input">
                      <div className="edit-label">
                        <label htmlFor="edit-details">Details:</label>
                      </div>
                      <div className="edit-text">
                        <textarea
                          rows={5}
                          id="edit-details"
                          value={gnome.details}
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="edit-label-input">
                      <div className="edit-label">
                        <label htmlFor="edit-image-url">image URL:</label>
                      </div>
                      <div className="edit-text">
                        <input
                          id="edit-image-url"
                          value={gnome.image_url}
                          name="image_url"
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="edit-label-input">
                      <div className="edit-label">
                        <label htmlFor="edit-material">Material:</label>
                      </div>
                      <div className="edit-text">
                        <input
                          id="edit-material"
                          value={gnome.materials}
                          name="materials"
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="edit-label-input" id="collection-input">
                      <div className="edit-label">
                        <label id="collection-label" htmlFor="edit-collection">
                          Collection:
                        </label>
                      </div>
                      <div className="edit-text">
                        <input
                          id="edit-collection"
                          value={gnome.category}
                          name="category"
                          required
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button-container">
                  <button type="submit" className="save-button">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductEdit;
