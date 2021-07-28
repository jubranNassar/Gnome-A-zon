import Multiselect from 'multiselect-react-dropdown';

function CollectionSelect({setSelectedCollections, collectionID}) {
  
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
          options = {['holiday', 'humorous', 'hobbies', 'traditional', 'cheeky', 'pop culture', 'other']}
          onSelect = {handleSelect}
          onRemove = {handleSelect}
          showCheckbox
          style={{chips: {background: '#8fc25e'}}}
        />
      </div>

  )
}

export default CollectionSelect;