

function Select({countries , setSelectContinent}) {


  return (
    <label htmlFor="continent">
        By Continent: 
        <select id="continent" onChange={(e)=>  setSelectContinent(e.target.value)}>
        <option value="All">All</option>
        {countries.map((country, i) => (
          <option key={i} value={country.continents[0]}>{country.continents}</option>
        ))}
        </select>
    </label>
  )
}

export default Select