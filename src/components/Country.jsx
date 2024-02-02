
function Country({country}) {
  return (
    <article className="card">
      <p>{country.flag}</p>
      <h3>{country.name.common}</h3>
      <h5>{country.capital}</h5>
      <h4>{country.continents}</h4>
    </article>
  )
}

export default Country