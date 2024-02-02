import { useState } from 'react'
import '../styles/App.scss'
import data from '../services/data.json'
import Filters from './Filters'
import ListCountries from './ListCountries'
function App() {


const [countries, setCountries] = useState(data);
const[searchCountry, setSearchCountry] = useState ('');
const [selectContinent, setSelectContinent] = useState ('');

const filteredCountries = countries.filter((country)=> 
    country.name.common.toLowerCase().includes(searchCountry.toLowerCase()))

    .filter((country) => {
        return country.continents.includes(selectContinent)})
    

    //si en vez de enviar setSelect envío fx handle para event..
// const handleSelect =(value)=>
// setSelectContinent(countries.push(value));


  return (
    <>
    <header>
    <h1>Country Info App</h1>
    <h2>Explore information about countries, capitals and flags</h2>
    <h3>Add new countries and filter through the list!</h3>
    </header>
    <main>
        <Filters setSearchCountry={setSearchCountry} countries={countries} setSelectContinent={setSelectContinent}/>
        <section>
        <ListCountries countries={filteredCountries}/>
        </section>
    </main>
    
    </>

  
  )
}

export default App