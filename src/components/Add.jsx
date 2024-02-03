function Add({handleAddNewCountry, handleCountries}) {

  const handleInput=(e)=>{
    const objectCountry = {
      key: e.target.id,
      value: e.target.value
    }
    handleAddNewCountry(objectCountry);
  }

  const handleClick =(e)=>{
    e.preventDefault();
    handleCountries();
  }
  return (
    <form>
        <h3>Add country</h3>
        <input type="text" placeholder="Country Name" onChange={handleInput} id="name"/>
        <input type="text" placeholder="Capital" onChange={handleInput} id="capital"/>
        <input type="text" placeholder="Flag Icon" onChange={handleInput} id="flag"/>
        <input type="text" placeholder="Continent" onChange={handleInput} id="continent"/>
        <button type="submit" onClick={handleClick} >Add Country</button>
    </form>
  )
}

export default Add