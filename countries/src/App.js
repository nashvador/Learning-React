import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [countryData, setCountryData] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchData, setSearchData] = useState();

  useEffect(() => {
    const getCountryData = async function countryDataGet() {
      try {
        let response = await fetch("https://restcountries.com/v3.1/all");
        let data = await response.json();
        setCountryData(data);
      } catch (err) {
        console.log(err);
      }
    };
    getCountryData();
  }, []);

  useEffect(() => {
    setFilteredCountries(
      countryData.filter((countries) =>
        countries.name.common.toLowerCase().includes(searchData.toLowerCase())
      )
    );
  }, [countryData, searchData]);

  console.log(countryData);
  console.log(filteredCountries);

  const onChangeHandler = (event) => {
    setSearchData(event.target.value);
  };

  return (
    <div>
      find countries : <input onChange={onChangeHandler}></input>
      <ul>
        {filteredCountries.length > 10 ? (
          <div>Narrow your search there are more than 10</div>
        ) : (
          filteredCountries.map((country, i) => (
            <li key={i}>{country.name.common}</li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
