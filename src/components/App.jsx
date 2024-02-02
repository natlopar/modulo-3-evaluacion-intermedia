import { useState } from 'react';
import '../styles/App.scss';
import data from '../services/data.json';
import Filters from './Filters';
import ListCountries from './ListCountries';
function App() {
  const [countries, setCountries] = useState(data);
  const [searchCountry, setSearchCountry] = useState('');
  const [selectContinent, setSelectContinent] = useState('All');

  let filteredCountries = countries
    .filter((country) =>
      country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
    )

    .filter((country) => {
        return selectContinent === "All" ? true : country.continents[0] === selectContinent
    }
    );

  //si en vez de enviar setSelect envío fx handle para event..

  const handleSelect = (value) => {
    setSelectContinent(value);
    if(setSelectContinent === 'All'){
        filteredCountries = countries; 
    }
  };

  return (
    <>
      <header>
        <h1>Country Info App</h1>
        <h2>Explore information about countries, capitals and flags</h2>
        <h3>Add new countries and filter through the list!</h3>
      </header>
      <main>
        <Filters
          setSearchCountry={setSearchCountry}
          countries={countries}
          handleSelect={handleSelect}
        />
        <section>
          <ListCountries countries={filteredCountries} />
        </section>
      </main>
    </>
  );
}

export default App;
