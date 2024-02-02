import { useState } from 'react'
import '../styles/App.scss'
import data from '../services/data.json'
import Filters from './Filters'
import ListCountries from './ListCountries'
function App() {


const [countries, setCountries] = useState(data);

const[searchCountry, setSearchCountry] = useState ('');
const filteredCountries = countries.filter((country)=> 
    country.name.common.toLowerCase().includes(searchCountry.toLowerCase()));



  return (
    <>
    <header>
    <h1>Country Info App</h1>
    <h2>Explore information about countries, capitals and flags</h2>
    <h3>Add new countries and filter through the list!</h3>
    </header>
    <main>
        <Filters setSearchCountry={setSearchCountry}/>
        <section>
        <ListCountries countries={filteredCountries}/>
        </section>
    </main>
    
    </>

  
  )
}

export default App