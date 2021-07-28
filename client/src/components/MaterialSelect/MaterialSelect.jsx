import Multiselect from 'multiselect-react-dropdown';

function MaterialSelect({setSelectedMaterials, materialID, selectedValues}) {
  
    const handleSelect = (option) => {
      setSelectedMaterials([...option]);
    }

  
    return (
      <div className="material-select-div">
        <Multiselect
          isObject={false}
          name = "materials"
          id = {materialID}
          className="materials-input-pc form-input-pc multiselect"
          options = {['resin', 'clay', 'stone', 'plastic', 'ceramic', 'concrete', 'other']}
          selectedValues={selectedValues}
          onSelect = {handleSelect}
          onRemove = {handleSelect}
          showCheckbox
          style={{chips: {background: '#8fc25e'}}}
        />
      </div>

  )
}

export default MaterialSelect;