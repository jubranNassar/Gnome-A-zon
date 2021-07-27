import Multiselect from 'multiselect-react-dropdown';
import { useState } from 'react';

function CollectionSelect({selectedCollections, setSelectedCollections}) {
  
    const handleSelect = (option) => {
      console.log(option);
      setSelectedCollections(...selectedCollections, option);
    }
  
    return (
      <div className="collection-select-div">
        <Multiselect
          isObject={false}
          name = "category"
          id = "category-input"
          className="category-input-pc form-input-pc"
          options = {['holiday', 'humorous', 'hobbies', 'traditional', 'cheeky', 'pop culture', 'other']}
          onSelect = {handleSelect}
          showCheckbox
          style={{chips: {background: '#8fc25e'}}}
        />
      </div>

  )
}

export default CollectionSelect;