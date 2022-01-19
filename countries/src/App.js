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
  }, [searchData]);

  console.log(countryData);
  console.log(filteredCountries);

  const onChangeHandler = (event) => {
    setSearchData(event.target.value);
  };

  const DisplayCountryData = () => {
    if (filteredCountries.length > 10) {
      return <div> Narrow your search to less than 10 countries </div>;
    } else if (filteredCountries.length === 1) {
      return (
        <div>
          <h1>{filteredCountries[0].name.common}</h1>
          <p>capital {filteredCountries[0].capital}</p>
          <p>population {filteredCountries[0].population}</p>
          <ul>
            {Object.values(filteredCountries[0].languages).map(
              (language, index) => (
                <li key={index}>{language}</li>
              )
            )}
          </ul>
          <img src={filteredCountries[0].flags.png}></img>
          {console.log(filteredCountries[0].flags)}
        </div>
      );
    } else {
      return (
        <div>
          <ul>
            {filteredCountries.map((country, index) => (
              <li key={index}>
                {country.name.common}
                <button>Show</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return (
    <div>
      find countries : <input onChange={onChangeHandler}></input>
      {/* <ul>
        {filteredCountries.length > 10 ? (
          <div>Narrow your search there are more than 10</div>
        ) : (
          filteredCountries.map((country, i) => (
            <li key={i}>{country.name.common}</li>
          ))
        )}
      </ul> */}
      <DisplayCountryData />{" "}
    </div>
  );
}

export default App;
