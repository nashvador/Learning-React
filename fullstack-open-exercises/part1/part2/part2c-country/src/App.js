import { useState, useEffect } from "react";

import axios from "axios";

const NewCountry = ({countries}) => {
  const [show, setShow] = useState(true)
const displayStyle = {
  display: "none"
}

const notDisplayStyle = {
  display: "inherit"
}
return( 
  <div>{countries.name.common}<button onClick={() => setShow(oldShow => !oldShow)}>shown</button>
   <div style={show ? displayStyle : notDisplayStyle }>
  <h1>{countries.name.common}</h1>
    <p>capital {countries.capital}</p>
    <p>area {countries.area}</p>
    <h2>languages</h2>
    <ul>{(Object.values(countries.languages)).map(language => <li>{language}</li>)}</ul>
    <img src={countries.flags.png}></img>
  </div>
  </div>
)  
} 


function App() {
const [countryData, setCountryData] = useState([])
const [countrySearch, setCountrySearch] = useState('')


useEffect(()=> {
axios.get('https://restcountries.com/v3.1/all').then(response => setCountryData(response.data))
}, [])

const onCountrySearch = (event) => {
  setCountrySearch(event.target.value)
}






let filteredData = countryData.filter((newData) => newData.name.common.toLowerCase().includes(countrySearch.toLowerCase()))

const filterCountryData = () => {
if (filteredData.length > 10) {
  return <div>Too many countries</div>
} else if (filteredData.length <10 && filteredData.length > 1) {

  return filteredData.map((countries) =>  <div> <NewCountry countries={countries} />
  </div>)
} else if (filteredData.length == 1) {
  let singleCountryData = filteredData[0]
  return (<div>
    <h1>{singleCountryData.name.common}</h1>
    <p>capital {singleCountryData.capital}</p>
    <p>area {singleCountryData.area}</p>
    <h2>languages</h2>
    <ul>{(Object.values(singleCountryData.languages)).map(language => <li>{language}</li>)}</ul>
    <img src={singleCountryData.flags.png}></img>
  </div>)

}
}

  return (
    <div>
      find countries <input value={countrySearch} onChange={onCountrySearch}></input>
      {filterCountryData()}
    </div>
  );
}

export default App;
