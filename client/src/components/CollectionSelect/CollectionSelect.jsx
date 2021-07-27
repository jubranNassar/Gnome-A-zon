import Multiselect from 'multiselect-react-dropdown';

function CollectionSelect({selectedCollections, setSelectedCollections}) {
  
    const handleSelect = (option) => {
      setSelectedCollections(...selectedCollections, option);
    }
  
    return (
      <div className="collection-select-div">
        <Multiselect
          isObject={false}
          name = "category"
          id = "category-input"
          className="category-input-pc form-input-pc multiselect"
          options = {['holiday', 'humorous', 'hobbies', 'traditional', 'cheeky', 'pop culture', 'other']}
          onSelect = {handleSelect}
          showCheckbox
          style={{chips: {background: '#8fc25e'}}}
        />
      </div>

  )
}

export default CollectionSelect;