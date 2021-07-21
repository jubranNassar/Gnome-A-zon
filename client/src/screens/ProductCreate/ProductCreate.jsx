import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { createGnome } from '../../services/gnomes.js'
import Layout from '../../components/Layout/Layout.jsx'
import './ProductCreate.css'

function ProductCreate() {

  const [gnome, setGnome] = useState( {
    name: '',
    price: '',
    details: '',
    image_url: '',
    category: [],
    materials: '',
    seller: ''
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGnome({
      ...gnome,
      [name]: value
    })
  }

  const handleSelect = (e) => {
    const { name, value } = e.target
    setGnome({
      ...gnome,
      [name]: [value]
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const created = await createGnome(gnome);
    setCreated({ created })
  }

  if(isCreated) {
    return <Redirect to={'/gnomes'} />
  }

  return (
    <Layout>
      <form className='create-form' onSubmit={handleSubmit}>
        <label htmlFor="name-input">Gnome Name: </label>
        <input 
          type="text" 
          id="name-input"
          className="name-input"
          name="name"
          value={gnome.name}
          onChange={handleChange}
          required
          autoFocus
        />

        <label htmlFor="price-input">Price: </label>
        <input
          type="text" 
          id="price-input"
          className="price-input"
          name="price"
          value={gnome.price}
          onChange={handleChange}
          required
        />

        <label htmlFor="details-input">Details: </label>
        <textarea 
          id="details-input"
          className="details-input"
          name="details"
          value={gnome.details}
          onChange={handleChange}
          required
        />

        <label htmlFor="imageURL-input">Image URL: </label>
        <input 
          type="text" 
          id="imageURL-input"
          className="imageURL-input"
          name="image_url"
          value={gnome.image_url}
          onChange={handleChange}
          required
        />

        <label htmlFor="materials-input">Materials: </label>
        <input
          type="text" 
          id="materials-input"
          className="materials-input"
          name="materials"
          value={gnome.materials}
          onChange={handleChange}
          required
        />

        <label htmlFor="category-input">Category: </label>
        <input
          type="text" 
          id="category-input"
          className="category-input"
          name="category"
          value={gnome.category}
          onChange={handleSelect}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </Layout>
  )
}

export default ProductCreate;