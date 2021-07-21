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
    <Layout>
      <div className="product-edit">
        <div className="image-holder">
          <img className="edit-image" src={gnome.image_url} alt={gnome.name} />
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="edit-name">Name:</label>
          <input
            id="edit-name"
            value={gnome.name}
            name="name"
            required
            onChange={handleChange}
          />
        </form>
        <form onSubmit={handleSubmit}>
        <label htmlFor="edit-price">Price:</label>
          <input
            id="edit-price"
            value={gnome.price}
            name="price"
            required
            onChange={handleChange}
          />
        </form>
        <form onSubmit={handleSubmit}>
        <label htmlFor="edit-details">Details:</label>
          <input
            id="edit-details"
            value={gnome.details}
            required
            onChange={handleChange}
          />
        </form>
        <form onSubmit={handleSubmit}>
        <label htmlFor="edit-image-url">image URL:</label>
          <input
            id="edit-image-url"
            value={gnome.image_url}
            name="image_url"
            required
            onChange={handleChange}
          />
        </form>
        <form onSubmit={handleSubmit}>
        <label htmlFor="edit-material">Material:</label>
          <input
            id="edit-material"
            value={gnome.materials}
            name="materials"
            required
            onChange={handleChange}
          />
        </form>
        <form onSubmit={handleSubmit}>
        <label htmlFor="edit-collection">Collection:</label>
          <input
            id="edit-collection"
            value={gnome.category}
            name="category"
            required
            onChange={handleChange}
          />
        </form>
      </div>
    </Layout>
  );
}

export default ProductEdit;
