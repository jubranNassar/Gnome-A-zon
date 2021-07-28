
import { useState } from 'react';


function Search({products, setSearchResults}) {
  const [searchTerm, setSearchTerm] = useState("");
  

  const handleChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    const results = products.filter((gnome)=>{
      return (
      gnome.details.toLowerCase().includes(searchTerm) || 
      gnome.name.toLowerCase().includes(searchTerm) ||
      gnome.category.join(", ").toLowerCase().includes(searchTerm) ||
      gnome.materials.join(", ").toLowerCase().includes(searchTerm)
    )});
    setSearchResults(results);
  }

  return (
    <div id="search-sidebar">
      <form 
        id="product-search-form"
        onSubmit={(e)=>e.preventDefault()}>
        <div className="search-label-input-div">
        <input type="text" 
          id= "search-bar"
          name="search-bar"
          value={searchTerm}
          onChange={handleChange}
          blurOnSubmit={true}
          placeholder="Search"
        />
        </div>
      </form>
    </div>
  )
}

export default Search;