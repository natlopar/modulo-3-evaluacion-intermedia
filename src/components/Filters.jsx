import Select from "./Select"

function Filters({setSearchCountry, countries, setSelectContinent}) {



  return (
    <>
    <h4>Filters</h4>
    <form className="form">
      <label htmlFor="country">
        By Country: 
        <input type="text" id="country" onChange={(ev)=> { setSearchCountry(ev.target.value)}}/></label>

      <Select countries={countries} setSelectContinent={setSelectContinent}/>
    </form>
    </>
  )
}

export default Filters