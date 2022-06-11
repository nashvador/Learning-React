import React from "react"

const Course = ({course}) => {
    return (
      <div>
        {course.map((course)=> <div key={course.id}>     <Header header={course.name} />
        <Content content={course.parts} />
        <Sum total={course.parts} /> </div> )}
  
      </div>
    )
  }
  
  const Header = ({header}) => {
    return (<div>
      <h1>{header}</h1>
    </div>)
  }
  
  const Content = ({content}) => {
    return (<div><Part content={content} /></div>)
  }
  
  const Part = ({content}) => {
    return (<div>{content.map(parts => <p key={parts.id}>{parts.name} {parts.exercises}</p>)}</div>)
  }
  
  const Sum = ({total}) => {
    const sumTotal = total.map(content => content.exercises).reduce((prev,next)=> prev+next)
  return (<div>Total exercises are {sumTotal}</div>)
  }
  
export default Course  