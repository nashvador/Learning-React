import { useState, useEffect } from "react";

import axios from "axios";



function App() {
const [countryData, setCountryData] = useState([])
const [countrySearch, setCountrySearch] = useState('')
// Ask david if we should put usefecct in const
// Why do I have to add a return statement

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
  return filteredData.map(countries => <div>{countries.name.common}</div>)
} else if (filteredData.length == 1) {
  console.log(filteredData[0])
  return (<div>
    <h1>{filteredData[0].name.common}</h1>
    <p>capital {filteredData[0].capital}</p>
    <p>area {filteredData[0].area}</p>
    <h2>languages</h2>
    <ul>{(Object.values(filteredData[0].languages)).map(language => <li>{language}</li>)}</ul>
    <img src={filteredData[0].flags.png}></img>
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
