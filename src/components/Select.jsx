

function Select({countries , handleSelect}) {

const handleClick =(ev)=>{
  handleSelect(ev.target.value);
}

  return (
    <label htmlFor="continent">
        By Continent: 
        <select id="continent" onChange={handleClick}>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="South America">South America</option>
        <option value="North America">North America</option>
        <option value="Oceania">Oceania</option>
        <option value="Asia">Asia</option>
        </select>
    </label>
  )
}

export default Select