import Multiselect from 'multiselect-react-dropdown';
import { useState } from 'react';

function MaterialSelect({selectedMaterials, setSelectedMaterials}) {
  
    const handleSelect = (option) => {
      console.log(option)
      setSelectedMaterials(...selectedMaterials, option)
    }
  
    return (
      <div className="material-select-div">
        <Multiselect
          isObject={false}
          name = "materials"
          id = "materials-input"
          className="materials-input-pc form-input-pc"
          options = {['resin', 'clay', 'stone', 'plastic', 'ceramic', 'concrete', 'other']}
          onSelect = {handleSelect}
          showCheckbox
        />
      </div>

  )
}

export default MaterialSelect;