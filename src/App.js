import React, { Component, useState, useEffect } from "react";
import "./App.css";
import "./components/imagefile.css";

const images = [
  "https://images.unsplash.com/photo-1559627755-42212e5c5fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  "https://images.unsplash.com/photo-1535182463927-440364075d9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  "https://images.unsplash.com/photo-1559627755-42212e5c5fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  "https://images.unsplash.com/photo-1505459668311-8dfac7952bf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1459745930869-b3d0d72c3cbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
];

function App() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  console.log(useState(0));

  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  const image = images.map((el, idx) => {
    return (
      <div className="container">
        <img
          src={el}
          onClick={() => handleOnClick(idx)}
          className={activeIndex === idx ? "active" : "hidden"}
        />
      </div>
    );
  });
  return <div className="body">{image}</div>;
}

export default App;
