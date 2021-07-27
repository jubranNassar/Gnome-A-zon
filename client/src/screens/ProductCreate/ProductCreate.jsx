import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { createGnome } from '../../services/gnomes.js'
import Layout from '../../components/Layout/Layout.jsx'
import MaterialSelect from '../../components/MaterialSelect/MaterialSelect.jsx'
import CollectionSelect from '../../components/CollectionSelect/CollectionSelect.jsx'
import './ProductCreate.css'

function ProductCreate(props) {

  const [gnome, setGnome] = useState( {
    name: '',
    price: '',
    details: '',
    image_url: '',
    category: [],
    materials: [],
    seller: props.user ? props.user.id : null
  });

  const [isCreated, setCreated] = useState(false);

  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedCollections, setSelectedCollections] = useState([]);

  useEffect(()=>{
    setGnome({...gnome, materials: [...selectedMaterials], category: [...selectedCollections]})
  },[selectedCollections, selectedMaterials,])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGnome({
      ...gnome,
      [name]: value
    })
  }


  const handleSubmit = async(e) => {
    e.preventDefault();
    setGnome({...gnome, materials: [...selectedMaterials], category: [...selectedCollections], seller: props.user.id});
    const created = await createGnome(gnome);
    setCreated({ created })
  }

  if(isCreated) {
    return <Redirect to={'/gnomes'} />
  }

  if(!props.user || Object.keys(props.user).length === 0) {
    return (
      <Layout>
        <h3>Please sign in to add a gnome to the market.</h3>
      </Layout>
    )
  } else {

  return (
    <Layout user={props.user}>
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
              <MaterialSelect setSelectedMaterials={setSelectedMaterials}/>
            </div> 

            <div className='form-label-input-div-pc'>
              <div className="label-div-pc">
                <label htmlFor="category-input">Category: </label>
              </div>
              <CollectionSelect setSelectedCollections={setSelectedCollections}
              />
            </div>
            <button type="submit" className="form-submit-button-pc btn btn-slide-up">Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  )
}
}

export default ProductCreate;