import Multiselect from 'multiselect-react-dropdown';

function CollectionSelect({setSelectedCollections, collectionID, selectedValues}) {
  
    const handleSelect = (option) => {
      setSelectedCollections([...option]);
    }
  
    return (
      <div className="collection-select-div">
        <Multiselect
          isObject={false}
          name = "category"
          id = {collectionID}
          className="category-input-pc form-input-pc"
          options = {['holiday', 'humorous', 'hobbies', 'traditional', 'cheeky', 'pop culture', 'seasons', 'spooky', 'other']}
          selectedValues={selectedValues}
          onSelect = {handleSelect}
          onRemove = {handleSelect}
          showCheckbox
          style={{chips: {background: '#8fc25e'}}}
        />
      </div>

  )
}

export default CollectionSelect;