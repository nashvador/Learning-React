import React from "react";

const Course = (props) => {
  const [{ name, parts }, { name: name2, parts: parts2 }] = props.courses;
  //   const { courses } = props;
  //   const { parts } = courses;
  const courseElem = parts.map((elem) => (
    <p key={elem.id}>
      {elem.name}, {elem.exercises}
    </p>
  ));
  const courseElem2 = parts2.map((elem) => (
    <p key={elem.id}>
      {elem.name}, {elem.exercises}
    </p>
  ));
  const reduce = parts.reduce(function (prevVal, curVal) {
    return prevVal + curVal.exercises;
  }, 0);
  const reduce2 = parts2.reduce(function (prevVal, curVal) {
    return prevVal + curVal.exercises;
  }, 0);
  return (
    <div>
      <h1>{name}</h1>
      {courseElem}
      <p style={{ fontWeight: "bold" }}>total of {reduce}</p>
      {courseElem2}
      <p style={{ fontWeight: "bold" }}>total of {reduce2}</p>
    </div>
  );
};

export default Course;
