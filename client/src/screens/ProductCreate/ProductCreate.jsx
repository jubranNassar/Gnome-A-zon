import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { createGnome } from '../../services/gnomes.js'
import Layout from '../../components/Layout/Layout.jsx'
import './ProductCreate.css'

function ProductCreate(props) {

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
      <div className='forms-screen-pc'>
        <div className='forms-card-pc'>
          <h3 className='form-title-pc'>Sell a Gnome</h3>
          <form className='create-form-pc' onSubmit={handleSubmit}>


            <div className='form-label-input-div-pc'>
              <div className="label-div-pc">
                  <label htmlFor="name-input">Gnome Name:</label>
                </div>
              <input 
                type="text" 
                id="name-input"
                className="name-input form-input-pc"
                name="name"
                value={gnome.name}
                onChange={handleChange}
                required
                autoFocus
              />
            </div>

            <div className='form-label-input-div-pc'>
              <div className="label-div-pc">
                <label htmlFor="price-input">Price: </label>
              </div>
              <input
                type="text" 
                id="price-input"
                className="price-input-pc form-input-pc"
                name="price"
                value={gnome.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className='form-label-input-div-pc'>
              <div className="label-div-pc">
                <label htmlFor="details-input">Details: </label>
              </div>
              <textarea 
                id="details-input"
                className="details-input-pc form-input-pc"
                name="details"
                rows = "4"
                value={gnome.details}
                onChange={handleChange}
                required
              />
            </div>

            <div className='form-label-input-div-pc'>
              <div className="label-div-pc">
                <label htmlFor="imageURL-input">Image URL: </label>
              </div>
              <input 
                type="text" 
                id="imageURL-input"
                className="imageURL-input-pc form-input-pc"
                name="image_url"
                value={gnome.image_url}
                onChange={handleChange}
                required
            />
            </div>

            <div className='form-label-input-div-pc'>  
              <div className="label-div-pc">   
                <label htmlFor="materials-input">Materials: </label>
              </div>
              <input
                type="text" 
                id="materials-input"
                className="materials-input-pc form-input-pc"
                name="materials"
                value={gnome.materials}
                onChange={handleChange}
                required
              />
            </div> 

            <div className='form-label-input-div-pc'>
              <div className="label-div-pc">
                <label htmlFor="category-input">Category: </label>
              </div>
              <input
                type="text" 
                id="category-input"
                className="category-input-pc form-input-pc"
                name="category"
                value={gnome.category}
                onChange={handleSelect}
                required
              />
            </div>
            <button type="submit" className="form-submit-button-pc">Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ProductCreate;