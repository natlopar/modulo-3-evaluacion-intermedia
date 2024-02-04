import Country from './Country';

function ListCountries({ countries, handleDelete }) {
  const mapSection = () => {
    return countries.map((country, i) => (
      <li key={i} id={i}>
        <Country country={country} id={i} handleDelete={handleDelete} />
      </li>
    ));
  };

  return <ul className="containerCountries">{mapSection()}</ul>;
}

export default ListCountries;
