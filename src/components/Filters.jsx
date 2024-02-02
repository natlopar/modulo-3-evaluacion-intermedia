
function Filters({setSearchCountry}) {
  return (
    <>
    <h4>Filters</h4>
    <form className="form">
      <label htmlFor="country">
        By Country: 
        <input type="text" id="country" onChange={(ev)=> { setSearchCountry(ev.target.value)}}/></label>

      {/* <label htmlFor="continent">
        By Continent: 
        <select type="select" id="continent" onChange={handleChange}>
        <option value="All">All</option>
        {countries.map((country,i)=> <option value={country.continents}>{country.continents}</option> )}
        </select></label> */}
    </form>
    </>
  )
}

export default Filters