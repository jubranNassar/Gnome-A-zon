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
      <div className='forms-screen'>
        <div className='forms-card'>
          <h3 className='form-title'>Sell a Gnome</h3>
          <form className='create-form' onSubmit={handleSubmit}>

            <div className='form-label-input-div'>
              <div className="label-div">
                  <label htmlFor="name-input">Gnome Name:</label>
                </div>
              <input 
                type="text" 
                id="name-input"
                className="name-input form-input"
                name="name"
                value={gnome.name}
                onChange={handleChange}
                required
                autoFocus
              />
            </div>

            <div className='form-label-input-div'>
              <div className="label-div">
                <label htmlFor="price-input">Price: </label>
              </div>
              <input
                  type="text" 
                id="price-input"
                className="price-input form-input"
                name="price"
                value={gnome.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className='form-label-input-div'>
              <div className="label-div">
                <label htmlFor="details-input">Details: </label>
              </div>
              <textarea 
                id="details-input"
                className="details-input form-input"
                name="details"
                rows = "4"
                value={gnome.details}
                onChange={handleChange}
                required
              />
            </div>

            <div className='form-label-input-div'>
              <div className="label-div">
                <label htmlFor="imageURL-input">Image URL: </label>
              </div>
              <input 
                type="text" 
                id="imageURL-input"
                className="imageURL-input form-input"
                name="image_url"
                value={gnome.image_url}
                onChange={handleChange}
                required
            />
            </div>

            <div className='form-label-input-div'>  
              <div className="label-div">   
                <label htmlFor="materials-input">Materials: </label>
              </div>
              <input
                type="text" 
                id="materials-input"
                className="materials-input form-input"
                name="materials"
                value={gnome.materials}
                onChange={handleChange}
                required
              />
            </div> 

            <div className='form-label-input-div'>
              <div className="label-div">
                <label htmlFor="category-input">Category: </label>
              </div>
              <input
                type="text" 
                id="category-input"
                className="category-input form-input"
                name="category"
                value={gnome.category}
                onChange={handleSelect}
                required
              />
            </div>
            <button type="submit" className="form-submit-button">Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ProductCreate;