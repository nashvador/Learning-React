import React from "react";

const Course = (props) => {
    const []
  //   const { courses } = props;
  //   const { parts } = courses;
  //   const courseElem = parts.map((elem) => (
  //     <p key={elem.id}>
  //       {elem.name}, {elem.exercises}
  //     </p>
  //   ));
  //   const reduce = parts.reduce(function (prevVal, curVal) {
  //     return prevVal + curVal.exercises;
  //   }, 0);
  return (
    <div>
      <h1>{props.courses.name}</h1>
      {/* {courseElem}
      <p>total of {reduce}</p> */}
    </div>
  );
};

export default Course;
