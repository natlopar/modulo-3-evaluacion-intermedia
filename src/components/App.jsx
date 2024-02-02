import { useState } from 'react'
import '../styles/App.scss'
import data from '../services/data.json'
import Filters from './Filters'
import ListCountries from './ListCountries'
function App() {


const [countries, setCountries] = useState(data);




  return (
    <>
    <header>
    <h1>Country Info App</h1>
    <h2>Explore information about countries, capitals and flags</h2>
    <h3>Add new countries and filter through the list!</h3>
    </header>
    <main>
        <Filters/>
        <section>
        <ListCountries countries={countries}/>
        </section>
    </main>
    
    </>

  
  )
}

export default App