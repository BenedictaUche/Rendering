import React from 'react'

const Course = ({courses, Total, Content, Header}) => {
  return (
    <div>
        {courses.map((course) => (
          <div key={course.id}>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
          </div>
        ))}
      </div>
  )
}

export default Course
