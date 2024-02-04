
function Country({country, id, handleDelete}) {

  const handleClick =(e)=>{
    const indexClicked = e.target.id;
    handleDelete(indexClicked);

  }
  return (
    <article className="card">
      <span onClick={handleClick} id={id}>X</span>
      <p>{country.flag}</p>
      <h3>{country.name.common}</h3>
      <h5>{country.capital}</h5>
      <h4>{country.continents}</h4>
    </article>
  )
}

export default Country