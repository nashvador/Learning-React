import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getFetchDadJokes();
  }, []);

  const getFetchDadJokes = async function fetchDadJokes() {
    try {
      let response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });
      let jokes = await response.json();
      setUserData(jokes);
      return;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="laugh">
      <h4 className="caption">Don't Laugh</h4>
      <p id="funny">{userData.joke}</p>
      <button className="button" onClick={() => getFetchDadJokes()}>
        Get Another Joke
      </button>
    </div>
  );
}

export default App;
