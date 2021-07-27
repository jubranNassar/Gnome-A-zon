import { set } from 'lodash';
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
      <label htmlFor = "search-bar">Search: </label>
      <input type="text" 
        id= "search-bar"
        name="search-bar"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  )
}

export default Search;